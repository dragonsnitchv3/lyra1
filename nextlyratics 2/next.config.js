const withCSS = require('@zeit/next-css')
const webpack = require('webpack')
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const path = require('path');


module.exports = withCSS({
  cssLoaderOptions: {
    url: true
  },
  
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    })
    return config
  }
})

// module.exports = {
//   distDir: "../functions/next"
// }



// const nextConfig = {
//     webpack: (config, { dev }) => {
//         config.plugins.push(
//             new webpack.EnvironmentPlugin(process.env),
//         );
        
//         config.resolve.alias['components'] = path.join(__dirname, 'components')
//         config.resolve.alias['static'] = path.join(__dirname, 'static')

//         return config;
//     },
// };

// module.exports = withPlugins([
//     [optimizedImages],
//     withCSS({
//       cssLoaderOptions: {
//         url: false
//       }
//     })
//     ],
//     nextConfig
// );