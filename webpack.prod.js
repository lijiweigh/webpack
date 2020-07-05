const merge = require("webpack-merge")
const Uglifyjs = require("uglifyjs-webpack-plugin")
const common = require("./webpack.common")
const webpack = require("webpack")

module.exports = merge(common, {
    plugins: [
        new Uglifyjs(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        })
    ]
})