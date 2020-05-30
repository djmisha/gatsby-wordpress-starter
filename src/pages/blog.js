import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

export default function Blog({ data }) {
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div>
          <h2>
            <Link>{node.title}</Link>
          </h2>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          <a href={node.slug}>Read More</a>
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`
