const HtmlWebpackPlugin = require("html-webpack-plugin");

exports.page =({
    path="",
    template,
    title="Webpack setup",
    entry,
    chunks
} ={}) => ({
    entry,
    plugins:[
        new HtmlWebpackPlugin({
        chunks,
        filename: `${path && path + "/"}index.html`,
        template:"./src/index.html",
        title
    })
    ]
});


exports.devServer = ({host,port} = {}) => ({
    devServer: {
        stats: "errors-only",
        host,
        port,
        open:true,
        overlay:true
    },
});


exports.loadJavaScript = ({include,exclude} = {}) =>({
    module: {
        rules:[
            {
                test:/\.js$/,
                include,
                exclude:/node_modules/,
                //""
                use:"babel-loader",
            }
        ]
    }
});

exports.loadCSS = ({include,exclude} ={}) =>({
    module: {
        rules: [
            {
                test:/\.css$/,
                include,
                exclude,
                use: ["style-loader","css-loader"],
            }
        ]
    }
})