const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        watchContentBase: true,
        port: 3000,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Pfeiffer & Partner',
            template: 'dist/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        })
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src')
        ],
        extensions: ['.js'],
    }
}