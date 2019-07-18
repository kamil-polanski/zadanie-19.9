const path = require('path');


module.exports = {
    entry: './components/script.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'build.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader"
        }, ]
    }
};