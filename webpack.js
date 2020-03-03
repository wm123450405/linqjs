const webpack = require('webpack');
const Server = require('webpack-dev-server');
const path = require('path');
const fs = require('fs');
const os = require('os');
const extend = require('extend');
const niv = require('npm-install-version');

require('./pack');
const common = require('./src/scripts/common');

const libs = path.join(__dirname, 'libs');
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
    parallel: {
        cache: true,
        workers: os.cpus() - 1
    },
    compress: {
        warnings: false
    }
};
const serverOptions = {
    host: '0.0.0.0',
    port: 8040,
    inline: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    contentBase: path.resolve('./'),
    publicPath: '/linqjs/dist/',
    stats: statsOptions
};

const doPack = () => {
    let callback = () => { };
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
                'vue-router': 'vue-router/dist/vue-router.common',
                'linq-js': common.module(common.lastest)
            }
        },
        devServer: {
            inline: true,
            hot: true,
            historyApiFallback: true,
            contentBase: path.resolve('./')
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
            new webpack.NormalModuleReplacementPlugin(
                /^linq-js-/, resource => resource.request = resource.request.replace(/^linq-js-(.+)$/, 'linq-js-$1/dist/linq.min')
            ),
            new webpack.ProgressPlugin({ })
        ].concat(
            pack ?
                [
                    new webpack.optimize.UglifyJsPlugin(extend({ exclude: /linq-js-/ }, uglifyOptions))
                ]
                :
                [
                    new webpack.NamedModulesPlugin()
                ]
        )
    }, (error, stats) => {
        process.stdout.write(stats.toString(statsOptions) + "\n");
        if (error) {
            console.error(error);
        } else {
            callback && callback();
        }
    });
    if (!pack) {
        let server = new Server(compiler, serverOptions);
        callback = () => {
            server.listen(serverOptions.port, serverOptions.host, function(error) {
                if(error) console.error(error);
                else console.log('Server is start at ' + serverOptions.host + ':' + serverOptions.port);
            });
        };
    }
};

const install = (packageName, options) => {
    let module = options.destination || packageName;
    if (ignoreSkip) options.overwrite = true;
    if (options.overwrite !== true && fs.existsSync(path.join(__dirname, 'node_modules', module)) && fs.existsSync(path.join(__dirname, 'dlls', module + '.js'))) {
        console.log(`Package ${ module } already exists, skipping`);
    } else {
        niv.install(packageName, options);
    }
    fs.writeFileSync(path.join(libs, `${ module }.js`), fs.readFileSync(path.join(__dirname, 'node_modules', module, 'dist', 'linq.js')));
    fs.writeFileSync(path.join(libs, `${ module }.min.js`), fs.readFileSync(path.join(__dirname, 'node_modules', module, 'dist', 'linq.min.js')));
    fs.writeFileSync(path.join(libs, `${ module }.js.map`), fs.readFileSync(path.join(__dirname, 'node_modules', module, 'dist', 'linq.js.map')));
    fs.writeFileSync(path.join(libs, `${ module }.min.js.map`), fs.readFileSync(path.join(__dirname, 'node_modules', module, 'dist', 'linq.min.js.map')));
};

for (let version of common.versions) {
    console.log('Installing linq-js@' + version);
    if (version.endsWith('.pre')) {
        install('git+https://gitee.com/wm123450405/linqjs#master', { overwrite: pack || reload, destination: common.module(version) });
    } else {
        install('linq-js@' + version, { destination: common.module(version) });
    }
}
(() => {
    let module = common.module(common.lastest);
    fs.writeFileSync(path.join(libs, `linq-js.js`), fs.readFileSync(path.join(__dirname, 'node_modules', module, 'dist', 'linq.js')));
    fs.writeFileSync(path.join(libs, `linq-js.min.js`), fs.readFileSync(path.join(__dirname, 'node_modules', module, 'dist', 'linq.min.js')));
    fs.writeFileSync(path.join(libs, `linq-js.js.map`), fs.readFileSync(path.join(__dirname, 'node_modules', module, 'dist', 'linq.js.map')));
    fs.writeFileSync(path.join(libs, `linq-js.min.js.map`), fs.readFileSync(path.join(__dirname, 'node_modules', module, 'dist', 'linq.min.js.map')));
})();

doPack();