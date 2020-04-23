const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        app: './src/index.tsx',
    },
    module: {
        rules: [{
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.(css|scss|sass)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                    'file-loader?name=./images/[name].[hash:6].[ext]',
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader?name=./fonts/[name].[hash:6].[ext]'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader?name=./app_data/[name].[hash:6].[ext]'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader?name=./app_data/[name].[hash:6].[ext]'
                ]
            },
            {
                test: /\.json$/,
                use: [
                    'file-loader?name=./app_data/[name].[hash:6].[ext]'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            favicon: './public/favicon.ico',
            chunkhash: true
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ],
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx','.json','.scss','.css']
    },
};