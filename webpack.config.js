const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'public')
const APP_DIR = path.resolve(__dirname, 'src/client')

const config = {
  devtool: 'eval-source-map',
  devServer: {
    colors: true,
    hot: true,
    host: 'localhost',
    port: 8877
  },
  entry: APP_DIR + '/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: APP_DIR,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }

}

module.exports = config
