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
            data: './data',
            config: './config',
            context: './context',
          },
        },
      ],
      '@babel/plugin-transform-private-methods',
      '@babel/plugin-transform-class-properties',
    ],
  };
};
