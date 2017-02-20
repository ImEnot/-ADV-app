var path = require('path');

module.exports = {
    entry: "./app/constructor/init.App",
    //entry: "./app/models/Product",
    output: {
        path: __dirname,
        filename: "/assets/bundle.js"
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, 'test'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};