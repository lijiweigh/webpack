const path = require("path")
const merge = require("webpack-merge")
const base = require("./webpack.base.conf")
const webpack = require("webpack")
const utils = require("./utils")

module.exports = merge(base, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "../dist"),
        clientLogLevel: "none",  // 隐藏每次更新时浏览器的log信息
        noInfo: false,  //隐藏每次更新时控制台的信息，错误和警告仍然会输出
        hot: true,
        port: 8088,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
    // ].concat(utils.htmlPlugin())
})