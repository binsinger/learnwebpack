
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack =  require('webpack');


var ROOT_PATH = path.resolve(__dirname);
var APP_PATH  = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  entry: {
    app: path.resolve(APP_PATH, 'index.js'),
    mobile: path.resolve(APP_PATH, 'mobile.js'),
    vendors: ['jquery', 'moment']
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].[hash:4].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: APP_PATH,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        include:  APP_PATH
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
        include: APP_PATH
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=40000'
      }
    ],
 
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: "Hello World app",
      template: path.resolve(__dirname,'index.html'),
      chunks: ['app', 'vendors'],
      inject: 'body',
      filename: 'index.html'
    }),
    new HtmlwebpackPlugin({
      title: 'hello mobile',
      template: path.resolve(__dirname, 'mobile.html'),
      chunks: ['mobile', 'vendors'],
      inject: 'body',
      filename: 'mobile.html'

    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      "window.jQuery": "jquery"
    }),
    new webpack.optimize.UglifyJsPlugin({ minimize: true}),
    new webpack.optimize.CommonsChunkPlugin({name:'vendors', filename:'vendors.js'}),

  ],

}
