const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const createConfig = () => ({
    mode: 'none',
    entry: {
        'browserfs-webdav': './src/index.ts',
        'browserfs-webdav.min': './src/index.ts',
    },
    resolve: {
        alias: {
            'browserfs/dist/node/core/file_system': path.resolve(__dirname, './src/file_system'),
            'browserfs/dist/node/core/node_fs_stats': path.resolve(__dirname, './src/fs_stats'),
            'browserfs/dist/node/core/api_error': path.resolve(__dirname, './src/api_error'),
        },
        extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        rules: [{ test: /\.ts$/, loader: 'ts-loader' }]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            include: /\.min\.js$/
        })]
    },
    externals: {
        'browserfs': 'BrowserFS',
        'fs': 'fs',
        'through2': 'through2'
    }
})

const bundle = createConfig();

const EsmWebpackPlugin = require('@purtuga/esm-webpack-plugin');
const esmBundle = {
    ...createConfig(),
    entry: {
        'browserfs-webdav.esm': './src/index.ts',
    },
    output: {
        library: 'BrowserFSWebDAV',
        libraryTarget: 'var'
    },
    plugins: [
        new EsmWebpackPlugin()
    ]
};

module.exports = [bundle, esmBundle];
