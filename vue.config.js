// vue.config.js
module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    lintOnSave: true,
    chainWebpack: () => {},
    configureWebpack: () => {},
    css:{
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