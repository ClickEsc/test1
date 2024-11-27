const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');


// module.exports = {
//   entry: "./src/index.js",
//   mode: "development",
//   output: {
//     filename: "bundle.js",
//     path: path.resolve("dist"),
//     publicPath: "/",
//   },
//   module: {
//     rules:[
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: "babel-loader"
//       },
//     ], 
//   },
// }


// const path = require('path');
// const webpack = require("webpack");

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require('path');
// const webpack = require("webpack");

// module.exports = {
//     mode: 'development',
//     entry: {
//         'chunkone': './index1.js',
//         'chunktwo': './index2.js'
//     },
//     output: {
//         path: path.resolve(__dirname, './dist'),
//         filename: '[name].bundle.js',
//     },
//     target: 'web',
//     devServer: {
//         port: '5000',
//         static: {
//             directory: path.join(__dirname, 'public')
//         },
//         open: true,
//         hot: true,
//         liveReload: true,
//         proxy: {
//             '/api': 'http://localhost:8000',
//         }
//     },
//     resolve: {
//         extensions: ['.js', '.jsx', '.json'],
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: path.join(__dirname, 'public', 'index1.html'),
//             filename: "index1.html",
//             chunks: ['chunkone']
//         }),
//         new HtmlWebpackPlugin({
//             template: path.join(__dirname, 'public', 'index2.html'),
//             filename: "index2.html",
//             chunks: ['chunktwo']
//         })
//     ]
// };

// const path = require('path');
// const HtmlWebPackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const fs = require('fs');
// const lessToJs = require('less-vars-to-js');
// const TerserPlugin = require('terser-webpack-plugin');

// const paletteLocalLess = fs.readFileSync(path.join(__dirname, '../theme/theme.less'), 'utf8');
// const paletteLocal = lessToJs(paletteLocalLess);
// const palette = Object.assign(paletteLocal);

const { devServerConfig } = require('./package');
// const { babelConfig } = require('../.babelrc');

module.exports = (env, options) => {
    // const isDev = options.mode === 'development';
    return {
        mode: 'development',
        entry: {
            main: path.resolve(__dirname, './src/index.js'),
        },
        resolve: {
            modules: [path.resolve(__dirname, './src'), 'node_modules']
        },
        devtool: 'source-map',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[name].[contenthash].js',
            publicPath: '/'
        },
        // optimization: isDev ? {
        //     minimize: false
        // } : {
        //     minimize: true,
        //     nodeEnv: 'production',
        //     removeAvailableModules: true,
        //     mergeDuplicateChunks: true,
        //     occurrenceOrder: true,
        //     mangleWasmImports: true,
        //     removeEmptyChunks: true,
        //     providedExports: true,
        //     usedExports: true,
        //     concatenateModules: true,
        //     runtimeChunk: {
        //         name: entrypoint => `runtime~${entrypoint.name}`
        //     },
        //     minimizer: [
        //         new TerserPlugin({
        //             parallel: true,
        //             // sourceMap: true,
        //             terserOptions: {
        //                 ie8: false,
        //                 safari10: false,
        //                 keep_classnames: true
        //             }
        //         })
        //     ]
        // },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            // presets: babelConfig.presets,
                            presets: [
                                "@babel/preset-react"
                              ]
                        },
                    },
                },
                // {
                //     test: /\.html$/,
                //     use: [
                //         {
                //             loader: 'html-loader',
                //             options: { minimize: true }
                //         }
                //     ]
                // },
                // {
                //     test: /\.less$/,
                //     use: [
                //         isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                //         'css-loader',
                //         {
                //             loader: 'less-loader',
                //             options: {
                //                 strictMath: false,
                //                 noIeCompat: true,
                //                 javascriptEnabled: true,
                //                 modifyVars: palette
                //             }
                //         }
                //     ],
                //     include: [
                //         path.resolve(__dirname, '../src'),
                //         path.resolve(__dirname, '../node_modules')
                //     ]
                // },
                // {
                //     test: /\.css$/,
                //     use: [
                //         isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                //         'css-loader'
                //     ]
                // },
                // {
                //     test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                //     issuer: {
                //         test: /\.js?$/
                //     },
                //     use: [
                //         'babel-loader',
                //         {
                //             loader: '@svgr/webpack',
                //             options: {
                //                 babel: false,
                //                 icon: true
                //             }
                //         }
                //     ]
                // },
                // {
                //     test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                //     issuer: {
                //         test: /\.less?$/
                //     },
                //     loader: 'url-loader?limit=100000'
                // },
                // {
                //     test: /\.(otf)$/,
                //     loader: 'url-loader?limit=10000&mimetype=application/x-font-opentype&name=./public/fonts/[name].[ext]'
                // },
                // {
                //     test: /\.(ico|xlsx)$/,
                //     exclude: /node_modules/,
                //     loader: 'file-loader?name=[name].[ext]'
                // }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Development',
                template: path.resolve(__dirname, './public/template.html'),
                filename: "index.html",
                // template: './public/template.html',
                // filename: './index.html'
            }),
            // new FileManagerPlugin({
            //     events: {
            //         onStart: {
            //             delete: ['dist'],
            //         },
            //     },
            // }),
        //     new MiniCssExtractPlugin({
        //         filename: '[name].css',
        //         chunkFilename: '[id].css'
        //     })
        ],
        devServer: {
            watchFiles: path.resolve(__dirname, './src'),
            static: {
                directory: path.resolve(__dirname, './public'),
                publicPath: '/public/',
                watch: true
            },
            port: devServerConfig.port,
            proxy: devServerConfig.proxy,
            open: devServerConfig.open,
            compress: true,
            historyApiFallback: true,
            hot: true,
            liveReload: true,
        }
    };
};
