const webpack = require('webpack');
const Server = require('webpack-dev-server');
const path = require('path');
const fs = require('fs');
const os = require('os');
const extend = require('extend');
const niv = require('npm-install-version');
const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5');
const TerserPlugin = require("terser-webpack-plugin");

require('./pack');
const common = require('./src/scripts/common');

const babelConfig = require('./babel.config.json');

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
const terserOptions = {
    parallel: os.cpus().length - 1
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
    let compiler = webpack({
        devtool: 'source-map',
        mode: pack ? 'production' : 'development',
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
            rules: [
                {
                    test: /\.js$/,
                    use: [
                        {
                            loader: 'thread-loader',
                            options: babelConfig
                        }
                    ],
                    include: path.join(__dirname, 'src', 'scripts'),
                    exclude: [
                        path.join(__dirname, 'libs'),
                        path.join(__dirname, 'node_modules')
                    ]
                },
                {
                    test: /\.vue$/,
                    use: [
                        'vue-loader'
                    ],
                    include: [
                        path.join(__dirname, './src/pages'),
                        path.join(__dirname, 'src', 'components')
                    ]
                },
                {
                    test: /\.json$/,
                    loader: 'json5-loader',
                    include: path.join(__dirname, 'src', 'resources'),
                    exclude: path.join(__dirname, 'src', 'resources', '*', 'apis', '*'),
                    type: 'javascript/auto',
                    options: {
                        esModule: false
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        'vue-style-loader',
                        'css-loader'
                    ],
                    include: [
                        path.join(__dirname, 'src', 'styles'),
                        path.join(__dirname, 'src', 'components'),
                        path.join(__dirname, 'src', 'pages')
                    ]
                },
                {
                    test: /\.(scss|sass)$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sassOptions: {
                                    indentedSyntax: true
                                }
                            }
                        },
                    ],
                    include: [
                        path.join(__dirname, 'src', 'styles'),
                        path.join(__dirname, 'src', 'components'),
                        path.join(__dirname, 'src', 'pages')
                    ]
                },
                {
                    test: /\.(png|jpg|gif|woff|woff2|svg|eot|ttf|html)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 40960
                            }
                        }
                    ],
                    include: [ path.join(__dirname, 'src'), path.join(__dirname, 'node_modules') ]
                }
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
        optimization: {
            splitChunks: {
                minSize: 128000,
            },
            minimize: pack,
            minimizer: [
                new TerserPlugin(
                    extend({ exclude: /linq-js-/ }, terserOptions)
                )
            ],
        },
        plugins: [
            new webpack.ProvidePlugin({
                Enumerable: 'linq-js',
                Vue: 'vue',
                VueRouter: 'vue-router'
            }),
            new webpack.NormalModuleReplacementPlugin(
                /^linq-js-/, resource => resource.request = resource.request.replace(/^linq-js-(.+)$/, 'linq-js-$1/dist/linq.min')
            ),
            new webpack.ProgressPlugin({ }),
            new VueLoaderPlugin(),
            new webpack.SourceMapDevToolPlugin({
                exclude: /linq-js-/
            })
        ]
    });
    if (!pack) {
        let server = new Server(compiler, serverOptions);
        server.listen(serverOptions.port, serverOptions.host, function(error) {
            if(error) console.error(error);
            else console.log('Server is start at ' + serverOptions.host + ':' + serverOptions.port);
        });
    } else {
        compiler.run((error, stats) => {
            if (stats) {
                process.stdout.write(stats.toString(statsOptions) + "\n");
            }
            if (error) {
                console.error(error);
            }
        });
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