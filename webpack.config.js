const path = require("path")
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require("clean-webpack-plugin")

module.exports = {
    mode: "development",
    entry: {
        main: './src/index.js',
        print: "./src/print.js"
    },
    output: {
        filename: '[name].[hash].js',
        path: __dirname + '/dist'
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        open: true,
        host: "192.168.42.87"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                use: [
                    "file-loader"
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./template/index.html",
            title: "webpack-test"
        }),
        new cleanWebpackPlugin()
    ]
}