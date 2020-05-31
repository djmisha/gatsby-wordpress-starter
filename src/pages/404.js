import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/utils/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404 PAGE NOT FOUND</h1>
    <p>Sorry, this page does not exist...</p>
    <Link to="/">Go to Homepage</Link>
  </Layout>
)

export default NotFoundPage
