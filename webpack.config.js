// --- Path of the aplication
const path = require('path'),  
    htmlWebpackPlugin = require('html-webpack-plugin'),
    merge = require('merge')

const PATH = {
    app : path.join(__dirname, 'src'),
    appHtml : path.join(__dirname, 'src', 'index.html'),
    build: path.join(__dirname, 'build')
}

const TARGET = process.env.npm_lifecycle_event;


const CONFIG = {
    entry : {
        app : PATH.app
    },
    output: {
        path: PATH.build,
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve : {
        extensions: ['*', '.json', '.js', '.jsx']
    },

    module : {
        rules : [
            {
                test: /\.(js|jsx)$/,
                include: PATH.app,
                use : ['babel-loader']
            },
            {
                test: /\.css$/,
                include: PATH.app,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(scss)$/,
                use: [{
                    loader: 'style-loader', // inject CSS to page
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                    loader: 'postcss-loader', // Run post css actions
                    options: {
                        plugins: function () { // post css plugins, can be exported to postcss.config.js
                            return [
                                require('precss'),
                                require('autoprefixer')
                            ];
                        }
                    }
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    devServer: { historyApiFallback: true, },
    plugins : [
        new htmlWebpackPlugin({
            template: PATH.appHtml,
            inject: true,
            filename: path.join(PATH.build, 'index.html')
        })
    ]
}


if (TARGET == 'dev')
    module.exports = merge(CONFIG, {
        watch: true,
        
    })


if (TARGET == 'build')
    module.exports = merge(CONFIG, {

    })