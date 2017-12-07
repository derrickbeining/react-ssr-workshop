const {resolve} = require('path');

module.exports = {

  devtool: 'eval-source-map',
  // tells webpack where to look when you do `import whatevs from 'nested/in/src'`
  // so it will try to resovle that path against those included in the modules array
  resolve: {
    modules: [
      resolve('./src'),
      resolve('./node_modules')
    ]
  },
  // Tell webpack to run babel on every file it run through
  module: {
    rules: [
      {
        // only run babel on files that match the regex test
        test: /\.js?$/,
        // process every matched file through the babel-loader
        loader: 'babel-loader',
        // do not search for files in dirs that match this regex
        exclude: /node_modules/,
        //
        options: {
          presets: [
            // converts JSX to JS
            'react',
            'stage-0',
            // runs all transpilations necessary to enable proper execution of JS
            // on the targeted environments
            ['env', {targets: {broswers: ['last 2 versions']}}]
          ]
        }
      }
    ]
  }
}
