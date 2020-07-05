const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const webpack = require("webpack")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// import {Configuration} from "webpack"

/**
 * @type {Configuration}
 */
const config = {
    mode: "production",
    entry: {
        app: "./src/index.js",
        print: "./src/print.js",
        another: "./src/another.js"
    },
    output: {
        filename: "[name].[hash].js",
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
            template: "./src/index.html"
        }),
    //    new BundleAnalyzerPlugin(),
       new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: false,
            cacheGroups: {
                vue: {
                    chunks: "all",
                    name: "vue",
                    priority: 10,
                    test: (module) => {
                        console.log(module.context)
                        return /vue|vue-router/.test(module.context)
                    }
                }
            }
        },
        
    }
}

module.exports = config