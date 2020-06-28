const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const webpack = require("webpack")

// import {Configuration} from "webpack"

/**
 * @type {Configuration}
 */
const config = {
    mode: "none",
    entry: {
        app: "./src/index.js",
        // print: "./src/print.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    // devtool: "eval",
    // devServer: {
    //     contentBase: "./dist",
    //     compress: true,
    //     // publicPath: "/public/",
    //     hot: true,
    //     // quiet: true
    // },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "HtmlWebpackPlugin",
            // template: "./dist/index.html"
        }),
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = config