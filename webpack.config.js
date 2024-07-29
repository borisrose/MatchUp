// webpack.config.js
//fichier commonjs donc aucun usage du mot clé import
const path = require("path")
const HtmlPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    entry:"./src/main.ts", 
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: "development",
    resolve: {
        extensions: [".ts", ".js", ".css", ".scss"]
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                use: "ts-loader",
                exclude: "/node_modules"
            },
            {
                test: /.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /.(png|gif|jpe?g)$/,
                type: "asset/resource"
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: "./src/index.html"
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "assets",
                    to: "assets"
                }
            ]
        })
    ]


}

