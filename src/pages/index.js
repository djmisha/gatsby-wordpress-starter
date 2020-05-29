import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Web Design" />
    <h1>Web Design and Development </h1>
    <p>Performant serverless websites using the jamstack.</p>
    <Link to="/about/">About Us</Link>
  </Layout>
)

export default IndexPage
