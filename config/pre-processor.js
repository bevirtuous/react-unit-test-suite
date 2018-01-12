const { createTransformer } = require('babel-jest');
const findBabelConfig = require('find-babel-config');

const { config } = findBabelConfig.sync(process.cwd());

module.exports = createTransformer(config);
