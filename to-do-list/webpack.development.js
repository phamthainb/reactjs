const webpack = require('webpack');
const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: './src/index.js',
    },
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'js/[name].js',
        publicPath: '/',
    },
    devServer: {
        port: 4000,
        open: true,
        stats: 'errors-only',
        inline: true,
        disableHostCheck: true,
        historyApiFallback: true,
        overlay: true,
        compress: true,
        //contentBase: '/',
        // headers: {
        //     'Access-Control-Allow-Origin': '*',
        // },
        // hot: true,
        // proxy: {
        //     '/api': 'http://localhost:3000',
        // },
    },
    resolve: {
        extensions: ['.js', '.sass', '.json'],
        modules: ['node_modules'],
        alias: {
            "@node_modules": path.resolve(__dirname, './node_modules'),
            // "@static": path.resolve(__dirname, './static'),
            "@views": path.resolve(__dirname, './src/views'),
            "@states": path.resolve(__dirname, './src/states'),
            // "@containers": path.resolve(__dirname, './src/views/containers'),
            "@components": path.resolve(__dirname, './src/views/components'),
            "@styles": path.resolve(__dirname, './src/styles'),
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(scss|sass)$/,
                use: [{
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['./src/styles'],
                        },
                    }
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
            {
                test: /\.(ttf|eot|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'fonts',
                  },
            },
            {
                test: /\.(jpe?g|png|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                },
            },
            {
                test: /\.ico$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(mp4|mp3)$/i,
                loaders: 'file-loader',
                options: {
                    outputPath: 'medias',
                  },
            },
            {
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader"
                ],
                test: /\.less$/
            },

        ],

    },
    plugins: [
        new CleanWebpackPlugin(),
        new ProgressBarPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.$": "jquery",
            "window.jQuery": "jquery"
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeAttributeQuotes: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            ignoreOrder: false,
            allChunks: true,

        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            automaticNameMaxLength: 30,
            name: 'vendor',
            cacheGroups: {
              vendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10
              },
              default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true
              }
            }
        },
        minimizer: [
            new OptimizeCssAssetsPlugin({}),
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    output: {
                      comments: false,
                    },
                    compress: {
                        drop_console: true,
                        drop_debugger: true
                    },
                },
            })
        ],
    }
};
 