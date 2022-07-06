const MiniCssExtractPlugin = require("mini-css-extract-plugin");

MiniCssExtractPlugin

let mode  = "development";

if(process.env.NODE_ENV ===  'production') {
    mode = 'production';
}

module.exports = {
    mode: mode,

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin()
    ],

    devtool: "source-map",
    devServer: {
        static: "./dist",
        hot: true,
    }
}