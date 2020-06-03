import React from "react"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"

export default function BlogPost({ data }) {
  const post = data.allWordpressPost.edges[0].node
  return (
    <Layout>
      <div>
        <h1 className="post-title">{post.title}</h1>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div
          className="post-date"
          dangerouslySetInnerHTML={{ __html: post.date }}
        />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          title
          content
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
