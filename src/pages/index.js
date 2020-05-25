import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="main-container">
        <div className="bg-1">test one</div>
        <div className="bg-2">test two</div>
        <div className="bg-1">test three</div>
        <div className="bg-2">test four</div>
        <div className="bg-1">test three</div>
        <div className="bg-2">test four</div>

    </div>

  </Layout>
)

export default IndexPage
