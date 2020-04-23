const path= require('path')
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename: 'js/[name].[hash:6].js',
    sourceMapFilename: 'js/[name].[hash:6].js.map',
    chunkFilename: 'js/[id].chunk.js',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        maxAsyncRequests: 5
    },
    minimize: true,
    mangleWasmImports: true,
    minimizer: [new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
        terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {
                sequences: true,
                dead_code: true,
                conditionals: true,
                booleans: true,
                unused: true,
                if_return: true,
                join_vars: true,
                drop_console: true,
                evaluate: true
            },
            mangle: true, // Note `mangle.properties` is `false` by default.
            module: false,
            output: null,
            toplevel: false,
            nameCache: null,
            ie8: false,
            keep_classnames: undefined,
            keep_fnames: false,
            safari10: false,
            output: {
                comments: false,
                beautify: false
            }
        },
        extractComments: false,
        exclude: [/\.min\.js$/gi] // skip pre-minified libs
    })]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: false,
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
    }),
  ],
});