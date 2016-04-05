var webpack          = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config           = require('../webpack.config');

module.exports = function (PORT) {
  var front_server = new WebpackDevServer(webpack(config), {

    // setup proxy for accessing our backend API from the dev server
    proxy: {
      "*": "http://localhost:" + (PORT - 1),
      "/api/*": {
        target: "http://localhost:" + (PORT - 1),
        ws: true
      }
    },
    publicPath: config.output.publicPath,
    hot: true, // this is the important part for hot reloading the components
    historyApiFallback: true,
    stats: { colors: true }

  });

  front_server.listen(PORT, 'localhost', function (err, res) {
    if (err) {
      return console.warn(err);
    }

    console.log('Listening on http://localhost:', PORT);
  });
}
