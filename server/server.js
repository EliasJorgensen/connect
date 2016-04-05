'use strict'; // Use strict mode better performance and feature support

var express = require('express');

var app = express();

app.get('/api', function (req, res) {
  res.send('Api has been called yo');
});

app.listen(8080, function () {
  console.log('Backend is listening');
});
