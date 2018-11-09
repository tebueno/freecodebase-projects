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
        }]
    }
};