module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript'],
    plugins: [
      'expo-router/babel',
      [
        'module-resolver',
        {
          alias: {
            components: './components',
            screens: './screens',
            data: './data',
            config: './config',
            context: './context',
          },
        },
      ],
      '@babel/plugin-transform-flow-strip-types',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-private-methods',
      '@babel/plugin-transform-class-properties',
    ],
  };
};
