const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    plugings: [
        new htmlWebpackPlugin({
            title: "Webpack starter"
        })
    ]
}