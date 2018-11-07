const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const webpack = require("webpack")

module.exports = {
    entry: {
        // app: "./src/index.js",
        // print: "./src/print.js"
        app: "./src/index.js"
    },
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        hot: true
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "webpack test",
            filename: "index.html"
        }),
        new CleanWebpackPlugin(["dist"]),
        new webpack.HotModuleReplacementPlugin()
    ]
}