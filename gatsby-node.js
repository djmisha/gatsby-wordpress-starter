/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import queryAll from "./src/queries/queryAll"

const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(queryAll).then(result => {
    result.data.allWordpressPost.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          // This is the $slug variable
          // passed to post.js
          slug: node.slug,
        },
      })
    })
    result.data.allWordpressPage.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          // This is the $slug variable
          // passed to page.js
          slug: node.slug,
        },
      })
    })
  })
}
