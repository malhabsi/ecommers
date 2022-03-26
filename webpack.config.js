const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");



module.exports = {
 
    entry:  {
      app:'./src/index.js'
    },
    
    output: {
      path: path.join(__dirname, "/dist"),
      publicPath:'',
      filename: "main.js"
    },

    mode: "development",



    devServer: {
        static: {
          directory: path.join(__dirname, '/dist'),
        },
        compress: true,
        port: 9000, 
        open: true, 
        devMiddleware: {
            writeToDisk: true
          },

      },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                          //  minimize: true,
                        }
                    }
                ]
            },

            // {
            //     test: /\.(png|svg|jpe?g|gif)$/,
            //     use: [
            //       {
            //         loader: "file-loader", 
            //         options: {
            //           name: '[name].[ext]',
            //           outputPath: "images",
            //         }
            //       }
            //     ]
            //   },
        

            {
               test: /\.css$/,
               use: [
                   MiniCssExtractPlugin.loader,
                   "css-loader"
               ]
            },
        ]

    }, 

 

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),

        new MiniCssExtractPlugin({filename: "css/style.css"}),

        new OptimizeCSSAssetsPlugin({}),
    ],


    
};  