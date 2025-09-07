const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

// Fix Metro issues with module resolution
config.resolver.alias = {
  ...config.resolver.alias,
  // Add any path aliases if needed
};

// Fix for Metro bundler issues with double extensions
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

// Improve module resolution
config.resolver.resolverMainFields = ['react-native', 'browser', 'main'];

// Fix transformer issues
config.transformer = {
  ...config.transformer,
  // Ensure proper asset handling
  assetPlugins: ['expo-asset/tools/hashAssetFiles'],
  // Set environment variables for Expo Router
  minifierConfig: {
    process: {
      env: {
        EXPO_ROUTER_IMPORT_MODE: JSON.stringify('async'),
        EXPO_ROUTER_APP_ROOT: JSON.stringify('./app')
      }
    }
  }
};

module.exports = config;
