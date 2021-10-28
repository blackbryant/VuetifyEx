var path = require('path');
var webpack = require('webpack');
var fs = require('fs');

var appBasePath = './ClinetApp/'; // where the source files located
var publicPath = '../bundle/'; // public path to modify asset urls. eg: '../bundle' => 'www.example.com/bundle/main.js'
var bundleExportPath = './wwwroot/bundle/'; // directory to export build files

var jsEntries = {}; // listing to compile

// We search for js files inside basePath folder and make those as entries
fs.readdirSync(appBasePath).forEach(function (name) {

    // assumption: modules are located in separate directory and each module component is imported to index.js of particular module
    var indexFile = appBasePath + name + '/index.js'
    if (fs.existsSync(indexFile)) {
        jsEntries[name] = indexFile
    }
});

//const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader');


module.exports = {
    entry: jsEntries,
    output: {
        path: path.resolve(__dirname, bundleExportPath),
        publicPath: publicPath,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.join(__dirname, appBasePath)
        }
    },
    module: {
        rules: [
            {
                //*.vue

                test: /\.vue$/,
                loader: 'vue-loader',
               
            
            },
            {
                // `*.vue` 檔案中的 `<style>` 塊以及普通的`*.css`
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [new VueLoaderPlugin()],
    mode: 'development'
    
}

 
