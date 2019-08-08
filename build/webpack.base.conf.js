const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const autoDllPlugin = require("autodll-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const utils = require("./utils")
// const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    // entry: {
    //     index: path.resolve(__dirname, "../src/index.js"),
    //     // app: path.resolve(__dirname, "../src/app.js")
    // },
    entry: utils.getEntry(),
    output: {
        filename: "js/[name].[hash:8].js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: ""
    },
    resolve: {
        alias: {
            "vue": "vue/dist/vue.esm.js",
            "@": path.resolve(__dirname, "../src")
        },
        extensions: ["*", ".js", ".json", ".vue"]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 1024,
                            outputPath: "img",
                            name: "static/[name].[hash].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    (process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader), "css-loader", "postcss-loader", "sass-loader"]
                // use: ExtractTextPlugin.extract({
                //     use: ['css-loader', "postcss-loader", "sass-loader"],
                //     fallback: 'vue-style-loader'
                //   })
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: path.resolve(__dirname, "../index.html")
        // }),
        new VueLoaderPlugin(),
        // new autoDllPlugin({
        //     inject: true,
        //     filename: "[name].js",
        //     // context: __dirname,
        //     path: "./dll",
        //     debug: true,
        //     entry: {
        //         dll: ["vue"]
        //     }
        // }),
        new MiniCssExtractPlugin({
            filename: "css/style.css"
        })
        // new ExtractTextPlugin("style.css")
    // ],
    ].concat(utils.htmlPlugin()),
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: "vendors",
                    chunks: "all",
                    minChunks: 1
                }
            }
        }
    }
}