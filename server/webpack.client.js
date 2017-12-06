const {resolve} = require('path')
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {

  // Tell webpack teh root file of our server app
  entry: './src/client',

  // Tell webpack where to put the output file that it generates
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public')
  }
}

module.exports = merge(baseConfig, config);
