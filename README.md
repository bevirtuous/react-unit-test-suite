# Virtuous' React Unit Test Suite

[![GitHub release](https://img.shields.io/github/release/bevirtuous/react-unit-test-suite.svg)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**THIS REPOSITORY IS NOT MAINTAINED ANYMORE. Its contents have been moved to [https://github.com/bevirtuous/tools](https://github.com/bevirtuous/tools).**

This test suite is a configuration for [ReactJS](https://facebook.github.io/react/) projects.

This configuration uses [Jest](https://facebook.github.io/jest/) for running the tests.
It is only an extension of the default Jest configuration and
prepares your tests for any React.js application.

## Installation

```sh
npm i --save-dev @virtuous/react-unit-test-suite react react-dom
```

## Usage

All test files should follow the naming convention of `*(spec|test).(js|jsx)`.

You have two options of how to create a configuration for Jest:
- You can create your own configuration following the [Jest Documentation](https://facebook.github.io/jest/docs/en/getting-started.html)
- You can use Virtuous' pre-defined configuration and extend it as you wish.

__NOTE: Using and extending the Virtuous configuration is the preferred way!__

### 1. Using Virtuous' configuration

Create a file called `jest.config.js` in the root of your project.
Add the following line to it:

```js
module.exports = require('@virtuous/react-unit-test-suite/jest.config');
```

### 2. Extending Virtuous' configuration

Create a file called `jest.config.js` in the root of your project.
Add the following line in the beginning of the file:

```js
const defaultConfig = require('@virtuous/react-unit-test-suite/jest.config');
```

This will load the default configuration. Now you can extend it by spreading the `defaultConfig`
into a newly created configuration object:

#### ES2015 / ES6 / ES2017 / ES.Next (recommended)

```js
module.exports = {
  ...defaultConfig,
  [Your config goes here],
};
```

#### CommonJS

```js
module.exports = Object.assign({}, defaultConfig, {
  [Your config goes here]
});
```

## Example Configuration
Here is an example showing how to extend the default configuration:

#### ES2015 / ES6 / ES2017 / ES.Next

```js
const defaultConfig = require('@virtuous/react-unit-test-suite/jest.config');

module.exports = {
  ...defaultConfig,
  moduleNameMapper: {
    '^Components(.*)$': '<rootDir>/components',
    '^Styles(.*)$': '<rootDir>/styles',
  },
};
```

#### CommonJS

```js
const defaultConfig = require('@virtuous/react-unit-test-suite/jest.config');

module.exports = Object.assign({}, defaultConfig, {
  moduleNameMapper: {
    '^Components(.*)$': '<rootDir>/components',
    '^Styles(.*)$': '<rootDir>/styles'
  }
});
```
