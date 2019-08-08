const config = require("./webpack.prod.conf")
const webpack = require("webpack")


webpack(config, (err, stats) => {
    if (err) {
        console.log(err)
        return
    }

    console.log(stats.toString({
        chunks: false,
        colors: true
    }))
})