module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json'],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  transform: {
    '^.+\\.(js|jsx)$': '@virtuous/react-unit-test-suite/config/pre-processor.js',
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/build/',
  ],
  coverageDirectory: 'build',
  collectCoverageFrom: [
    '**/*.{js,jsx}',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/build/',
    'jest.config.js',
  ],
  setupTestFrameworkScriptFile: '@virtuous/react-unit-test-suite/config/setup.js',
};
