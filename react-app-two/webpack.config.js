const webpack = require('webpack');
const path = require('path');

/**
 * @type {webpack.Configuration}
 */
module.exports = {
    entry: './src/index.ts',
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
        filename: 'index.js',
        path: path.resolve(__dirname, 'build'),
    }
};
