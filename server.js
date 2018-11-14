'use strict';

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new webpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
}).listen(8080, (err) => {
  if (err) { return console.log(err) }

  console.log('Listening on htt://localhost:8080')
});
