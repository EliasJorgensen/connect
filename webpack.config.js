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
  devtool: 'eval',
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
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
    new ExtractTextPlugin('app.css'),
    HTMLWebpackPluginConfig,
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
};
