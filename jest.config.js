module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json'],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  transform: {
    '^.+\\.(js|jsx)$': '@virtuous/react-unit-test-suite/config/pre-processor.js',
  },
  testRegex: '(/__tests__/.*|(\\.|/)spec)\\.(js|jsx)?$',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
  ],
  unmockedModulePathPatterns: [
    '<rootDir>/node_modules/react/',
    '<rootDir>/node_modules/enzyme/',
  ],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
  ],
  setupFiles: [
    '@virtuous/react-unit-test-suite/config/setup.js',
  ],
  setupTestFrameworkScriptFile: '@virtuous/react-unit-test-suite/config/test-framework.js',
};
