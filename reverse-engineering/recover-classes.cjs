/**
 * recover-classes.cjs - Convert prototype-based patterns to ES6 class syntax
 * 
 * Uses AST analysis to identify class patterns, then generates clean ES6
 * class declarations. Outputs to es6-modules/ directory.
 * 
 * Pipeline position: after prettify, parallel to (not replacing) readable-modules
 */
const fs = require('fs');
const path = require('path');
const acorn = require('acorn');
const walk = require('acorn-walk');

const INPUT_DIRS = ['readable-modules/app', 'readable-modules/vendor'];
const OUTPUT_DIRS = ['es6-modules/app', 'es6-modules/vendor'];

for (const dir of OUTPUT_DIRS) {
  fs.mkdirSync(dir, { recursive: true });
}

let totalFiles = 0;
let transformedFiles = 0;
let totalClassesRecovered = 0;
let totalMethodsRecovered = 0;
let totalStaticsRecovered = 0;
let parseErrors = 0;
let transformErrors = 0;

function getName(node) {
  if (!node) return null;
  if (node.type === 'Identifier') return node.name;
  if (node.type === 'Literal') return String(node.value);
  return null;
}

function src(wrapped, node) {
  return wrapped.substring(node.start, node.end);
}

/**
 * Parse and analyze a module for class patterns.
 */
function analyzeModule(code) {
  const wrapped = '(' + code + ')';
  let ast;
  try {
    ast = acorn.parse(wrapped, { ecmaVersion: 2022, sourceType: 'script' });
  } catch (e) {
    parseErrors++;
    return null;
  }

  const exprStmt = ast.body[0];
  if (!exprStmt || exprStmt.type !== 'ExpressionStatement') return null;
  const funcExpr = exprStmt.expression;
  if (funcExpr.type !== 'FunctionExpression') return null;
  const body = funcExpr.body;

  // Collect constructor function declarations
  const ctors = new Map();
  for (const stmt of body.body) {
    if (stmt.type === 'FunctionDeclaration' && stmt.id) {
      ctors.set(stmt.id.name, stmt);
    }
  }
  if (ctors.size === 0) return null;

  const inheritCalls = new Map();
  const protoAssigns = new Map();
  const staticAssigns = new Map();

  walk.ancestor(ast, {
    CallExpression(node) {
      const c = node.callee;
      if (c.type === 'MemberExpression' && getName(c.property) === 'inherit' &&
          node.arguments.length >= 2) {
        const childArg = node.arguments[0];
        if (childArg.type === 'Identifier' && ctors.has(childArg.name)) {
          inheritCalls.set(childArg.name, src(wrapped, node.arguments[1]));
        }
      }
    },
    AssignmentExpression(node) {
      if (node.operator !== '=') return;
      const left = node.left;
      
      // X.prototype.Y = ...
      if (left.type === 'MemberExpression' &&
          left.object.type === 'MemberExpression' &&
          getName(left.object.property) === 'prototype' &&
          left.object.object.type === 'Identifier') {
        const varName = left.object.object.name;
        const memberName = getName(left.property);
        if (varName && memberName && ctors.has(varName)) {
          if (!protoAssigns.has(varName)) protoAssigns.set(varName, []);
          protoAssigns.get(varName).push({ memberName, node, right: node.right });
        }
      }
      // X.Y = ... (static)
      else if (left.type === 'MemberExpression' &&
               left.object.type === 'Identifier' &&
               ctors.has(left.object.name) &&
               !left.computed) {
        const varName = left.object.name;
        const memberName = getName(left.property);
        if (memberName && memberName !== 'prototype') {
          if (!staticAssigns.has(varName)) staticAssigns.set(varName, []);
          staticAssigns.get(varName).push({ memberName, node, right: node.right });
        }
      }
    }
  });

  const classes = [];
  for (const [name, ctorNode] of ctors) {
    const protos = protoAssigns.get(name) || [];
    const statics = staticAssigns.get(name) || [];
    const parent = inheritCalls.get(name) || null;
    if (protos.length === 0 && statics.length === 0 && !parent) continue;
    classes.push({ name, ctorNode, parent, protoAssigns: protos, staticAssigns: statics });
  }

  return classes.length > 0 ? { classes, wrapped, body } : null;
}

/**
 * Generate ES6 class declaration.
 */
function generateClassDecl(cls, wrapped) {
  const lines = [];
  const I = '  ';
  const MI = '    ';
  const BI = '      ';

  const ext = cls.parent ? ` extends ${cls.parent}` : '';
  lines.push(`${I}class ${cls.name}${ext} {`);

  // Constructor
  const ctorParams = cls.ctorNode.params.map(p => src(wrapped, p)).join(', ');
  const ctorBody = src(wrapped, cls.ctorNode.body);
  const ctorInner = ctorBody.substring(1, ctorBody.length - 1).trim();

  if (ctorInner || cls.parent) {
    lines.push(`${MI}constructor(${ctorParams}) {`);
    if (cls.parent) lines.push(`${BI}super();`);
    if (ctorInner) {
      for (const line of ctorInner.split('\n')) {
        const t = line.trim();
        if (t) lines.push(`${BI}${t}`);
      }
    }
    lines.push(`${MI}}`);
    lines.push('');
  }

  // Prototype property defaults
  const protoProps = cls.protoAssigns.filter(p => p.right.type !== 'FunctionExpression');
  if (protoProps.length > 0) {
    for (const prop of protoProps) {
      lines.push(`${MI}${prop.memberName} = ${src(wrapped, prop.right)};`);
    }
    lines.push('');
  }

  // Instance methods
  for (const method of cls.protoAssigns.filter(p => p.right.type === 'FunctionExpression')) {
    const fn = method.right;
    const params = fn.params.map(p => src(wrapped, p)).join(', ');
    const body = src(wrapped, fn.body);
    const asyncPrefix = fn.async ? 'async ' : '';
    const genStar = fn.generator ? '*' : '';
    lines.push(`${MI}${asyncPrefix}${genStar}${method.memberName}(${params}) ${body}`);
    lines.push('');
  }

  // Static members
  for (const sm of cls.staticAssigns) {
    if (sm.right.type === 'FunctionExpression') {
      const fn = sm.right;
      const params = fn.params.map(p => src(wrapped, p)).join(', ');
      const body = src(wrapped, fn.body);
      const asyncPrefix = fn.async ? 'async ' : '';
      const genStar = fn.generator ? '*' : '';
      lines.push(`${MI}static ${asyncPrefix}${genStar}${sm.memberName}(${params}) ${body}`);
      lines.push('');
    } else {
      const val = src(wrapped, sm.right);
      lines.push(`${MI}static ${sm.memberName} = ${val};`);
      lines.push('');
    }
  }

  lines.push(`${I}}`);
  return lines.join('\n');
}

/**
 * Transform a module's code.
 */
function transformModule(originalCode) {
  const analysis = analyzeModule(originalCode);
  if (!analysis) return null;

  const { classes, wrapped, body } = analysis;

  // Build sets of nodes to remove from sequence expressions
  const removeNodeStarts = new Set();
  const classCtorStarts = new Map(); // stmt.start -> classDescriptor

  for (const cls of classes) {
    classCtorStarts.set(cls.ctorNode.start - 1, cls);
    for (const pa of cls.protoAssigns) removeNodeStarts.add(pa.node.start);
    for (const sa of cls.staticAssigns) removeNodeStarts.add(sa.node.start);
  }
  const inheritNames = new Set(classes.filter(c => c.parent).map(c => c.name));

  // Process each statement in the function body
  const outputParts = [];
  
  for (const stmt of body.body) {
    const stmtStart = stmt.start - 1;
    const stmtEnd = stmt.end - 1;

    // Constructor -> class declaration
    const cls = classCtorStarts.get(stmtStart);
    if (cls) {
      const classCode = generateClassDecl(cls, wrapped);
      outputParts.push(classCode);
      totalClassesRecovered++;
      totalMethodsRecovered += cls.protoAssigns.filter(p => p.right.type === 'FunctionExpression' || p.right.type === 'ArrowFunctionExpression').length;
      totalStaticsRecovered += cls.staticAssigns.length;
      continue;
    }

    // Expression statement - filter out class assignments from sequences
    if (stmt.type === 'ExpressionStatement') {
      const expr = stmt.expression;
      
      if (expr.type === 'SequenceExpression') {
        const kept = [];
        for (const elem of expr.expressions) {
          if (shouldRemoveExpr(elem, removeNodeStarts, inheritNames)) continue;
          kept.push(src(wrapped, elem));
        }
        if (kept.length === 0) continue;
        if (kept.length < expr.expressions.length) {
          // Some were removed
          if (kept.length === 1) {
            outputParts.push('  ' + kept[0] + ';');
          } else {
            outputParts.push('  (' + kept.join(',\n    ') + ');');
          }
          continue;
        }
      } else {
        if (shouldRemoveExpr(expr, removeNodeStarts, inheritNames)) continue;
      }
    }

    // Keep as-is
    outputParts.push('  ' + originalCode.substring(stmtStart, stmtEnd).trim() + (originalCode[stmtEnd - 1] === ';' ? '' : ';'));
  }

  // Reconstruct module
  const headerMatch = originalCode.match(/^(\/\*\*[\s\S]*?\*\/\s*\n?)/);
  const header = headerMatch ? headerMatch[1] : '';
  
  const funcMatch = originalCode.match(/function\s*\(([^)]*)\)\s*\{/);
  if (!funcMatch) return null;
  
  const result = header + `function (${funcMatch[1]}) {\n` + outputParts.join('\n') + '\n}';
  return result;
}

/**
 * Check if an expression node should be removed (class-related).
 */
function shouldRemoveExpr(node, removeStarts, inheritNames) {
  // Direct assignment that's in remove set
  if (removeStarts.has(node.start)) return true;

  // Parenthesized: (X.prototype.Y = ...)
  // In acorn, this is just the inner expression
  
  // Inherit call
  if (node.type === 'CallExpression') {
    const c = node.callee;
    if (c.type === 'MemberExpression' && getName(c.property) === 'inherit' &&
        node.arguments.length >= 2 && node.arguments[0].type === 'Identifier' &&
        inheritNames.has(node.arguments[0].name)) {
      return true;
    }
  }

  return false;
}

// ============================================================
// Main
// ============================================================

for (let i = 0; i < INPUT_DIRS.length; i++) {
  const inputDir = INPUT_DIRS[i];
  const outputDir = OUTPUT_DIRS[i];
  if (!fs.existsSync(inputDir)) continue;

  const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.js'));
  console.log(`\nProcessing ${files.length} files from ${inputDir}...`);

  let dirTransformed = 0;
  for (const file of files) {
    totalFiles++;
    const code = fs.readFileSync(path.join(inputDir, file), 'utf8');
    try {
      const result = transformModule(code);
      if (result) {
        fs.writeFileSync(path.join(outputDir, file), result);
        dirTransformed++;
        transformedFiles++;
      } else {
        fs.writeFileSync(path.join(outputDir, file), code);
      }
    } catch (e) {
      fs.writeFileSync(path.join(outputDir, file), code);
      transformErrors++;
      if (transformErrors <= 20) {
        console.error(`  Error in ${file}: ${e.message}`);
      }
    }
  }
  console.log(`  Transformed: ${dirTransformed}/${files.length}`);
}

console.log('\n============================================================');
console.log('CLASS RECOVERY REPORT');
console.log('============================================================');
console.log(`Files processed:       ${totalFiles}`);
console.log(`Files transformed:     ${transformedFiles}`);
console.log(`Classes recovered:     ${totalClassesRecovered}`);
console.log(`Methods recovered:     ${totalMethodsRecovered}`);
console.log(`Statics recovered:     ${totalStaticsRecovered}`);
console.log(`Parse errors:          ${parseErrors}`);
console.log(`Transform errors:      ${transformErrors}`);
console.log('============================================================\n');
