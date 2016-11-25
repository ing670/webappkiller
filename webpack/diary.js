var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var utils = require('./utils');
var projectDir='../diary';

module.exports = {
  devtool: 'sourcemap',
  entry: {
    example: path.resolve(__dirname, projectDir+"/main.js"),
    vendor: [
      'moment',
      'vue',
      'vue-router',
      'axios',
      'vuex',
      'fastclick',
      'vuex-router-sync'
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: './',
  },

  resolve: {
    alias: {
      vue: 'vue/dist/vue.min.js',
      moment:'moment/min/moment.min.js',
      src: path.resolve(__dirname, '../src'),
      views: path.resolve(__dirname, '../src/views'),
      components: path.resolve(__dirname, '../src/components'),
      utils: path.resolve(__dirname, '../src/utils'),
      assets: path.resolve(__dirname, '../src/assets'),
    },
    extensions: ['.js', '.vue'],
  },
  module: {

    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },

      {
        test: /\.json$/,
        loader: 'json',
      }, {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader!postcss-loader',
        }),
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          loader: 'sass-loader!postcss-loader',
        }),
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }

    ],
  },


}

if (process.env.NODE_ENV === 'dev') {
  // 配置开发服务器
  module.exports.devServer = {
    historyApiFallback: true,
    hot: true,
    progress: false,
    colors: true,
  };
  module.exports.devtool = '#cheap-module-eval-source-map';

  module.exports.plugins = [
    // 抽离公共js
    new webpack.LoaderOptionsPlugin({
      options: {
        preLoaders: [
          {
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /node_modules/,
          }
        ],
        eslint: {
          configFile: '.eslintrc',
        },
        vue: {
          loaders: utils.cssLoaders(),
          postcss: [
            autoprefixer({
              browsers: ['last 3 versions',"Android >= 2.3", "> 1%", "iOS >= 7"],
            })
          ]
        }
      }
    }),
    //new webpack.optimize.CommonsChunkPlugin({name: 'example', filename: "[name].js?v=[hash]"}),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: 'vendor_vue.js',
    }),

    new ExtractTextPlugin({
      filename: "app.css",
      allChunks: true
    }),
    // 自动注入 html
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, projectDir+'/index.html'),
    }),
  ];
}
