import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const NavigationMain = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressMenusMenusItems(filter: { name: { eq: "Main Navigation" } }) {
        edges {
          node {
            slug
            items {
              url
              title
            }
          }
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default NavigationMain
