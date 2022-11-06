module.exports = {
  extends: ['../../.eslintrc.cjs'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-restricted-imports': 'off',
        '@typescript-eslint/no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['*/ui/*'],
                message: 'Server cannot import from frontend',
              },
            ],
          },
        ],
      },
    },
  ],
}
