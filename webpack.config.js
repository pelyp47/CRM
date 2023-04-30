const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.scss$/,
            use: [
              'style-loader', // creates style nodes from JS strings
              'css-loader', // translates CSS into CommonJS
              'sass-loader' // compiles Sass to CSS
            ]
          },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/assets/index.html'
        })
    ],
    devServer: {
        static: './dist',
        port: 3000,
        hot: true
    }
}