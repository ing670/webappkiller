var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');
var example = require('./example');
var path = require('path');
var autoprefixer = require('autoprefixer');
var utils = require('./utils');

module.exports = merge(example, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/app.[hash].js',
    chunkFilename: 'js/[id].[chunkhash].js',
    publicPath: './',
  },
  // 可以在这里配置对应的输出CDN路径如 http://localhost:8080/
});

if (process.env.NODE_ENV === 'prod') {
  module.exports.devtool = false;
  module.exports.plugins = [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        preLoaders: [
          {
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /node_modules/,
          }
        ],
        vue: {
          loaders: utils.cssLoaders(),
          postcss: [
            autoprefixer({
              browsers: ['last 3 versions',"Android >= 2.3", "> 1%", "iOS >= 7"],
            })
          ]
        },
      }
    }),

    // 抽离公共js
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: 'js/vendor_vue.[hash]js',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // 自动注入 html
    new HtmlWebpackPlugin({
      filename: '../dist/index.html',
      template: path.resolve(__dirname, '../example/index.html'),
    }),
    // Gzip if support can open
    // Added as the last plugin
    // Not sure if it's worth gzipping index.html - no harm no foul
    // new CompressionWebpackPlugin({
    //     asset: "[path].gz[query]",
    //     algorithm: "gzip",
    //     test: /\.js$|\.css$|\.html$/,
    //     threshold: 10240,
    //     minRatio: 0.8
    // })
  ];
}
