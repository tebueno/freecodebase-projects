module.exports = {
    entry: './src/main.js',
    devtool: 'inline-source-map',
    output: {
        filename: "src/bundle.js"
    },
    node: {
        dns: 'mock',
        net: 'mock'
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react']
                }
            },
            {
                test: /\.css$/,
                use: ['css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    "svg-inline-loader"
                ]
            }
        ]
    }
};