/**
 * Module 166 - GRendererConfig
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (exports, module) {
  var i = {
    Scene: 1,
    Editor: 2,
    None: 0
  };
  exports.exports = {
    ENABLE_RENDERER: true,
    ENABLE_TIMING: "function" == typeof console.time && false,
    USE_OFFSCREEN_ALWAYS: false,
    ZOOM_STEP: 37.5,
    CANVAS_GRID_HORIZONTAL: 1,
    CANVAS_GRID_VERTICAL: 1,
    WORKER_RENDERING_ENABLED: false,
    DEBUG_LEVEL: 2,
    MAX_TIME_PER_JOB: 75,
    CACHE_CANVAS_GRID_ITEM_WIDTH: 1024,
    CACHE_CANVAS_GRID_ITEM_HEIGHT: 1024,
    ENABLE_CACHE: true,
    MAX_CACHED_PER_ONE_ZOOM: 64,
    MAX_CACHED_ZOOM_LEVELS: 5,
    CACHE_WHEN_DRAWING_LONGER_THAN: 50,
    QUICK_RENDER_WHEN_PANNING: false,
    QUICK_RENDER_WHEN_ZOOMING: false,
    NO_WEBGL_WHEN_PANNING: true,
    NO_WEBGL_WHEN_ZOOMING: true,
    DRAW_DURING_RENDERING: false,
    SHOW_LOWRES_GIMMICK: true,
    SHOW_LOWRES_GIMMICK_FOR_QUICKRENDER: false,
    RERENDER_ZOOM_AFTER_MS: 750,
    RERENDER_PAN_AFTER_MS: 100,
    AGGRESIVE_MEMORY_SWEEPER: false,
    DELETE_BLEND_AND_GRADIENT_TEXTURES_AFTER_DRAW: false,
    DELETE_EFFECT_TEXTURES_AFTER_DRAW: false,
    MAX_INITIAL_RENDER_BUFFER_SIZE: 32768,
    MIN_INITIAL_RENDER_BUFFER_SIZE: 512,
    MAX_MEMORY_POOL_SIZE: 31457280,
    ENABLE_DEBUG: false,
    DBG_AREAS_INFO: i,
    DEBUG_AREAS: i.None,
    SHOW_DEBUG_CANVAS_CACHE: false,
    SHOW_CACHE_DIRTIES: false,
    SHOW_CACHE_DEBUG_LOG: false,
    DEBUG_GRID_PAINT_DELAY: 0
  }, exports.exports.SHOW_LOWRES_GIMMICK;
}
