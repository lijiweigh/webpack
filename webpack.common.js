const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackplugin = require("clean-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "webpack test",
            filename: "index.html"
        }),
        new CleanWebpackplugin(["dist"])
    ]
}

