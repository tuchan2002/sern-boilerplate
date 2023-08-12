const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./web/src/index.js",
    output: {
        path: path.join(__dirname, "/web/build"), 
        filename: "bundle.js"
    },
    module: {
        rules: [
        {
            test: /\.js$/, 
            exclude: /node_modules/, 
            use: ["babel-loader"]
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./web/public/index.html"
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 5000
    }
};