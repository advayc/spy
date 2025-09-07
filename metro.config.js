const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add any additional Metro configuration here
config.resolver.alias = {
  ...config.resolver.alias,
  // Add any path aliases if needed
};

module.exports = config;
