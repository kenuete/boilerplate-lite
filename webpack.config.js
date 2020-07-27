const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = (env, argv) => {
  const { mode } = argv

  return {
    entry: ['@babel/polyfill', './index.js'],
    output: {
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      allowedHosts: [],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.(s*)css$/,
          use: [
            mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'assets/',
              },
            },
          ],
        },
      ],
    },
    devtool: mode !== 'production' ? 'source-map' : '',
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          test: /\.js(\?.*)?$/i,
          sourceMap: mode !== 'production',
        }),
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './index.html' }),
      new MiniCssExtractPlugin({
        filename: 'index.css',
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
  }
}
