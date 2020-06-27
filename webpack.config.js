const path = require("path")

// import {Configuration} from "webpack"

/**
 * @type {Configuration}
 */
const config = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
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