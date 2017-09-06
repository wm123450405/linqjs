const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
require('./pack');
const common = require('./src/scripts/common');
const extend = require('extend');
const niv = require('npm-install-version');

const pack = process.env.NODE_ENV === 'production';
const reload = process.env.RUNTIME_RELOAD === 'reload';
const ignoreSkip = process.env.IGNORE_SKIP;

let skipList = [];
const install = (packageName, options) => {
    if (options.overwrite !== true && fs.existsSync(path.join(__dirname, 'node_modules', options.destination || packageName)) && fs.existsSync(path.join(__dirname, 'dist', (options.destination || packageName) + '.js'))) {
        skipList.push(options.destination || packageName);
        console.log(`Package ${ options.destination || packageName } already exists, skipping`);
    } else {
        niv.install(packageName, options);
    }
};

for (let version of common.versions) {
    if (version.endsWith('.pre')) {
        install('wm123450405/linqjs', { overwrite: pack || reload, destination: common.module(version) });
    } else {
        install('linq-js@' + version, { destination: common.module(version) });
    }
}

const config = module.exports = {
    devtool: '#source-map',
    entry: {
        'main': './src/scripts/main.js',
        'common': ['linq-js', 'vue', 'vue-router'],
    },
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
            names: ['common'],
            minChunks: Infinity
        }),
        new webpack.ProvidePlugin({
            Enumerable: 'linq-js',
	        Vue: 'vue',
	        VueRouter: 'vue-router'
	    })
    ].concat(
		pack ?
		[
            //...(ignoreSkip ? [] : skipList.map(skip => new webpack.IgnorePlugin(new RegExp(skip.replace(/\./g, '\\.'))))),
		    new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                compress: {
                    warnings: false
                }
            })
        ] : []
	)
};