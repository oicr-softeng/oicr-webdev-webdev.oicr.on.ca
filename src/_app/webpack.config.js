require('babel-polyfill');
const webpack = require('webpack');
const path = require('path');
const entries = require('./configs/entries');
const configProd = require('./configs/env_theme.prod');
const configDev = require('./configs/env_theme.dev');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const jquery = require('jquery');

// Load custome webpack config
var webpackConfig = (env, config) => config
try {
    webpackConfig = require('./config/webpack.config.js');
} catch (e) {}

module.exports = env => {

    /**
     * Augument entries with 'whatwg-fetch' and 'babel-polyfill'
     */
    const _entries = {}
    Object.keys(entries).forEach((key, i) => {
        if(i == 0){
            _entries[key] = ['babel-polyfill', 'whatwg-fetch'].concat(entries[key]);
        } else {
            _entries[key] = ['whatwg-fetch'].concat(entries[key]);
        }
    });

    /**
     * Plugin setting
     */
    var plugins = [
        new ExtractTextPlugin('../css/core.bundle.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'core',
            minChunks: Infinity,
        }),
        new HtmlWebpackPlugin({
            chunks: ['core', 'site'],
            minify: false,
            filename: '../../../_includes/footer_bundled_scripts.inc',
            template: '.empty'
        }),
        new HtmlWebpackPlugin({
            chunks: ['core_styles'],
            minify: false,
            inject: true,
            filename: '../../../_includes/bundled_styles.inc',
            template: '.empty'
        })
    ];
    // Production
    if (env.prod) {
        plugins = plugins.concat([
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false,
            }),
            new webpack.DefinePlugin(
                Object.assign({},
                    configProd,
                    {
                        'process.env': {
                            NODE_ENV: JSON.stringify('production'),
                        }
                    }
                )
            ),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    screw_ie8: true,
                    warnings: false,
                }
            }),
        ])
    }
    // Dev
    else if (env.dev) {
        plugins = plugins.concat([
            new webpack.DefinePlugin(configDev)
        ])
    }

    return webpackConfig(env, {
        entry: _entries,
        output: {
            filename: '[name].[chunkhash].bundle.js',
            path: path.resolve(__dirname, '../assets/dist/js/'),
            publicPath: '/assets/dist/js/',
        },
        resolve: {
            extensions: ['.js', '.jsx', '.yaml'],
        },
        devtool: env.dev ? 'source-map': '',
        module: {
            loaders: [
                {
                    exclude: /(node_modules|bower_components)/,
                    test: /(\.js$|\.jsx$)/,
                    loader: 'babel-loader',
                    query: {
                    plugins: ['transform-decorators-legacy'],
                    presets: ['react', 'es2015-webpack', 'stage-2'],
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
        plugins: plugins,
    });
};
