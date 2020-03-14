import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Aside from "../components/aside"
import PostsList from "../components/postList"

export default () => {
  return (
    <Layout>
      <SEO title="Recíclate Ya | Blog" />
      <section className="columns">
        <div className="column is-12">
          <img
            style={{ height: 300, width: `100%`, objectFit: `cover` }}
            alt="Fotografía destacada"
            src="https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
          />
        </div>
      </section>
      <section className="columns is-multiline">
        <Aside />
        <div className="column is-9">
          <h1>Blog</h1>
          <PostsList length="20" category="all" />
        </div>
      </section>
    </Layout>
  )
}
