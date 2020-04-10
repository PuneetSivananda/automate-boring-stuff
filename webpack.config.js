const path = require('path');

const webpack = require('webpack');

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: ["./main.tsx","./main.scss"],
    output: {
        path: path.join(__dirname, "./site/content"),
        filename: "app.js"
    },
    resolve: {
        extensions: ['.Webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.ts$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './main.css'
                        },
                    }
                ]
            }
        ]
    },
    devServer: {
        host: "127.0.0.1",
        contentBase: path.join(__dirname, 'site/content'),
        historyApiFallback: true,
        port: process.env.REACT_APP_PORT
    },
    node: {
        fs: 'empty'
    },
    plugins: [
        
    ]
};