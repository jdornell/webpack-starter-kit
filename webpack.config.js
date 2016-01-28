module.exports = {
   entry: "./src/js/app.js",
   output: {
      filename: "bundle.js"
   },
   devServer: {
      contentBase: "./src/content"
   },
   module: {
      loaders: [
         {
            test: [/\.js$/, /\.jsx$/],
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               cacheDirectory: true,
               presets: ['react', 'es2015']
            }
         }
      ]
   },
   resolve: {
      extensions: ['', '.js', '.jsx']
   },
   watch: true
}
