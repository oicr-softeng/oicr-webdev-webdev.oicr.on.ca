require('babel-polyfill');
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const os = require('os');
const transpiling = require('../../configs/transpiling');

const moduleExclude = new RegExp(
    `node_modules/(?!(${transpiling.join('|')})/).*`
);

module.exports = env => {
    /**
     * Plugin setting
     */
    const plugins = [
        new webpack.ProgressPlugin(),
        new ExtractTextPlugin('../css/core.bundle.css'),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
                warnings: false,
                ie8: false,
            },
            parallel: os.cpus().length,
            cache: true,
        }),
    ];

    return {
        entry: ['./src/core/_styles'],
        output: {
            filename: '.base_styles',
            path: path.resolve('../assets/dist/js/'),
            publicPath: '/assets/dist/js/',
        },
        resolve: {
            extensions: ['.js'],
        },
        module: {
            loaders: [
                {
                    test: /\.scss$|\.css$/,
                    loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
                },
            ],
        },
        plugins,
        node: {
            fs: 'empty',
            child_process: 'empty',
        },
    };
};
