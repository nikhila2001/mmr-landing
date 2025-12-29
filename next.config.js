// const path = require('path')
// // const withImages = require('next-images')
// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'src/assets/scss')],
//     eslint: {
//       // Warning: Dangerously allow production builds to successfully complete even if
//       // your project has ESLint errors.
//       ignoreDuringBuilds: true,
//     },
//   },
//   images: {
//     loader: "imgix",
//     path: "localhost",
//   }
// }
// // module.exports = withImages({
// //   webpack(config, options) {
// //     return config
// //   }
// // })


const path = require('path');

module.exports = {
  // SCSS support
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/assets/scss')],
  },

  // ESLint: don’t fail the production build on errors
  eslint: {
    ignoreDuringBuilds: true,
  },

  // For next export (static site) + images
  images: {
    // If you’re doing `next export`, this is the simplest
    unoptimized: true,
    // If later you use a real image CDN/loader, you can change this
  },
   output: 'export',
};
