/* eslint-env node */
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname, {
  isCSSEnabled: true,
});

config.resolver.resolverMainFields.unshift('sbmodern');

module.exports = config;
