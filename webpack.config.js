const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: '#eval-source-map',
    entry: {
        main: './src/js/main.js'
    },
    output: {
        path: path.resolve('./dist/js'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', include: path.join(__dirname, './src/js') },
            { test: /\.css$/, loader: 'style-loader!css-loader', include: path.join(__dirname, './src/css') },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader', include: path.join(__dirname, './src/css')},
            { test: /\.(png|jpg|gif|woff|woff2|svg|eot|ttf|html)$/, loader: 'file-loader', include: path.join(__dirname, './src')}
        ]
    },
    devServer: {
        hot:true,
        inline:true,
        contentBase: path.resolve('./')
    },
    resolve: {
        extensions: ['.js', '.json', '.less']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ["common"],
            minChunks: Infinity
        }),
        new webpack.ProvidePlugin({
	        jQuery: 'jquery',
	        $: 'jquery',
	        Vue: 'vue'
	    }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};