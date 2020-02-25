const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const DEV_PORT = process.env.PORT || 3000;

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }]
      },
      {
        test: /\.json$/,
        type: "javascript/auto",
        use: {
          loader: "json-loader",
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['ts', 'tsx']
  },
  devServer: {
    contentBase: path.join(__dirname, 'build/'),
    port: DEV_PORT,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin([{ from: './public', to: '.' }]),
  ],
};

