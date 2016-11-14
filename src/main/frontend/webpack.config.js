var webpack = require('webpack');
var VendorChunkPlugin = require('webpack-vendor-chunk-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
    entry: {
        "app": "./app/app.js",
        "common": [
        	"angular",
		    "angular-ui-bootstrap",
		    "angular-ui-router",
		    "animate.css/animate.min.css",
		    "bootstrap",
		    "bootstrap/dist/css/bootstrap.min.css",
		    "chance",
		    "jquery"
        ]
    },
    output: {
        filename: 'resources/build/[name].bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common','resources/build/common.bundle.js'),
        new VendorChunkPlugin('common'),
        new ExtractTextPlugin("bundle.css")
    ],
    devtool: "source-map",
    module: {
	    loaders: [
		    { //Babel
		      test: /\.js$/,
		      exclude: /(node_modules|bower_components)/,
		      loader: 'babel', // 'babel-loader' is also a valid name to reference
		      query: {
		        presets: ['es2015']
		      }
		    },
	     	{ //Use the ngtemplate loader for all html files
	  			test: /\.html$/,
	  			loader: 'ngtemplate!html'
			},
			{ //Lets us load css
				test: /\.css$/, loader: "style-loader!css-loader" 
			},
	      	{ //If we want to use sass
		        test: /\.scss$/,
		        loaders: ["style", "css", "sass"]
		    },
			{ //Fonts
                test: /\.(eot|svg|ttf|woff|woff2)(\?v=.\..\..)?$/,
                loader: 'file?name=resources/build/fonts/[name].[ext]'
            }
	    ]
    }
}