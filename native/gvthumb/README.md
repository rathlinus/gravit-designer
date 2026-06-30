# Gravit Designer — Windows Explorer thumbnail provider

A native `IThumbnailProvider` COM DLL that makes Windows Explorer show real
thumbnails for `.gvdesign` files.

It reads the JPEG preview that this build embeds in every saved file (the
`_preview` data-URL key — see [`scripts/check-gvdesign-preview.cjs`](../../scripts/check-gvdesign-preview.cjs)),
so it does **not** render vectors itself:

```
.gvdesign (gzip)  ->  gunzip (zlib)  ->  find "_preview"  ->  base64 decode
                  ->  decode JPEG/PNG (WIC)  ->  scale  ->  HBITMAP for Explorer
```

Self-contained: static zlib + static MSVC runtime + system libraries
(Windows Imaging Component, crypt32). No .NET, no SharpShell, no redistributable.

> Only files **saved after** the preview-embedding change carry a `_preview`.
> Older files show the default icon until re-saved.

## Build locally

Requires Visual Studio 2022 (Desktop C++) and CMake 3.20+.

```pwsh
cd native/gvthumb
cmake -B build -A x64
cmake --build build --config Release
# -> build/Release/GravitThumbnail.dll
```

CI builds this automatically and attaches the DLL to every GitHub release
(see [`.github/workflows/thumbnail-provider.yml`](../../.github/workflows/thumbnail-provider.yml)).

## Install

1. Put `GravitThumbnail.dll`, `register.bat`, `unregister.bat` in one folder.
2. Right-click `register.bat` → **Run as administrator**.
3. Browse to a folder of `.gvdesign` files saved by the app — thumbnails appear.

`register.bat` runs `regsvr32` and clears the thumbnail cache so changes show
immediately. To remove: run `unregister.bat` as administrator.

## How it's registered

`DllRegisterServer` writes:

- `HKCR\CLSID\{9350F9C2-8A3E-4325-8A0A-49DF202A4666}` → friendly name + `InprocServer32` (Apartment)
- `HKCR\.gvdesign\ShellEx\{e357fccd-a995-4576-b01f-234630154e96}` → the CLSID
  (`{e357...}` is the well-known IThumbnailProvider category)

## Notes / troubleshooting

- Explorer caches thumbnails aggressively. If a thumbnail doesn't update, run
  Disk Cleanup → "Thumbnails", or re-run `register.bat`.
- The handler runs inside the isolated `dllhost.exe` surrogate (default), so a
  failure can't crash Explorer — it just falls back to the file's icon.
- Verify a file actually carries a preview first:
  `node scripts/check-gvdesign-preview.cjs "file.gvdesign"`.
