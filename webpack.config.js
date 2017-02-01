var IS_PRODUCTION = process.env.NODE_ENV == "production";
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/js/index.js",
    devtool: IS_PRODUCTION ? null : "eval-cheap-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        colors: true,
        hot: true,
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                loaders: ['babel-loader'],
                plugins: ['transform-runtime'],
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    "style-loader", "css-loader"
                )
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: './'
    },
    watch: true,
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            hash: true
        }),
        new ExtractTextPlugin('style.css', { allChunks: false }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
};

if(IS_PRODUCTION) {
    module.exports.plugins.push(
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    )
}
