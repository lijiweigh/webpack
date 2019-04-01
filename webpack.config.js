const path = require("path")

module.exports = {
    mode: "production",
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                use: [
                    "file-loader"
                ]
            }
        ]
    }
}