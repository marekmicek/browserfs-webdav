const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: {
        'browserfs-webdav': './src/index.ts',
        'browserfs-webdav.min': './src/index.ts',
    },
    resolve: {
        alias: {
            'browserfs/dist/node/core/file_system': path.resolve(__dirname, './src/file_system'),
            'browserfs/dist/node/core/node_fs_stats': path.resolve(__dirname, './src/fs_stats'),
        },
        extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        rules: [{ test: /\.ts$/, loader: 'ts-loader' }]
    },
    externals: {
        'browserfs/dist/node/core/api_error': 'ApiError',
    },
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            include: /\.min\.js$/
        })]
    }
}