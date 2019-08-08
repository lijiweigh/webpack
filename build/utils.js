const glob = require("glob")
const path = require("path")
const merge = require("webpack-merge")
const htmlWebpackPlugin = require("html-webpack-plugin")
const autoDllPlugin = require("autodll-webpack-plugin")

const pagePath = path.resolve(__dirname, "../src")

function getEntry () {
    let paths = glob.sync(pagePath + "/*/*.js")
    let result = {}
    paths.forEach(filepath => {
        let name = filepath.substring(filepath.lastIndexOf(path.sep) + 1, filepath.lastIndexOf("."))
        result[name] = filepath
    })
    return result
}

function htmlPlugin () {
    let paths = glob.sync(pagePath + "/*/*.html")
    let result = []
    paths.forEach(filepath => {
        let name = filepath.substring(filepath.lastIndexOf(path.sep) + 1, filepath.lastIndexOf("."))
        let conf = {
            template: filepath,
            filename: name + ".html",
            chunks: ["vendors", name],
            inject: true,
            // multihtmlCache: true
        }
        if (process.env.NODE_ENV === "production") {
            conf = merge(conf, {
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true
                },
                chunksSortMode: 'dependency'
            })
        }
        result.push(new htmlWebpackPlugin(conf))
    })
    result.push(new autoDllPlugin({
        inject: true,
        filename: "[name].js",
        path: "./dll",
        debug: true,
        entry: {
            dll: ["vue"]
        }
    }))
    return result

}

exports.getEntry = getEntry
exports.htmlPlugin = htmlPlugin