const path = require('path');
const common = require('./webpack.common.js');
var webpack = require('webpack');
const merge = require('webpack-merge');
module.exports = merge(common,{
  mode: 'development',
  watch: true,
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true, 
    hot: true, 
    https: false,
    noInfo: false,
    port: 3000,
    host: 'localhost',
    disableHostCheck: true,
    open: true, 
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: "/node_modules/"
    }
},
plugins: [
    new webpack.DefinePlugin({
        __DEV__: true,
        'process.env': {
            'NODE_ENV': JSON.stringify('development')
        }
    })
]
})