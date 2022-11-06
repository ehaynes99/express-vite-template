module.exports = {
  extends: ['../../.eslintrc.js'],
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
                group: ['*/server/*'],
                message: 'Frontend cannot import from server',
                allowTypeImports: true
              },
            ],
          },
        ],
      },
    },
  ],
}
