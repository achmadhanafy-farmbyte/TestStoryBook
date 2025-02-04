const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const path = require("path");
const withStorybook = require('@storybook/react-native/metro/withStorybook');

const defaultConfig = getDefaultConfig(__dirname);

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    resolveRequest: (context, moduleName, platform) => {
      const defaultResolveResult = context.resolveRequest(
        context,
        moduleName,
        platform
      );

      return defaultResolveResult;
    },
  },
};

const finalConfig = mergeConfig(defaultConfig, config);

module.exports = withStorybook(finalConfig, {
  enabled: true,
  configPath: path.resolve(__dirname, './.ondevice'),
});
