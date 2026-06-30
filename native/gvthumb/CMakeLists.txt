cmake_minimum_required(VERSION 3.20)

# Use the static MSVC runtime so the resulting DLL has no VC++ redistributable
# dependency (it loads into Explorer / dllhost on arbitrary machines).
cmake_policy(SET CMP0091 NEW)
set(CMAKE_MSVC_RUNTIME_LIBRARY "MultiThreaded$<$<CONFIG:Debug>:Debug>")

project(GravitThumbnail LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# --- zlib (statically linked, fetched at configure time) -------------------
include(FetchContent)
set(ZLIB_BUILD_EXAMPLES OFF CACHE BOOL "" FORCE)
FetchContent_Declare(
    zlib
    URL      https://github.com/madler/zlib/releases/download/v1.3.1/zlib-1.3.1.tar.gz
    URL_HASH SHA256=9a93b2b7dfdac77ceba5a558a580e74667dd6fede4585b91eefb60f03b72df23
)
FetchContent_MakeAvailable(zlib)

# --- the thumbnail provider DLL --------------------------------------------
add_library(GravitThumbnail SHARED
    gvthumb.cpp
    gvthumb.def
)

target_include_directories(GravitThumbnail PRIVATE
    ${zlib_SOURCE_DIR}
    ${zlib_BINARY_DIR}   # generated zconf.h
)

target_link_libraries(GravitThumbnail PRIVATE
    zlibstatic
    windowscodecs
    crypt32
    shlwapi
    ole32
)

# Force the .def so the four COM entry points are exported under all configs.
if (MSVC)
    set_target_properties(GravitThumbnail PROPERTIES
        LINK_FLAGS "/DEF:${CMAKE_CURRENT_SOURCE_DIR}/gvthumb.def")
endif()

set_target_properties(GravitThumbnail PROPERTIES
    OUTPUT_NAME "GravitThumbnail"
    PREFIX "")
