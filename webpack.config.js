const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    '/app/js/core.js':  './build/js/app'
  },

  output: {
    path:     __dirname,
    filename: '[name]'
  },

  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 100
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        "Tether": 'tether'
    })
  ],

  // resolve: {
  //   root: path.resolve( __dirname + '/front_end/public/core' ),
  //   modulesDirectories: ['node_modules'],
  //   extensions:         ['', '.js']
  // },

  // resolveLoader: {
  //   modulesDirectories: ['node_modules'],
  //   moduleTemplates:    ['*-loader', '*'],
  //   extensions:         ['', '.js']
  // }

};

if (NODE_ENV == 'production') {
  module.exports.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          // don't show unreachable variables etc
          warnings:     false,
          drop_console: true,
          unsafe:       true
        }
      })
  );
}
