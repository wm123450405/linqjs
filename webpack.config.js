const webpack = require('webpack');
const Server = require('webpack-dev-server');
const path = require('path');
const fs = require('fs');
const extend = require('extend');
const niv = require('npm-install-version');

niv.install('linq-js', { destination: 'linq-js' });

require('./pack');
const common = require('./src/scripts/common');

const pack = process.env.NODE_ENV === 'production';
const reload = process.env.RUNTIME_RELOAD === 'reload';
const ignoreSkip = process.env.IGNORE_SKIP;
const statsOptions = {
    hash: true,
    version: true,
    timings: true,
    assets: true,
    entrypoints: true,
    chunks: true,
    chunkModules: true,
    errorDetails: true,
    reasons: true,
    depth: true,
    usedExports: true,
    providedExports: true,
    colors: true,
    performance: true
};
const uglifyOptions = {
    sourceMap: true,
    compress: {
        warnings: false
    }
};

const packages = new Map();

const doPack = () => {
    console.log('do pack');
    let compiler = webpack({
        devtool: 'source-map',
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
        resolve: {
            extensions: ['.js', '.json', '.sass', '.vue'],
            alias: {
                'vue': 'vue/dist/vue.common',
                'vue-router': 'vue-router/dist/vue-router.common'
            }
        },
        plugins: [
            ...common.versions.map(version => new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require(`./dist/${ common.module(version) }-manifest.json`)
            })),
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
                    new webpack.optimize.UglifyJsPlugin(uglifyOptions)
                ] : []
        )
    }, (error, stats) => {
        process.stdout.write(stats.toString(statsOptions) + "\n");
        if (error) {
            console.error(error);
        }
    });
    if (!pack) {
        let serverOptions = {
            host: '0.0.0.0',
            port: 8040,
            inline: true,
            hot: true,
            compress: true,
            historyApiFallback: true,
            contentBase: path.resolve('./'),
            publicPath: '/linqjs/dist/'
        };
        let server = new Server(compiler, serverOptions);
        server.listen(serverOptions.port, serverOptions.host, function(error) {
            if(error) console.error(error);
            else console.log('Server will start at ' + serverOptions.host + ':' + serverOptions.port);
        });
    }
};

const dll = (module, callback) => {
    let moduleName = module.replace(/[-.]/g, '_');
    webpack({
        devtool: 'source-map',
        entry: {
            [module]: [ module ]
        },
        output: {
            path: path.resolve('./dist'),
            filename: '[name].js',
            library: moduleName
        },
        node: {
            global: false
        },
        plugins: [
            new webpack.DllPlugin({
                path: path.join(__dirname, 'dist', '[name]-manifest.json'),
                name: moduleName
            }),
            new webpack.optimize.UglifyJsPlugin(uglifyOptions)
        ]
    }, (error, stats) => {
        process.stdout.write(stats.toString(statsOptions) + "\n");
        if(error) {
            console.error(error);
        } else {
            callback && callback();
        }
    });
};

const install = (packageName, options) => {
    let module = options.destination || packageName;
    if (!ignoreSkip && options.overwrite !== true && fs.existsSync(path.join(__dirname, 'node_modules', module)) && fs.existsSync(path.join(__dirname, 'dist', module + '.js'))) {
        console.log(`Package ${ module } already exists, skipping`);
    } else {
        packages.set(packageName, options);
    }
};

for (let version of common.versions) {
    if (version.endsWith('.pre')) {
        install('wm123450405/linqjs', { overwrite: pack || reload, destination: common.module(version) });
    } else {
        install('linq-js@' + version, { destination: common.module(version) });
    }
}

if (packages.size === 0) {
    doPack();
} else {
    let tasks = [];
    for (let [ packageName, options ] of packages) {
        tasks.push({ packageName, options });
    }
    for (let { packageName, options } of tasks) {
        niv.install(packageName, options);
        dll(options.destination || packageName, () => {
            packages.delete(packageName);
            if (packages.size === 0) {
                process.nextTick(() => doPack());
            }
        });
    }
}
