const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    path.join(__dirname, 'src', 'faux-pass.js'),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'faux-pass.js',
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
    extensions: ['.js', '.json'],
  },
  node: {
    fs: 'empty',
  },
  plugins: [],
  externals: {},
};
