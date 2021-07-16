/* eslint-disable */

const path = require('path')
const outputPath = path.resolve(__dirname, 'build')
const port = process.env.PORT || 2990

module.exports = {
  entry: './src/pages/index.tsx',
  mode: 'development',
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jp[e]?g|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.json$/,
        type: 'javascript/auto',
        use: {
          loader: 'json-loader',
        },
      },
    ]
  },
  devServer: {
    contentBase: outputPath,
    hot: true,
    port,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  }
}

