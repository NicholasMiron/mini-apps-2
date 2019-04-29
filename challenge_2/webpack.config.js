const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  }, 
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'css-loader',
        query: {
          modules: true,
        localIdentName: '[name]__[local]___[hash:base64:5]',
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./client/index.html",
      filename: "./index.html"
    })
  ],
  devtool: 'cheap-eval-source-map'
}