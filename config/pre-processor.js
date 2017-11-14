const { readFileSync } = require('fs');
const { resolve } = require('path');
const { createTransformer } = require('babel-jest');
const { safeLoad } = require('js-yaml');
const stripComments = require('strip-json-comments');

const babelConfigString = readFileSync(resolve(process.cwd(), './.babelrc'), 'utf8');
const babelConfig = safeLoad(stripComments(babelConfigString));

module.exports = createTransformer(babelConfig);
