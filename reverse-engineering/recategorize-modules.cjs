/**
 * Re-categorize and rename AST-extracted modules based on updated module-map.json
 * Moves files to proper categories and renames with class names where known.
 */

const fs = require('fs');
const path = require('path');

const AST_DIR = path.join(__dirname, 'ast-extracted-modules');
const MAP_FILE = path.join(__dirname, 'extracted-modules', 'module-map.json');

const moduleMap = JSON.parse(fs.readFileSync(MAP_FILE, 'utf8'));

// Category detection using the same logic as extract-modules-ast.js but enhanced
function getCategory(className) {
    if (!className) return 'other';
    
    const patterns = {
        core: /^(GObject|GNode|GEvent|GEventTarget|GLocale|GUtil|GMath|GSystem|GLocaleKey|GLocaleLanguage|GDate|GTranslation|GDictionary|GTransactionRecorder|GEditorOptions|GCommonNames|SavePoint|Container)$/,
        scene: /(Scene|Element|Layer|Page|Group|Block|Item|Symbol|Stylable|Style|Swatch|Background|Workspace|Actionable|SceneDictionary|ActionItem|Annotable|AnnotationsList|LabelHolder|LabelItem)$/,
        geometry: /(Point|Rect|Transform|PathBase|PathUtil|PathsGraph|Path|Vertex|Shape|Polygon|Ellipse|Rectangle|Compound|Connector|Slice|SimpleShape|Length|PolyLine|Polynomial|OrderedEdge)$/,
        effects: /(Effect|Shadow|Blur|Glow|Mirror|Overlay|Multi|ColorGrading|ColorAdjust|Adjust)$/,
        rendering: /(Paint|Renderer|Canvas|Color|Gradient|Pattern|Bitmap|Image|WebGL|HitResult|HSV|CMYK|RGB|Texture|NoisePattern|ColorHelper|ColorMap|PaintLayer|FillPaintLayer|BorderPaintLayer|PaintLayers|Accelerated)$/,
        text: /(Text|Font|OpenType|TL|Collab|PositionedChar|InlineNode|Character|String)$/,
        annotations: /(Annotation|Comment)$/,
        editor: /(Editor|Tool|Selector|AreaSelector|ImageBoxEditor|SmoothingManager|Wheel|Stroke|Knife)$/,
        events: /(Event|ToolChangedEvent|EditorChangedEvent|InvalidationRequestEvent|TransformEvent)$/,
        properties: /(Property|PropertyVals|PartInfo|PartsPropertyVals|Layout|Anchor|Linkable|Stylable)$/,
        io: /(PDF|SVG|EPS|Render|Parser|Job|Chunk|Buffer|Entry|CacheEntry|FontManagerProxy|MFTHeaderData|RecordItem|Matcher|BezierCurveTo)$/,
    };
    
    for (const [category, pattern] of Object.entries(patterns)) {
        if (pattern.test(className)) {
            return category;
        }
    }
    
    return 'other';
}

// Scan all existing files
const categories = fs.readdirSync(AST_DIR).filter(d => {
    const p = path.join(AST_DIR, d);
    return fs.statSync(p).isDirectory();
});

// First, collect all files with their module IDs
const allFiles = [];
for (const cat of categories) {
    const catDir = path.join(AST_DIR, cat);
    const files = fs.readdirSync(catDir).filter(f => f.endsWith('.js') && f !== 'index.js');
    
    for (const file of files) {
        const idMatch = file.match(/^(\d+)-/);
        if (!idMatch) continue;
        
        const moduleId = idMatch[1];
        allFiles.push({
            moduleId,
            currentPath: path.join(catDir, file),
            currentCat: cat,
            currentFile: file,
        });
    }
}

console.log(`Found ${allFiles.length} extracted modules\n`);

// Determine target names and categories
let renamed = 0;
let moved = 0;
let unchanged = 0;

// Ensure all category directories exist
const allCategories = new Set(['core', 'scene', 'geometry', 'effects', 'rendering', 'text', 'annotations', 'editor', 'events', 'properties', 'io', 'other']);
for (const cat of allCategories) {
    const catDir = path.join(AST_DIR, cat);
    if (!fs.existsSync(catDir)) {
        fs.mkdirSync(catDir, { recursive: true });
    }
}

for (const file of allFiles) {
    const className = moduleMap[file.moduleId] || null;
    const targetCat = getCategory(className);
    const targetFile = className 
        ? `${file.moduleId}-${className}.js`
        : `${file.moduleId}-module.js`;
    const targetPath = path.join(AST_DIR, targetCat, targetFile);
    
    if (file.currentPath === targetPath) {
        unchanged++;
        continue;
    }
    
    // Check if this is just a rename vs a move
    if (file.currentCat === targetCat && file.currentFile !== targetFile) {
        // Rename in place
        fs.renameSync(file.currentPath, targetPath);
        console.log(`  Renamed: ${file.currentFile} -> ${targetFile}`);
        renamed++;
    } else if (file.currentCat !== targetCat) {
        // Move to new category
        fs.renameSync(file.currentPath, targetPath);
        console.log(`  Moved: ${file.currentCat}/${file.currentFile} -> ${targetCat}/${targetFile}`);
        moved++;
    } else {
        unchanged++;
    }
}

// Print summary
console.log(`\nSummary:`);
console.log(`  Renamed: ${renamed}`);
console.log(`  Moved: ${moved}`);
console.log(`  Unchanged: ${unchanged}`);

// Print new category breakdown
console.log(`\nCategory breakdown:`);
for (const cat of [...allCategories].sort()) {
    const catDir = path.join(AST_DIR, cat);
    if (fs.existsSync(catDir)) {
        const files = fs.readdirSync(catDir).filter(f => f.endsWith('.js') && f !== 'index.js');
        if (files.length > 0) {
            console.log(`  ${cat.padEnd(15)} ${files.length} modules`);
        }
    }
}
