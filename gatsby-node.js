const path = require('path')
const createCats  = require(`./wp/createCats`)
const createPages = require(`./wp/createPages`)
const createPosts = require(`./wp/createPosts`)
const createTags  = require(`./wp/createTags`)
const createUsers = require(`./wp/createUsers`)

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@elements':   path.resolve(__dirname, 'src/components/elements'),
        '@modules':    path.resolve(__dirname, 'src/components/modules'),
        '@partials':   path.resolve(__dirname, 'src/components/partials'),
        '@templates':  path.resolve(__dirname, 'src/components/templates'),
        '@utils':      path.resolve(__dirname, 'src/components/utils'),
      },
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

exports.createPages = async ({ actions, graphql }) => {
  await createCats( { actions, graphql })
  await createPages({ actions, graphql })
  await createPosts({ actions, graphql })
  await createTags( { actions, graphql })
  await createUsers({ actions, graphql })
}
