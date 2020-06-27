const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = (env) => {
  console.log(env)
  const isProductiion = env === 'production'

  const CSSExtract = new ExtractTextPlugin('styles.css')

  return {
    entry:'./src/app.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js',
      publicPath : '/'
    },
    mode: 'development',
    module:{
      rules:[{
        test: /\.js$/,
        exclude:/node_modules/,
        use: ["babel-loader"]
        },
        {
          test: /\.s?css$/,
          use: ExtractTextPlugin.extract({
            use:[
              {
                loader:'css-loader',
                options:{
                  sourceMap:true
                }
              },{
                loader:'sass-loader',
                options:{
                  sourceMap:true
                }
              },
            ]
          }),
        }]
      },
      plugins:[CSSExtract],
    devtool:isProductiion? 'source-map' :'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      compress: true,
      watchContentBase: true,
      port: 9000,
      historyApiFallback: true
    }

  }
}

// module.exports = {
//     entry:'./src/app.js',
//     output: {
//       path: path.resolve(__dirname, 'public'),
//       filename: 'bundle.js',
//       publicPath : '/'
//     },
//     mode: 'development',
//     module:{
//       rules:[{
//         test: /\.js$/,
//         exclude:/node_modules/,
//         use: ["babel-loader"]
//         },
//         {
//           test: /\.s?css$/,
//           use: ['style-loader', 'css-loader','sass-loader'],

//         }]
//       },
//     devtool:'eval-cheap-module-source-map',
//     devServer: {
//       contentBase: path.join(__dirname, 'public'),
//       compress: true,
//       watchContentBase: true,
//       port: 9000,
//       historyApiFallback: true
//     }

// }

