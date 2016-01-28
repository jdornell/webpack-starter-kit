module.exports = {
  entry: "./app.js",
  output: {
    filename: "bundle.js"
},
module: {
   loaders: [
      {
         test: /\.js$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
         query: {
            cacheDirectory: true,
            presets: ['react', 'es2015']
         }
      }
   ]
},
watch: true
}
