module.exports = {
    // tell webpack where the root component is
    //react will always have one root component that will render all the child components
    //this way webpack knows where to start rendering the jsx
    entry: "./app/App.js",
    //this is what webpack spits out as the final bundle
    output: {
        filename: "public/bundle.js"
    },
    // this tells what to do with the .jsx files
    // we will use the babel loader
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ]
    }
};