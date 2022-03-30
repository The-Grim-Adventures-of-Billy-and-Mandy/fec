const path = require('path');

module.exports = {
  mode: "development",
  entry: './fec-client/src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './fec-client/dist'),
  },
  module: {
    rules: [{test: /\.jsx/, use: 'babel-loader'}]
  }
};