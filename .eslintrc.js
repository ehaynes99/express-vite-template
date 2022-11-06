module.exports = {
  plugins: ['react', 'react-hooks'],
  extends: ['eslint-config-erich'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
}
