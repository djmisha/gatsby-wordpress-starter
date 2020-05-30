import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Sitemap({ data }) {
  return (
    <Layout>
      <SEO title="Sitemap" />
      <h1>Sitemap</h1>
      {data.allWordpressPage.edges.map(({ node }) => (
        <div>
          <h2>{node.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          <a href={node.slug}>Read More</a>
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
