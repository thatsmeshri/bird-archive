import React from "react"
import { graphql } from "gatsby"

export default function SpeciesPage({ data }) {
  const post = data.markdownRemark

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>
      <h1>{post.frontmatter.title}</h1>

      {post.frontmatter.image && (
        <img
          src={post.frontmatter.image}
          alt={post.frontmatter.title}
          style={{ width: "100%", marginBottom: "20px" }}
        />
      )}

      <p><strong>Country:</strong> {post.frontmatter.country}</p>
      <p><strong>Location:</strong> {post.frontmatter.location}</p>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        country
        location
        image
      }
    }
  }
`
