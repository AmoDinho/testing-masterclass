# testing-masterclass
This repo covers how to approach TDD for modern front-end Javascript apps.

This might seem all over the place what this is how we are going to do it:

* create webpack config from scratch.
* Install React.
* Create a simple Use Case to interact with the Root Insurance API.
* create simple unit tests. 

Step 1

run ```yarn init```

Step 2 

You need to install webpack and its associated dependancies:

```
yarn add webpack webpack-cli webpack-dev-server --dev
```


step 3 

create a src folder and add an index.js & component.js file

step 4

add the following dependancy: 

```
yarn add html-webpack-plugin --dev
```

step 5 

create a webpack.config.js file

step 6 

add the following :


step 7

add the following scripts to your package.json

step 8

run: ```yarn run```

and your webpack dev server should be running.

part II

step 9

add nodemon

```
yarn add nodemone --dev
```

step 10

update package.json

```
"start": "nodemon ---watch webpack-dev-server --exec \"webpack-dev-server --mode development\""
```
step 11

add webpack merge

```
yarn add webpack-merge --dev
```

step 12

create a webpack.parts.js add the following to it: 


```
exports.devServer = ({host,port} = {}) => ({
    devServer: {
        stats: "errors-only",
        host,
        port,
        open:true,
        overlay:true
    },
});
```
step 13 

then update your webpack.config.js to look like this: 

```

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

```

step 14 

Update package.json:

```
"start": "nodemon ---watch webpack-dev-server --exec \"webpack-dev-server --env development\"",

    "build": "webpack --env.target production"

``