const path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        watchContentBase: true,
        port: 3000,
        open: true,
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
}