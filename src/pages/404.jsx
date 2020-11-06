import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <div className="pt-20 pb-16 md:pt-40 md:pb-24">
      <h1 className="text-6xl">404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
      <Link
        to="/"
        className="inline-block my-4 bg-transparent hover:bg-teal-500 text-teal-600 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded"
      >
        Take me back home ...
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
