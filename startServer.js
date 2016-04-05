var apiServer = require('./server/server'),
    devServer = require('./server/devServer');

// boot the server with the proper port and config
var PORT = process.env.PORT || 8080,
    PROD = process.env.NODE_ENV === "production";

if (PROD) {
  apiServer(PORT);
} else {
  devServer(PORT);
  apiServer(PORT - 1);
}
