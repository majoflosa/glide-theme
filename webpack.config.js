const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.join(__dirname, '/dist/js'),
        filename: 'script.js'
    },
    devServer: {
        contentBase: './dist',
        publicPath: '/js/',
        port: 8080,
        watchContentBase: true,
        compress: true
    },
    mode: process.env.NODE_ENV || 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: { presets: ['@babel/env'] }
            },
            {
                test: /\.sass$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'file-loader'
            }
        ]
    }
}
