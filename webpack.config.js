const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: {
    script: "./src/js/script.js", // Your JavaScript entry point
    style: "./src/css/style.css", // Your CSS entry point
  },
  output: {
    filename: "[name].min.js", // Outputs script.min.js for JS files
    path: path.resolve(__dirname, "dist"),
    clean: true, // Clean the output directory before emit
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src/css"),
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into a separate file
          "css-loader", // Resolves CSS imports
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      "...", // Default minimizers for JS
      new CssMinimizerPlugin(), // Minify CSS
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].min.css", // Outputs style.min.css for CSS files
    }),
  ],
};
