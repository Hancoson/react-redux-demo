/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/12/29.
 */
var webpack = require('webpack');
var WebpackStripLoader = require('strip-loader');
var ExtractTextPlugins = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/app.js',
  output: {
    filename: './dist/js/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?' + JSON.stringify({ presets: ['react', 'es2015'] })]
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugins.extract(['css', 'sass'])
      },
      {
        test: [/\.js$/, /\.es6$/],
        exclude: /node_modules/,
        loader: WebpackStripLoader.loader('console.log')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugins('./dist/style/main.css', {
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  resolve: {
    extension: ['', '.js', '.es6']
  }
};
