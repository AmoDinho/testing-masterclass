const htmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");

const parts = require("./webpack.parts");

const commonConfig = merge([
    {
        plugins: [
            new htmlWebpackPlugin({
                title: "Webpack starter"
            })
        ]
    }
]);

const productionConfig = merge([]);

const developmentConfig = merge([
    parts.devServer({
        host:process.env.HOST,
        port: process.env.PORT,
    }),
]);

module.exports = mode => {
   if(mode === "production"){
       return merge(commonConfig,productionConfig,{mode});
   }

   return merge(commonConfig,developmentConfig,{mode});
};