const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    /**
     * @type {import('webpack-dev-server').Configuration}
     */
    devServer: {
        static: path.join(__dirname, 'build'),
        port: process.env.APP_PORT,
        allowedHosts: 'all',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    output: {
        publicPath: 'auto',
    },
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
    plugins: [
        new ModuleFederationPlugin({
            name: 'app-orchestration',
            remotes: {
                reactAppOne: 'reactAppOne@http://localhost:3001/remoteEntry.js',
                reactAppTwo: 'reactAppTwo@http://localhost:3002/remoteEntry.js',
            },
            // shared: [
            //     { import: 'react', singleton: true, packageName: 'react' },
            //     { import: 'react', singleton: true, packageName: 'react-dom' },
            // ],
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
        new ExternalTemplateRemotesPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
