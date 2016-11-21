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
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                dead_code: true,
                drop_debugger: true
            },
            mangle: true,
            sourceMap: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.NoErrorsPlugin()
    ]
};
