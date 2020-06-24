const path = require("path")

// import { Configuration } from 'webpack'
/**
 * @type {Configuration}
 */
const config = {
    mode: "none",
    entry: "./src/main.js",
    output: {
        filename: "build.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}

module.exports = config