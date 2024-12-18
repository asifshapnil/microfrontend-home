const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");
const path = require('path');


module.exports = {
    entry: "./src/entry.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]_bundle.js', // Name the entry chunk dynamically
        chunkFilename: '[name].[contenthash].js', // Use dynamic names for non-entry chunks
        publicPath: '/', 
    },
    devServer: {
        port: 3000,  
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new ModuleFederationPlugin({
            name: "HomeApp",  
            exposes: {
                './store': './src/store', 
                './Display': './src/shared/Display', 
            },
            remotes: {
                "HeaderApp": "HeaderApp@https://microfrontend-header-sandy.vercel.app/remoteEntry.js",
                "AuthApp": "AuthApp@https://microfrontend-auth-10.vercel.app/remoteEntry.js",
                "ProductApp": "ProductApp@https://microfrontend-product-plum.vercel.app/remoteEntry.js",
            },
            shared: {  
                ...dependencies,  
                react: { 
                    singleton: true,
                    requiredVersion: dependencies["react"],
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: dependencies["react-dom"],
                },
            },
        }),
    ],
    resolve: {
        alias: {
            ajv: path.resolve(__dirname, 'node_modules/ajv')
        },
        extensions: [".js", ".jsx"],
    },
    target: "web",
    optimization: {
        runtimeChunk: false,
    },
};