// gvthumb.cpp — Windows Explorer thumbnail provider for .gvdesign files.
//
// A .gvdesign file is gzipped JSON. Files saved by this build embed a JPEG
// preview as a "_preview" data-URL key at the root of the scene object. This
// provider does exactly what scripts/check-gvdesign-preview.cjs does, but as a
// native COM IThumbnailProvider so Explorer can render it:
//
//   read stream -> gunzip (zlib) -> find "_preview" -> base64-decode (crypt32)
//                -> decode JPEG/PNG (WIC) -> scale -> return HBITMAP
//
// Self-contained: static zlib + static CRT + system libs (WIC, crypt32). No
// .NET, no SharpShell, no redistributable required.

#include <windows.h>
#include <shlwapi.h>
#include <shlobj.h>       // SHChangeNotify
#include <olectl.h>       // SELFREG_E_CLASS
#include <thumbcache.h>   // IThumbnailProvider, WTS_ALPHATYPE
#include <propsys.h>      // IInitializeWithStream
#include <wincodec.h>     // WIC
#include <wincrypt.h>     // CryptStringToBinaryA
#include <new>
#include <string>
#include <vector>
#include "zlib.h"

#pragma comment(lib, "shlwapi.lib")
#pragma comment(lib, "windowscodecs.lib")
#pragma comment(lib, "crypt32.lib")
#pragma comment(lib, "ole32.lib")

// {9350F9C2-8A3E-4325-8A0A-49DF202A4666}
static const CLSID CLSID_GvThumb =
    { 0x9350F9C2, 0x8A3E, 0x4325, { 0x8A,0x0A,0x49,0xDF,0x20,0x2A,0x46,0x66 } };

static const wchar_t* kFriendlyName = L"Gravit Designer Thumbnail Handler";
static const wchar_t* kFileExt      = L".gvdesign";
// Well-known shellex category GUID for IThumbnailProvider handlers.
static const wchar_t* kThumbProviderShellEx =
    L"{e357fccd-a995-4576-b01f-234630154e96}";

static HMODULE g_hModule = nullptr;
static LONG    g_cRefDll = 0;

static std::wstring ClsidToString(REFCLSID clsid) {
    LPOLESTR s = nullptr;
    std::wstring out;
    if (SUCCEEDED(StringFromCLSID(clsid, &s)) && s) { out = s; CoTaskMemFree(s); }
    return out;
}

// ---------------------------------------------------------------------------
// gzip inflate (whole buffer) via zlib.
// ---------------------------------------------------------------------------
static bool GunzipAll(const BYTE* src, size_t srcLen, std::vector<BYTE>& out) {
    if (srcLen < 18) return false; // 10-byte header + 8-byte trailer minimum
    // ISIZE (uncompressed size mod 2^32) lives in the last 4 bytes, little-endian.
    DWORD isize = src[srcLen - 4] | (src[srcLen - 3] << 8) |
                  (src[srcLen - 2] << 16) | ((DWORD)src[srcLen - 1] << 24);

    z_stream zs; ZeroMemory(&zs, sizeof(zs));
    if (inflateInit2(&zs, 16 + MAX_WBITS) != Z_OK) return false; // 16 => gzip

    // Reserve ISIZE when plausible; otherwise start with a sane guess and grow.
    size_t cap = (isize > 0 && isize < (256u * 1024u * 1024u)) ? isize
                                                               : (srcLen * 4 + 4096);
    out.resize(cap);

    zs.next_in  = const_cast<Bytef*>(src);
    zs.avail_in = (uInt)srcLen;
    zs.next_out = out.data();
    zs.avail_out = (uInt)out.size();

    int rc;
    for (;;) {
        rc = inflate(&zs, Z_NO_FLUSH);
        if (rc == Z_STREAM_END) break;
        if (rc != Z_OK && rc != Z_BUF_ERROR) { inflateEnd(&zs); return false; }
        if (zs.avail_out == 0) { // need more room
            size_t used = out.size();
            if (out.size() > 512u * 1024u * 1024u) { inflateEnd(&zs); return false; }
            out.resize(out.size() * 2);
            zs.next_out  = out.data() + used;
            zs.avail_out = (uInt)(out.size() - used);
        } else if (rc == Z_BUF_ERROR) {
            // No progress and output space remains -> truncated input.
            inflateEnd(&zs); return false;
        }
    }
    out.resize(zs.total_out);
    inflateEnd(&zs);
    return true;
}

// ---------------------------------------------------------------------------
// Find "_preview":"data:...base64,XXXX" and decode XXXX to bytes.
// ---------------------------------------------------------------------------
static bool ExtractPreview(const std::vector<BYTE>& json, std::vector<BYTE>& imageOut) {
    static const char key[] = "\"_preview\"";
    const char* begin = reinterpret_cast<const char*>(json.data());
    size_t n = json.size();

    // Locate the key.
    const char* p = nullptr;
    for (size_t i = 0; i + sizeof(key) - 1 <= n; ++i) {
        if (memcmp(begin + i, key, sizeof(key) - 1) == 0) { p = begin + i; break; }
    }
    if (!p) return false;
    const char* end = begin + n;
    p += sizeof(key) - 1;
    while (p < end && *p != '"') ++p;     // skip ':' / whitespace to opening quote
    if (p >= end) return false;
    ++p;                                   // first char of the value
    const char* valStart = p;
    while (p < end && *p != '"') {         // value ends at the next unescaped quote
        if (*p == '\\' && p + 1 < end) p += 2; else ++p;
    }
    if (p >= end) return false;
    std::string url(valStart, p - valStart);

    // Strip the data-URL prefix: data:<mime>;base64,
    size_t comma = url.find(',');
    if (url.compare(0, 5, "data:") != 0 || comma == std::string::npos) return false;
    if (url.find(";base64") == std::string::npos) return false;
    std::string b64 = url.substr(comma + 1);

    DWORD outLen = 0;
    if (!CryptStringToBinaryA(b64.c_str(), (DWORD)b64.size(),
                              CRYPT_STRING_BASE64, nullptr, &outLen, nullptr, nullptr))
        return false;
    imageOut.resize(outLen);
    if (!CryptStringToBinaryA(b64.c_str(), (DWORD)b64.size(),
                              CRYPT_STRING_BASE64, imageOut.data(), &outLen, nullptr, nullptr))
        return false;
    imageOut.resize(outLen);
    return !imageOut.empty();
}

// ---------------------------------------------------------------------------
// Decode an in-memory image (JPEG/PNG) to a 32bpp top-down HBITMAP, scaled so
// its largest side is <= cx.
// ---------------------------------------------------------------------------
static HRESULT DecodeToHBITMAP(const std::vector<BYTE>& image, UINT cx, HBITMAP* phbmp) {
    *phbmp = nullptr;
    IWICImagingFactory* factory = nullptr;
    HRESULT hr = CoCreateInstance(CLSID_WICImagingFactory, nullptr, CLSCTX_INPROC_SERVER,
                                  IID_PPV_ARGS(&factory));
    if (FAILED(hr)) return hr;

    IWICStream* stream = nullptr;
    IWICBitmapDecoder* decoder = nullptr;
    IWICBitmapFrameDecode* frame = nullptr;
    IWICBitmapSource* source = nullptr;       // current source in the pipeline
    IWICBitmapScaler* scaler = nullptr;
    IWICFormatConverter* converter = nullptr;

    hr = factory->CreateStream(&stream);
    if (SUCCEEDED(hr))
        hr = stream->InitializeFromMemory(const_cast<BYTE*>(image.data()), (DWORD)image.size());
    if (SUCCEEDED(hr))
        hr = factory->CreateDecoderFromStream(stream, nullptr, WICDecodeMetadataCacheOnDemand, &decoder);
    if (SUCCEEDED(hr))
        hr = decoder->GetFrame(0, &frame);

    UINT w = 0, h = 0;
    if (SUCCEEDED(hr)) hr = frame->GetSize(&w, &h);
    if (SUCCEEDED(hr) && (w == 0 || h == 0)) hr = E_FAIL;

    if (SUCCEEDED(hr)) {
        source = frame; source->AddRef();

        // Scale down so the longest edge fits cx (never upscale).
        UINT tw = w, th = h;
        if (cx > 0 && (w > cx || h > cx)) {
            double s = (w >= h) ? (double)cx / w : (double)cx / h;
            tw = (UINT)(w * s + 0.5); if (tw == 0) tw = 1;
            th = (UINT)(h * s + 0.5); if (th == 0) th = 1;
            hr = factory->CreateBitmapScaler(&scaler);
            if (SUCCEEDED(hr))
                hr = scaler->Initialize(source, tw, th, WICBitmapInterpolationModeFant);
            if (SUCCEEDED(hr)) { source->Release(); source = scaler; source->AddRef(); }
        }

        // Convert to premultiplied BGRA for a DIB section.
        if (SUCCEEDED(hr)) hr = factory->CreateFormatConverter(&converter);
        if (SUCCEEDED(hr))
            hr = converter->Initialize(source, GUID_WICPixelFormat32bppPBGRA,
                                       WICBitmapDitherTypeNone, nullptr, 0.0,
                                       WICBitmapPaletteTypeCustom);
        if (SUCCEEDED(hr)) { source->Release(); source = converter; source->AddRef(); }

        if (SUCCEEDED(hr)) {
            BITMAPINFO bmi; ZeroMemory(&bmi, sizeof(bmi));
            bmi.bmiHeader.biSize = sizeof(BITMAPINFOHEADER);
            bmi.bmiHeader.biWidth = (LONG)tw;
            bmi.bmiHeader.biHeight = -(LONG)th;       // top-down
            bmi.bmiHeader.biPlanes = 1;
            bmi.bmiHeader.biBitCount = 32;
            bmi.bmiHeader.biCompression = BI_RGB;

            void* bits = nullptr;
            HBITMAP hbmp = CreateDIBSection(nullptr, &bmi, DIB_RGB_COLORS, &bits, nullptr, 0);
            if (hbmp && bits) {
                UINT stride = tw * 4;
                hr = source->CopyPixels(nullptr, stride, stride * th, (BYTE*)bits);
                if (SUCCEEDED(hr)) *phbmp = hbmp;
                else DeleteObject(hbmp);
            } else {
                hr = E_OUTOFMEMORY;
            }
        }
    }

    if (converter) converter->Release();
    if (scaler) scaler->Release();
    if (source) source->Release();
    if (frame) frame->Release();
    if (decoder) decoder->Release();
    if (stream) stream->Release();
    factory->Release();
    return hr;
}

// ---------------------------------------------------------------------------
// The provider object: IInitializeWithStream + IThumbnailProvider.
// ---------------------------------------------------------------------------
class GvThumbProvider : public IInitializeWithStream, public IThumbnailProvider {
public:
    GvThumbProvider() : m_cRef(1), m_stream(nullptr) { InterlockedIncrement(&g_cRefDll); }
    ~GvThumbProvider() { if (m_stream) m_stream->Release(); InterlockedDecrement(&g_cRefDll); }

    // IUnknown
    IFACEMETHODIMP QueryInterface(REFIID riid, void** ppv) {
        static const QITAB qit[] = {
            QITABENT(GvThumbProvider, IInitializeWithStream),
            QITABENT(GvThumbProvider, IThumbnailProvider),
            { nullptr, 0 },
        };
        return QISearch(this, qit, riid, ppv);
    }
    IFACEMETHODIMP_(ULONG) AddRef() { return InterlockedIncrement(&m_cRef); }
    IFACEMETHODIMP_(ULONG) Release() {
        ULONG r = InterlockedDecrement(&m_cRef);
        if (r == 0) delete this;
        return r;
    }

    // IInitializeWithStream
    IFACEMETHODIMP Initialize(IStream* pstream, DWORD) {
        if (m_stream) return E_UNEXPECTED;   // already initialized
        if (!pstream) return E_INVALIDARG;
        m_stream = pstream;
        m_stream->AddRef();
        return S_OK;
    }

    // IThumbnailProvider
    IFACEMETHODIMP GetThumbnail(UINT cx, HBITMAP* phbmp, WTS_ALPHATYPE* pdwAlpha) {
        if (!phbmp || !pdwAlpha) return E_INVALIDARG;
        *phbmp = nullptr;
        *pdwAlpha = WTSAT_ARGB;
        if (!m_stream) return E_UNEXPECTED;

        std::vector<BYTE> raw;
        if (!ReadStream(m_stream, raw) || raw.size() < 18) return E_FAIL;
        if (!(raw[0] == 0x1f && raw[1] == 0x8b)) return E_FAIL; // not gzip

        std::vector<BYTE> json;
        if (!GunzipAll(raw.data(), raw.size(), json)) return E_FAIL;

        std::vector<BYTE> image;
        if (!ExtractPreview(json, image)) return E_FAIL;        // no embedded preview

        HRESULT hr = DecodeToHBITMAP(image, cx ? cx : 256, phbmp);
        return SUCCEEDED(hr) && *phbmp ? S_OK : E_FAIL;
    }

private:
    static bool ReadStream(IStream* s, std::vector<BYTE>& out) {
        out.clear();
        const ULONG kChunk = 64 * 1024;
        BYTE buf[64 * 1024];
        for (;;) {
            ULONG read = 0;
            HRESULT hr = s->Read(buf, kChunk, &read);
            if (read) out.insert(out.end(), buf, buf + read);
            if (hr != S_OK || read == 0) break;
            if (out.size() > 300u * 1024u * 1024u) return false; // sanity cap
        }
        return !out.empty();
    }

    LONG     m_cRef;
    IStream* m_stream;
};

// ---------------------------------------------------------------------------
// Class factory.
// ---------------------------------------------------------------------------
class ClassFactory : public IClassFactory {
public:
    ClassFactory() : m_cRef(1) { InterlockedIncrement(&g_cRefDll); }
    ~ClassFactory() { InterlockedDecrement(&g_cRefDll); }

    IFACEMETHODIMP QueryInterface(REFIID riid, void** ppv) {
        if (riid == IID_IUnknown || riid == IID_IClassFactory) {
            *ppv = static_cast<IClassFactory*>(this);
            AddRef();
            return S_OK;
        }
        *ppv = nullptr;
        return E_NOINTERFACE;
    }
    IFACEMETHODIMP_(ULONG) AddRef() { return InterlockedIncrement(&m_cRef); }
    IFACEMETHODIMP_(ULONG) Release() {
        ULONG r = InterlockedDecrement(&m_cRef);
        if (r == 0) delete this;
        return r;
    }
    IFACEMETHODIMP CreateInstance(IUnknown* pUnkOuter, REFIID riid, void** ppv) {
        if (pUnkOuter) return CLASS_E_NOAGGREGATION;
        GvThumbProvider* p = new (std::nothrow) GvThumbProvider();
        if (!p) return E_OUTOFMEMORY;
        HRESULT hr = p->QueryInterface(riid, ppv);
        p->Release();
        return hr;
    }
    IFACEMETHODIMP LockServer(BOOL fLock) {
        if (fLock) InterlockedIncrement(&g_cRefDll); else InterlockedDecrement(&g_cRefDll);
        return S_OK;
    }
private:
    LONG m_cRef;
};

// ---------------------------------------------------------------------------
// Registry helpers.
// ---------------------------------------------------------------------------
static LONG SetRegStr(HKEY root, const std::wstring& sub, const wchar_t* name,
                      const std::wstring& val) {
    HKEY h;
    LONG rc = RegCreateKeyExW(root, sub.c_str(), 0, nullptr, 0, KEY_WRITE, nullptr, &h, nullptr);
    if (rc != ERROR_SUCCESS) return rc;
    rc = RegSetValueExW(h, name, 0, REG_SZ, (const BYTE*)val.c_str(),
                        (DWORD)((val.size() + 1) * sizeof(wchar_t)));
    RegCloseKey(h);
    return rc;
}

// ---------------------------------------------------------------------------
// DLL exports.
// ---------------------------------------------------------------------------
STDAPI DllGetClassObject(REFCLSID rclsid, REFIID riid, void** ppv) {
    if (rclsid != CLSID_GvThumb) return CLASS_E_CLASSNOTAVAILABLE;
    ClassFactory* f = new (std::nothrow) ClassFactory();
    if (!f) return E_OUTOFMEMORY;
    HRESULT hr = f->QueryInterface(riid, ppv);
    f->Release();
    return hr;
}

STDAPI DllCanUnloadNow() { return g_cRefDll == 0 ? S_OK : S_FALSE; }

STDAPI DllRegisterServer() {
    wchar_t module[MAX_PATH];
    if (!GetModuleFileNameW(g_hModule, module, MAX_PATH)) return HRESULT_FROM_WIN32(GetLastError());
    std::wstring clsid = ClsidToString(CLSID_GvThumb);
    if (clsid.empty()) return E_FAIL;

    std::wstring clsidKey = L"CLSID\\" + clsid;
    if (SetRegStr(HKEY_CLASSES_ROOT, clsidKey, nullptr, kFriendlyName) != ERROR_SUCCESS)
        return SELFREG_E_CLASS;
    if (SetRegStr(HKEY_CLASSES_ROOT, clsidKey + L"\\InprocServer32", nullptr, module) != ERROR_SUCCESS)
        return SELFREG_E_CLASS;
    SetRegStr(HKEY_CLASSES_ROOT, clsidKey + L"\\InprocServer32", L"ThreadingModel", L"Apartment");

    // Associate the handler with the file extension.
    std::wstring shellEx = std::wstring(kFileExt) + L"\\ShellEx\\" + kThumbProviderShellEx;
    if (SetRegStr(HKEY_CLASSES_ROOT, shellEx, nullptr, clsid) != ERROR_SUCCESS)
        return SELFREG_E_CLASS;

    SHChangeNotify(SHCNE_ASSOCCHANGED, SHCNF_IDLIST, nullptr, nullptr);
    return S_OK;
}

STDAPI DllUnregisterServer() {
    std::wstring clsid = ClsidToString(CLSID_GvThumb);
    std::wstring shellEx = std::wstring(kFileExt) + L"\\ShellEx\\" + kThumbProviderShellEx;
    RegDeleteTreeW(HKEY_CLASSES_ROOT, shellEx.c_str());
    if (!clsid.empty())
        RegDeleteTreeW(HKEY_CLASSES_ROOT, (L"CLSID\\" + clsid).c_str());
    SHChangeNotify(SHCNE_ASSOCCHANGED, SHCNF_IDLIST, nullptr, nullptr);
    return S_OK;
}

BOOL WINAPI DllMain(HINSTANCE hInst, DWORD reason, LPVOID) {
    if (reason == DLL_PROCESS_ATTACH) {
        g_hModule = hInst;
        DisableThreadLibraryCalls(hInst);
    }
    return TRUE;
}
