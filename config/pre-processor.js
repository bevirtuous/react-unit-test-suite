const { createTransformer } = require('babel-jest');
const findBabelConfig = require('find-babel-config');
const { safeLoad } = require('js-yaml');
const stripComments = require('strip-json-comments');

const { config } = findBabelConfig.sync(process.cwd());
const babelConfig = safeLoad(stripComments(config));

module.exports = createTransformer(babelConfig);
