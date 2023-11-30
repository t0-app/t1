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
            src: './src',
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
