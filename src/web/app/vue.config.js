const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  baseUrl: isProduction ? '/web/' : '/',
  outputDir: '../../main/webapp/dist',
  assetsDir: isProduction ? '../assets' : '.',
  devServer: {
    proxy: 'http://localhost:8080'
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/custom.scss";`
      }
    }
  } 
};