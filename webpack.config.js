const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: '#source-map',
    entry: {
        'main': './src/scripts/main.js',
        'common': ['linq-js', 'vue', 'vue-router']
    },
    output: {
        path: path.resolve('./dist'),
		publicPath: '/linqjs/dist/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', include: path.join(__dirname, './src/scripts') },
            { test: /\.vue$/, loader: 'vue-loader', include: [ path.join(__dirname, './src/pages'), path.join(__dirname, './src/components')] },
			{ test: /\.json$/, loader: 'json-loader', include: path.join(__dirname, './src/resources') },
            { test: /\.css$/, loader: 'style-loader!css-loader', include: path.join(__dirname, './src/styles') },
            { test: /\.(sass|scss)$/, loader: 'style-loader!css-loader!sass-loader', include: path.join(__dirname, './src/styles') },
            { test: /\.(png|jpg|gif|woff|woff2|svg|eot|ttf|html)$/, loader: 'url-loader?limit=40960', include: [ path.join(__dirname, './src'), path.join(__dirname, './node_modules') ] }
        ]
    },
    devServer: {
        hot:true,
        inline:true,
        historyApiFallback: true,
        contentBase: path.resolve('./')
    },
    resolve: {
        extensions: ['.js', '.json', '.less', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.common',
            'vue-router': 'vue-router/dist/vue-router.common'
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['common'],
            minChunks: Infinity
        }),
        new webpack.ProvidePlugin({
            Enumerable: 'linq-js',
	        Vue: 'vue',
	        VueRouter: 'vue-router'
	    }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};