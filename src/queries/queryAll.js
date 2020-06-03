"use strict"

module.exports = `
{
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          content
          slug
        }
      }
    }
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
    site {
        siteMetadata {
          title
          description
          phone
          locationaddress
          locationcity
        }
    }
  }
`
