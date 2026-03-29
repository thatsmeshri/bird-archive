import React from "react"
import { graphql, Link } from "gatsby"

export default function SpeciesIndex({ data }) {
  const posts = data.allMarkdownRemark.nodes

  return (
    <div style={{ maxWidth: "1100px", margin: "auto", padding: "20px" }}>
      <h1>Bird Species</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "20px"
      }}>
        {posts.map(post => (
          <Link
            key={post.id}
            to={post.fields.slug}
            style={{
              textDecoration: "none",
              color: "black",
              border: "1px solid #ddd",
              padding: "10px"
            }}
          >
            {post.frontmatter.image && (
              <img
                src={post.frontmatter.image.publicURL}
                alt={post.frontmatter.title}
                style={{ width: "100%", marginBottom: "10px" }}
              />
            )}

            <h3>{post.frontmatter.title}</h3>
            <p>{post.frontmatter.country}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "species-page" } } }
      sort: { frontmatter: { title: ASC } }
    ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
          country
          image {
            publicURL
          }
        }
      }
    }
  }
`
