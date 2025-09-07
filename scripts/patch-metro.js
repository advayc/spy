// Write shim file into metro package if missing
const fs = require('fs');
const path = require('path');
try {
  // Fix Metro module resolution issues
  const nodeModulesPath = path.join(__dirname, '..', 'node_modules');
  
  // Patch metro package.json exports first
  const metroPackageJsonPath = path.join(nodeModulesPath, 'metro', 'package.json');
  if (fs.existsSync(metroPackageJsonPath)) {
    const metroPackageJson = JSON.parse(fs.readFileSync(metroPackageJsonPath, 'utf8'));
    
    // Remove exports to allow unrestricted access to all Metro modules
    delete metroPackageJson.exports;
    
    fs.writeFileSync(metroPackageJsonPath, JSON.stringify(metroPackageJson, null, 2), 'utf8');
    console.log('removed metro package.json exports for unrestricted access');
  }

  // Patch Expo Router context files
  const expoRouterPath = path.join(nodeModulesPath, 'expo-router');
  const contextFiles = ['_ctx.ios.js', '_ctx.android.js', '_ctx.web.js'];
  
  contextFiles.forEach(filename => {
    const filePath = path.join(expoRouterPath, filename);
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Replace environment variables with fixed values
      content = content
        .replace(/process\.env\.EXPO_ROUTER_APP_ROOT/g, '"./app"')
        .replace(/process\.env\.EXPO_ROUTER_IMPORT_MODE/g, '"lazy"');
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`patched ${filename} with fixed environment variables`);
    }
  });

  const target = path.join(nodeModulesPath, 'metro', 'src', 'ModuleGraph', 'worker');
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

} catch (e) {
  console.error('failed to write shim', e);
}
