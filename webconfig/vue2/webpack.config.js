
// Webpack uses this to work with directories
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {

       // Path to your entry point. From this file Webpack will begin his work
        entry: './src/main.js',

        // Path and filename of your result bundle.
        // Webpack will bundle all JavaScript into this file
        output: {
            path: path.resolve(__dirname, 'public/src/'),
            filename: 'bundle.js'
        }, 
        resolve: {
            alias: {
                'Vue': 'vue/dist/vue.esm-bundler.js',
            },
            extensions: ['*','.js', '.vue']
        },
        module: {
            rules: [{
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.(png|jpg|gif|jpe?g|svg)$/,
                    use: [
                      {
                        loader: 'file-loader',
                        options: {
                          name: '[name].[ext]',
                          publicPath: './img',
                          emitFile: false
                        }  
                      }
                    ]
                },
        
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [     {
                                // This loader resolves url() and @imports inside CSS
                                loader: "css-loader",
                            },
                           
                            {
                                // First we transform SASS to standard CSS
                                loader: "sass-loader",
                                options: {
                                implementation: require("sass")
                                }
                            }
                    ]
                }
            ],
        },
        plugins: [
            
            new VueLoaderPlugin()
        ],
        // Default mode for Webpack is production.
        // Depending on mode Webpack will apply different things
        // on final bundle. For now we don't need production's JavaScript 
        // minifying and other thing so let's set mode to development
        mode: 'development'
};
