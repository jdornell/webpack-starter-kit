module.exports = {
    entry: [__dirname + "/src/js/app.js"], //name of file(s) that should be included in the build
    output: {
        path: './content',
        filename: "./tools/bundle.js" //the name of the file that Webpack should create
    },
    module: {
        loaders: [
              {
                test: /\.es6$/, //what kind of files should run through the loader (all files with .es6 extension)
                    exclude: /node_modules/, //which files should be ignored
                    loader: ‘babel-loader’, //the name of the loader
                    query: { //loader options
                        cacheDirectory: true,
                        presets: [‘react’, ‘es2015’] //use react and es2015 presets
                    }
              }
        ]
     },
     resolve: {
         extensions: ['', '.js', '.es6'] //specify what kind of files that can be processed without giving them a file extension
     },
}
