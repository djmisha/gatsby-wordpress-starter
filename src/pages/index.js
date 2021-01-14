import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/utils/seo"

const IndexPage = ({ data }) => {
  // console.log(data.allWordpressPage.edges[0].node)
  const page = data.allWordpressPage.edges[0].node
  return (
    <Layout>
      <SEO title={page.title} />
      <div
        className="home-content"
        dangerouslySetInnerHTML={{ __html: page.content }}
      ></div>
    </Layout>
  )
}

export const query = graphql`
  {
    allWordpressPage(filter: { slug: { eq: "about" } }) {
      edges {
        node {
          id
          title
          slug
          content
        }
      }
    }
  }
`

export default IndexPage
