const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');

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
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          name: 'vendors',
          priority: 20,
          enforce: true,
        },

        common: {
          chunks: 'initial',
          minSize: 0,
          name: 'common',
          minChunks: 2,
          priority: 10,
        },
      },
    },
    runtimeChunk: {
      name: 'manifest',
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
        test: /\.(png|jpe?g|gif|ico)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: 'img/[name].[ext]',
              limit: 8192,
              fallback: require.resolve('file-loader'),
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

    new CopyPlugin({
      patterns: [
        {
          from: './src/img',
          to: './img',
        },
      ],
    }),

    new PurgecssPlugin({
      paths: glob.sync(
        [
          `${path.resolve(__dirname, 'src')}/**/*`,
          path.resolve(__dirname, 'node_modules/jquery/dist/jquery.slim.js'),
          path.resolve(__dirname, 'node_modules/bootstrap/dist/js/bootstrap.bundle.js'),
        ],
        {
          nodir: true,
        }
      ),
    }),
  ],
};
