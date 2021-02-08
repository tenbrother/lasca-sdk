const path = require("path")

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './platform/browser.ts'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'browser.js',
    library: "Lasca",
    libraryTarget: "window",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}