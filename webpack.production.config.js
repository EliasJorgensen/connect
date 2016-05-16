var webpack           = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

// configure HtmlWebpackPlugin
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

// export webpack config
module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'babel-polyfill', // allow JS Stage 3 features (mainly asyc/await)
    './app/index'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  resolve: {
    modulesDirectories: ['node_modules', './app'],
    extensions: ['', '.js', '.jsx']
  },
  // declare loaders to be used in webpack
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] }, //
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') }
    ]
  },
  // initialize the added webpack plugins
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin('app.css'),
    HTMLWebpackPluginConfig,
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
  ]
};
