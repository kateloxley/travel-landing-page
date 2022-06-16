const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');


console.log(path.join(__dirname,'/src','index.html'));
let mode = 'development';
if (process.env.NODE_ENV === 'production') mode = 'production';

console.log(mode);

module.exports = {
 mode: mode,
 devtool:'source-map',
 entry: './main/index.js',
 output: {
  filename: "[name].[contenthash].js",
  assetModuleFilename: 'assets/[hash][ext][query]',
  clean: true,
},
 plugins:[
  new MiniCssExtractPlugin({filename:'[name].[contenthash].css'}),
  new htmlWebpackPlugin({filename:'index.html',template:'./index.html'}),
  new CleanWebpackPlugin(),
 ],
 module:{
  rules: [
   {
     test: /\.html$/i,
     use: 'html-loader',
   },
   {
    test: /\.(sa|sc|c)ss$/i,
    use:[mode==='development'?'style-loader':MiniCssExtractPlugin.loader,
     'css-loader',
     'postcss-loader',
     'sass-loader'
     ]
   },
   {
     test: /\.(img|svg|jpg|jpeg|gif|png)$/i,
     type: 'asset/resource',
   },
   {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  },
 ]
}
}
