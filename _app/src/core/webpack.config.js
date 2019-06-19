require('babel-polyfill');
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const os = require('os');
const entries = require('../../configs/entries');
const transpiling = require('../../configs/transpiling');

const moduleExclude = new RegExp(
    `node_modules/(?!(${transpiling.join('|')})/).*`
);

// Load custome webpack config
let webpackConfig = (env, config) => config;
try {
    webpackConfig = require('../site/webpack.config.js');
} catch (e) {}

module.exports = env => {
    /**
     * Augument entries with 'whatwg-fetch' and 'babel-polyfill'
     */
    const _entries = {};
    Object.keys(entries).forEach((key, i) => {
        if (key === 'base') {
            _entries[key] = ['babel-polyfill', 'whatwg-fetch'].concat(
                entries[key]
            );
        } else {
            _entries[key] = ['whatwg-fetch'].concat(entries[key]);
        }
    });

    //
    const entriesOrder = { core: 0 };
    Object.keys(entries).forEach((key, i) => {
        entriesOrder[key] = i + 1;
    });

    /**
     * Plugin setting
     */
    let plugins = [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new ExtractTextPlugin('../css/app.bundle.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'core',
        }),
        new HtmlWebpackPlugin({
            excludeAssets: [/app.*.css/],
            minify: false,
            chunksSortMode: (e1, e2) =>
                entriesOrder[e1.names[0]] - entriesOrder[e2.names[0]],
            filename: path.resolve('../_includes/dist/footer_scripts.inc'),
            template: 'src/core/.empty',
        }),
        new HtmlWebpackExcludeAssetsPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
    ];
    // Production
    if (env.prod) {
        plugins = plugins.concat([
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false,
            }),
            new webpack.DefinePlugin(
                Object.assign(
                    {},
                    {},
                    {
                        'process.env': {
                            NODE_ENV: JSON.stringify('production'),
                        },
                    }
                )
            ),
            new UglifyJsPlugin({
                uglifyOptions: {
                    warnings: false,
                    ie8: false,
                },
                parallel: os.cpus().length,
                cache: true,
            }),
        ]);
    }
    // Dev
    else if (env.dev) {
        plugins = plugins.concat([new webpack.DefinePlugin({})]);
    }

    return webpackConfig(env, {
        entry: _entries,
        output: {
            filename: env.prod
                ? '[name].[chunkhash].bundle.js'
                : '[name].[chunkhash].dev.bundle.js',
            path: path.resolve('../assets/dist/js/'),
            publicPath: '/assets/dist/js/',
        },
        resolve: {
            extensions: ['.js', '.jsx', '.yaml'],
        },
        devtool: env.dev ? 'source-map' : '',
        module: {
            loaders: [
                {
                    exclude: moduleExclude,
                    test: /(\.js$|\.jsx$)/,
                    loader: 'babel-loader',
                    query: {
                        plugins: ['transform-decorators-legacy'],
                        presets: ['env', 'react', 'stage-2'],
                    },
                },
                {
                    exclude: /(node_modules|bower_components)/,
                    test: /\.yaml$/,
                    loader: 'yaml-loader',
                },
                {
                    test: /\.json$/,
                    loader: 'json-loader',
                },
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
    });
};
