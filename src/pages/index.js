import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Web Design" />
    <h1>Web Design and Development</h1>
    <p>Performant websites using the jamstack.</p>
    <button>Learn More</button>
    <div>
      <Link to="/blog/">Blog</Link> <Link to="/about/">About</Link>{" "}
      <Link to="/sitemap/">Sitemap</Link>
    </div>
  </Layout>
)

export default IndexPage
