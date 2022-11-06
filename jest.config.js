module.exports = {
  testEnvironment: 'jsdom',
  transform: { '^.+\\.(t|j)sx?$': '@swc/jest' },
  testMatch: ['<rootDir>/**/__tests__/*.(spec|test).(t|j)s'],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageReporters: ['text', 'lcov', 'cobertura'],
  coverageDirectory: './coverage',
}
