var webpack = require('webpack'),
  fs = require('fs'),
  path = require('path'),
  dependencies = ['react', 'react-bootstrap'],
  BUILD_PATH = path.join(__dirname, 'build');

// ensure the `/build` path is available
if (!fs.existsSync(BUILD_PATH)) {
  fs.mkdirSync(BUILD_PATH);
}

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    app: ['babel/polyfill', './app/App.jsx'],
    vendor: dependencies
  },
  output: {
    path: path.join(BUILD_PATH, 'js'),
    publicPath: '/js',
    filename: '[name].js'
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  devtool: 'source-map',
  debug: true,
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          optional: ['runtime', 'es7'],
          stage: 0
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
    ],
  },
};
