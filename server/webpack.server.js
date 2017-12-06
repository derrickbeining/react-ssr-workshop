const {resolve} = require('path')
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base');

const config = {
  // informing webpack that we're building a bundle for NodeJS
  // rather than for the browser
  target: 'node',

  // Tell webpack teh root file of our server app
  entry: './src/index.js',

  // Tell webpack where to put the output file that it generates
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'build')
  },

  // tells webpack not to bundle any libs imported from our node_modules
  externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config);
