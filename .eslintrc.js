module.exports = {
  root: true,
  extends: ['universe/native', 'universe/shared/typescript-analysis'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  rules: {
    'import/order': 0,
    '@typescript-eslint/no-unused-vars': 'error',
    'no-unused-vars': 'off',
  },
};
