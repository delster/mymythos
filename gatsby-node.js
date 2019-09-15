const path = require('path')

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@elements': path.resolve(__dirname, 'src/components/elements'),
        '@modules': path.resolve(__dirname, 'src/components/modules'),
        '@partials': path.resolve(__dirname, 'src/components/partials'),
        '@templates': path.resolve(__dirname, 'src/components/templates'),
        '@utils': path.resolve(__dirname, 'src/components/utils'),
      },
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

