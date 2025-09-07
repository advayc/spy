// Write shim file into metro package if missing
const fs = require('fs');
const path = require('path');
try {
  const target = path.join(__dirname, '..', 'node_modules', 'metro', 'src', 'ModuleGraph', 'worker');
  if (!fs.existsSync(target)) {
    console.log('metro worker dir not found, skipping patch');
    process.exit(0);
  }
  const file = path.join(target, 'importLocationsPlugin.js');
  if (fs.existsSync(file)) {
    console.log('importLocationsPlugin already exists');
  } else {
    const content = [
      "// Minimal shim for metro's importLocationsPlugin",
      "// This file provides `locToKey` which is used by @expo/metro-config's reconcileTransformSerializerPlugin.",
      "",
      "function locToKey(loc) {",
      "  if (!loc) return '';",
      "  try {",
      "    const s = loc.start || {};",
      "    const e = loc.end || {};",
      "    return (s.line || 0) + ':' + (s.column || 0) + ':' + (e.line || 0) + ':' + (e.column || 0);",
      "  } catch (e) {",
      "    return String(loc);",
      "  }",
      "}",
      "",
      "module.exports = {",
      "  locToKey,",
      "};",
      "",
    ].join('\n');
    fs.writeFileSync(file, content, 'utf8');
    console.log('wrote importLocationsPlugin shim to', file);
  }

  // Also patch the TerminalReporter export issue
  const metroPackageJsonPath = path.join(__dirname, '..', 'node_modules', 'metro', 'package.json');
  if (fs.existsSync(metroPackageJsonPath)) {
    const metroPackageJson = JSON.parse(fs.readFileSync(metroPackageJsonPath, 'utf8'));
    if (!metroPackageJson.exports) {
      metroPackageJson.exports = {};
    }
    
    // Add wildcard export to allow access to all internal modules
    if (!metroPackageJson.exports['./src/*']) {
      metroPackageJson.exports['.'] = './src/index.js';
      metroPackageJson.exports['./src/*'] = './src/*.js';
      metroPackageJson.exports['./src/*/'] = './src/*/index.js';
      
      fs.writeFileSync(metroPackageJsonPath, JSON.stringify(metroPackageJson, null, 2), 'utf8');
      console.log('patched metro package.json with wildcard exports');
    }
  }
} catch (e) {
  console.error('failed to write shim', e);
}
