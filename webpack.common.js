const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
const cleanWebpackPlugin = require("clean-webpack-plugin")

module.exports = {
    entry: {
        main: "./src/index.js",
        print: "./src/print.js"
    },
    output: {
        filename: "[name].[hash].js",
        path: path.join(__dirname, "dist"),
        chunkFilename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: ["file-loader"]
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, "template/index.html")
        })
    ],
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }
}