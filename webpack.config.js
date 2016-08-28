const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'src/client');

const config = {
  entry: APP_DIR + '/index.js',
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: APP_DIR,
        loader: 'babel'
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;

// // Existing Code ....
// var config = {
//   // Existing Code ....
//   module : {
//     loaders : [
//       {
//         test : /\.jsx?/,
//         include : APP_DIR,
//         loader : 'babel'
//       }
//     ]
//   }
// }