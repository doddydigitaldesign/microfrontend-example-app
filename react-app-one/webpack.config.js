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
                test: /\.(ts|tsx)$/,
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
        port: 3001,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    plugins: [
        // To learn more about the usage of this plugin, please visit https://webpack.js.org/plugins/module-federation-plugin/
        new ModuleFederationPlugin({
            name: 'reactAppOne',
            filename: 'remoteEntry.js',
            exposes: {
                './App': './src/standalone',
            },
            shared: {
                // ...deps,
                react: {
                    singleton: true,
                    shareKey: 'react',
                    shareScope: 'default',
                    eager: true,
                    import: 'react',
                    requiredVersion: deps['react'],
                },
                'react-dom': {
                    singleton: true,
                    shareKey: 'react-dom',
                    shareScope: 'default',
                    eager: true,
                    import: 'react-dom',
                    requiredVersion: deps['react-dom'],
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
