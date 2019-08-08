const path = require("path")
const merge = require("webpack-merge")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const base = require("./webpack.base.conf")
const utils = require("./utils")

console.log(process.env.NODE_ENV)

module.exports = merge(base, {
    mode: "production",
    devtool: "source-map",
    module: {
        // rules: [
        //     {
        //         test: /\.(css|scss)$/,
        //         use: [
        //             (process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader), "css-loader", "postcss-loader", "sass-loader"]
        //     }
        // ]
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
    // ].concat(utils.htmlPlugin())
})