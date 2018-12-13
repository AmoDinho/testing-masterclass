const htmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const parts = require("./webpack.parts");
const path = require("path");

const PATHS = {
    app: path.join(__dirname,"src"),
    build: path.join(__dirname,"dist"),
};

const commonConfig = merge([
    {
        plugins: [
            new htmlWebpackPlugin({
                title: "Webpack starter"
            })
        ]
    },

    parts.loadJavaScript({include: PATHS.app})
]);

const productionConfig = merge([
    {
        output:{
            publicPath: "/testing-masterclass/"
        }
    }
]);

const developmentConfig = merge([
    parts.devServer({
        host:process.env.HOST,
        port: process.env.PORT,
    }),
    parts.loadCSS()
]);

module.exports = mode => {
   if(mode === "production"){
       return merge(commonConfig,productionConfig,{mode});
   }

   return merge(commonConfig,developmentConfig,{mode});
};