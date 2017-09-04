const webpack = require('webpack');
const path = require('path');
require('./pack');
const common = require('./src/scripts/common');
const extend = require('extend');
const niv = require('npm-install-version');

const pack = path.basename(process.argv[1], '.js') === 'webpack';

for (let version of common.versions) {
    if (version.endsWith('.pre')) {
        niv.install('wm123450405/linqjs', { overwrite: pack, destination: common.module(version) });
    } else {
        niv.install('linq-js@' + version, { destination: common.module(version) });
    }
}

const config = module.exports = {
    devtool: '#source-map',
    entry: extend({
        'main': './src/scripts/main.js',
        'common': ['linq-js', 'vue', 'vue-router'],
    }, ...common.versions.map(version => ({ [common.module(version)] : common.module(version) }))),
    output: {
        path: path.resolve('./dist'),
		publicPath: '/linqjs/dist/',
        filename: '[name].js',
		chunkFilename: '[name].js'
	},
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', include: path.join(__dirname, 'src', 'scripts') },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                include: [ path.join(__dirname, './src/pages'), path.join(__dirname, 'src', 'components') ],
				options: {
					loaders: {
						scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
						sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
					}
				}
            },
			{ test: /\.json$/, loader: 'json-loader', include: path.join(__dirname, 'src', 'resources'), exclude: path.join(__dirname, 'src', 'resources', '*', 'apis', '*') },
            { test: /\.css$/, loader: 'style-loader!css-loader', include: path.join(__dirname, 'src', 'styles') },
            { test: /\.(sass|scss)$/, loader: 'style-loader!css-loader!sass-loader', include: path.join(__dirname, 'src', 'styles') },
            { test: /\.(png|jpg|gif|woff|woff2|svg|eot|ttf|html)$/, loader: 'url-loader?limit=40960', include: [ path.join(__dirname, 'src'), path.join(__dirname, 'node_modules') ] }
        ]
    },
    devServer: {
        hot:true,
        inline:true,
        historyApiFallback: true,
        contentBase: path.resolve('./')
    },
    resolve: {
        extensions: ['.js', '.json', '.sass', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.common',
            'vue-router': 'vue-router/dist/vue-router.common'
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['common', ...common.versions.map(version => common.module(version))],
            minChunks: Infinity
        }),
        new webpack.ProvidePlugin({
            Enumerable: 'linq-js',
	        Vue: 'vue',
	        VueRouter: 'vue-router'
	    })
    ].concat(
		pack ?
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}) : []
	)
};