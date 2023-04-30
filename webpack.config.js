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
            //jsx handle
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            //scss handle
            test: /\.scss$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          },
          {
            //images handle
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'images/'
                }
              }
            ]
          }
        ]
    },
    plugins: [
        //html extraction
        new HtmlWebpackPlugin({
          template: './src/assets/index.html'
        })
    ],
    //server which starts on "npm run start"
    devServer: {
        static: './dist',
        port: 3000,
        hot: true
    }
}