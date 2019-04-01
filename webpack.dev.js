const merge = require("webpack-merge")
const common = require("./webpack.common")

module.exports = merge(common, {
    mode: "development",
    devServer: {
        contentBase: "./dist",
        host: "192.168.42.87"
    },
    devtool: "inline-source-map"
})