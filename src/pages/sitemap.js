import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/utils/seo"
import { Link } from "gatsby"

export default function Sitemap({ data }) {
  return (
    <Layout>
      <SEO title="Sitemap" />
      <h1>Sitemap</h1>
      {data.allWordpressPage.edges.map(({ node }) => (
        <div>
          <Link to={node.slug}>
            <h2>{node.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </Link>
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
