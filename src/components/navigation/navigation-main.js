import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const NavigationMain = ({}) => {
  const data = useStaticQuery(graphql`
    {
      allWordpressMenusMenusItems(filter: { name: { eq: "Main Navigation" } }) {
        edges {
          node {
            slug
            items {
              title
              url
              slug
            }
          }
        }
      }
    }
  `)
  console.log(data.allWordpressMenusMenusItems.edges[0].node.items[0])
  const menuItems = data.allWordpressMenusMenusItems.edges[0].node.items
  console.log(menuItems[0].url)
  return (
    <nav className="menu">
      <ul className="nav flex-column">
        {data &&
          data.allWordpressMenusMenusItems &&
          data.allWordpressMenusMenusItems.edges &&
          data.allWordpressMenusMenusItems.edges[0] &&
          data.allWordpressMenusMenusItems.edges[0].node &&
          data.allWordpressMenusMenusItems.edges[0].node.items &&
          data.allWordpressMenusMenusItems.edges[0].node.items.map(prop => {
            return (
              <li className="nav-item" key={prop.title}>
                <a className="nav-link active" href={prop.url} alt={prop.title}>
                  {prop.title}
                </a>
                <div className="sub-menu">
                  {prop &&
                    prop.wordpress_children &&
                    prop.wordpress_children.map(child => {
                      console.log("child ", child)
                      return (
                        <a
                          className="dropdown-item"
                          href={child.url}
                          alt={child.title}
                        >
                          {child.title}
                        </a>
                      )
                    })}
                </div>
              </li>
            )
          })}
      </ul>
    </nav>
  )
}

export default NavigationMain
