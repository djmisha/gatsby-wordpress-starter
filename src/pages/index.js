import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Web Design" />
    <div className="home-hero">
      <h1>Web Design and Development</h1>
      <p>Performant websites using the jamstack.</p>
      <button>Learn More</button>
    </div>
    <div className="home-about"></div>
    <div className="home-services"></div>
    <div className="home-testimonials"></div>
  </Layout>
)

export default IndexPage
