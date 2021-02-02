const path = require('path');
const nodeExternals = require('webpack-node-externals');

const serverConfig = {
    mode: 'development',
    entry: ['regenerator-runtime/runtime', './src/server/index.ts'],
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
        extensions: [ '.ts' ]
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false
    },
    externals: [ nodeExternals() ]
};

const clientConfig = {
    mode: 'development',
    target: 'web',
    entry: [ 'babel-polyfill', './src/client/index.js' ],
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(jsx?)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.(s*)css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.ts', '.js', '.scss', '.css'],
        fallback: {
            fs: false
        }
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public/js')
    }
}

module.exports = [ serverConfig, clientConfig ];
