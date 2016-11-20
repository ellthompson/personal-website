var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, 'static/src/index.jsx'),
    output: {
        path: path.join(__dirname, 'static/dist/'),
        filename: 'index.js'
    },
    resolve: {
        root: path.join(__dirname, 'static/src/'),
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    devtool: 'eval-source-map',
    plugins: [
    ]
};
