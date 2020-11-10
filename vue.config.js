const path = require('path');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');
// vue.config.js
module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    lintOnSave: true,
    chainWebpack: () => {},
    configureWebpack: {
        // optimization: {
        //     splitChunks: false
        // },
        // entry: './src/commonComponent.js',
        // output: {
        //     filename: 'final/commonComponent.js',
        //     // path: path.resolve(__dirname, 'dist'),
        // },
        // module: {
        //     rules: [
        //         {
        //             // test: /\.(css|scss)$/,
        //             // use: [ 
        //             //     'vue-style-loader',
        //             //     'css-loader',
        //             //     {
        //             //         loader: 'sass-loader',
        //             //         // injectType: 'singletonStyleTag',
        //             //         options: {
        //             //             // data: '@import "path/to/global.scss";',
        //             //            //ss includePaths:[__dirname, 'src/assets/sass']
        //             //         },
        //             //     }
                        
        //             // ] 
        //         }
        //     ]
        // },
    },
    // chainWebpack: config =>{
    //     config.module
    //         .test(/\.(css|scss)$/)
    //         .use('vue-style-loader','css-loader','sass-loader')
    // },
    css:{
        extract: false,

        requireModuleExtension: true,
        // loader setting 
        loaderOptions: {
            scss: {
                sassOptions: {
                    includePaths: [
                        'src/assets/sass'
                    ]
                },
               // prependData: `@import "@/styles/global.scss";`

            }, // end: scss,
            
        }
    }
    
  };