const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/js/index.js',
  watch: true,
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  
  module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                {
                  // Adds CSS to the DOM by injecting a `<style>` tag
                  loader: 'style-loader'
                },
                {
                  // Interprets `@import` and `url()` like `import/require()` and will resolve them
                  loader: 'css-loader'
                },
                {
                  // Loader for webpack to process CSS with PostCSS
                  loader: 'postcss-loader',
                  options: {
                    plugins: function () {
                      return [
                        require('autoprefixer')
                      ];
                    }
                  }
                },
                {
                  // Loads a SASS/SCSS file and compiles it to CSS
                  loader: 'sass-loader'
                }
              ]
        },
        {
          test: /\.(png|jp(e*)g|svg)$/,  
          use: [{
              loader: 'url-loader',
              options: { 
                  limit: 8000, // Convert images < 8kb to base64 strings
                  name: 'images/[hash]-[name].[ext]'
              } 
          }]
        },
        {
            test: /\.(woff|woff2|ttf|otf|eot)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        outputPath: 'fonts'
                    }
                }
            ]
        }
    ]   
  },
  plugins: [
      new MiniCssExtractPlugin({
          filename: "main.css"
      })
  ]
};