const path = require("path")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    context: path.resolve(__dirname, ""),
    // entry: "./main.js",
    // entry: ["./main.js"],
    entry: {
        app: "./main.js",
        aaa: "./1.js"
    },
    // entry: () => {
    //     return {
    //         a: "./main.js"
    //     }
    // },
    // entry : () => {
    //     return new Promise(resolve => {
    //         resolve ({
    //             b: "./main.js"
    //         })
    //     })
    // },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        chunkFilename: "chunkFile.js",
        // publicPath: "https://myCDN.com"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: ["style-loader"],
                    use: ["css-loader"]
                })
            },
            {
                test: /\.js$/,
                use: ["babel-loader?cacheDirectory"],
                include: path.resolve(__dirname, ""),
                exclude: path.resolve(__dirname, "node_modules")
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
                exclude: path.resolve(__dirname, "node_modules")
            },
            {
                test: /\.(gif|png|jpe?g|eot|woff2?|ttf|otf|svg|pdf)$/,
                use: ["file-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".vue", ".json"],
        alias: {
            root: "./"
        },
        modules: ["./", "node_modules"]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "[name].css"
        })
    ]
}