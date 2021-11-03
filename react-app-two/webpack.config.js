const webpack = require('webpack');
const path = require('path');
const deps = require('./package.json').dependencies;
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * @type {webpack.Configuration}
 */
module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    // See .swcrc for configuration
                    loader: 'swc-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        publicPath: 'auto',
    },
    mode: 'development',
    devServer: {
        static: path.join(__dirname, 'build'),
        port: 3002,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    plugins: [
        // To learn more about the usage of this plugin, please visit https://webpack.js.org/plugins/module-federation-plugin/
        new ModuleFederationPlugin({
            name: 'reactAppTwo',
            filename: 'remoteEntry.js',
            exposes: {
                './App': './src/standalone',
            },
            shared: {
                ...deps,
                react: { singleton: true, eager: true },
                'react-dom': { singleton: true, eager: true },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};