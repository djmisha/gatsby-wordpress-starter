import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/utils/seo"
import { Link } from "gatsby"

export default function Blog({ data }) {
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div className="single-blog-archive" key={node.slug}>
          <Link to={node.slug}>
            <h2>{node.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            <div dangerouslySetInnerHTML={{ __html: node.date }} />
          </Link>
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
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
