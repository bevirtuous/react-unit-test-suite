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
  ],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
  ],
  setupTestFrameworkScriptFile: '@virtuous/react-unit-test-suite/config/setup.js',
};
