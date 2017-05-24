var path = require('path')
var webpack = require('webpack')
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = require('./webpack.config')({
    entry: ['./example/dev'],
    devtool: 'cheap-module-eval-source-map',
    firstJsLoader: [],
    firstPlugins: [],
    lastPlugins: [
        new LiveReloadPlugin({
            port: 35029
        })
    ],
    externals: {},
    output: {
        path: path.join(__dirname, '../output'),
        filename: 'example/dev.js',
        publicPath: '/'
    }
})
