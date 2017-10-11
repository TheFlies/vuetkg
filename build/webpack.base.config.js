let path = require("path")
var utils = require('./utils')
let webpack = require("webpack")
var vueLoaderConfig = require('./vue-loader.conf')
var config = require('../config_old')
var vueLoader = require('vue-loader')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
	devtool: "#inline-source-map",

	entry: {
		app: ["./src/main.js"],
		vendor: [
			"es6-promise",
			"vue",
			"vue-router",
			// "vuex",
			"lodash",
			"moment",
			"jquery",
			"axios",
			// "toastr",
			// "vue-form-generator",
			// "vue-websocket",
			// "apollo-client",
			// "graphql-tag",
			"i18next"
		],
		frontend: ["./src/frontend/main.js"]
	},

	output: {
		path: resolve(__dirname, "..", "server", "public", "tkg"),
		publicPath: "/tkg/",
		filename: "[name].js",
		chunkFilename: "[chunkhash].js"
	},

	module: {
		noParse: /es6-promise\.js$/, // avoid webpack shimming process
		rules: [
			{
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
			{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
			// {
			// 	test: /\.css$/,
			// 	loaders: ["style-loader", "css-loader"]
			// },
			// ES6/7 syntax and JSX transpiling out of the box
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: [/node_modules/, /vendor/]
			},
			{
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
		]
	},

	resolve: {
		extensions: [".vue", ".js", ".json"],
		mainFiles: ["index"],
		alias: {
			"images": path.resolve(__dirname, "..", "src", "assets", "img"),
			'vue$': 'vue/dist/vue.esm.js',
			'@': path.resolve(__dirname, "..", "src"),
		}
	},

	performance: {
		hints: false
	},

	plugins: [
	]
}