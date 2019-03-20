import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="about" />
    <h1>About</h1>
    <p>You can learn more about me by following me on <a href="https://twitter.com/abijsummers">twitter</a> </p>
    <Link to="/">Home</Link>
  </Layout>
)

export default SecondPage
