var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: "#inline-source-map",
  debug: true,
  entry: [
    "webpack-dev-server/client?http://127.0.0.0:3000",
    "webpack/hot/only-dev-server",
    './app/app.jsx'
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx$/, /\.js$/, /\.es6$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.jsx', '.js', '.es6']
  },
  devServer:{
      host: 'localhost',
      port: 3000,
      historyApiFallback: true,
      proxy: {
          '/api/*': 'http://localhost:8000'
      }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};