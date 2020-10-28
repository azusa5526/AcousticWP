const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/main.js",
    products: './src/products.js',
    singleProduct: './src/singleProduct.js',
    news: './src/news.js',
    appointment: './src/appointment.js',
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[hash].js",
  },
  resolve: {
    modules: ["node_modules"],
    alias: {
      "@img": path.resolve(__dirname, "src/img"),
    },
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                outputStyle: "expanded",
              },
            },
          },
        ],
      },

      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
        ],
      },

      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: 'img/[name].[ext]',
            },
          },
        ],
      },

      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
    }),

    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["main"], // 僅添加名為 main 的 chunk
    }),
    new HtmlWebpackPlugin({
      template: './src/products.html',
      filename: 'products.html',
      chunks: ["products"], 
    }),
    new HtmlWebpackPlugin({
      template: './src/singleProduct.html',
      filename: 'singleProduct.html',
      chunks: ["singleProduct"], 
    }),
    new HtmlWebpackPlugin({
      template: './src/news.html',
      filename: 'news.html',
      chunks: ["news"], 
    }),
    new HtmlWebpackPlugin({
      template: './src/appointment.html',
      filename: 'appointment.html',
      chunks: ["appointment"], 
    }),
  ],
};
