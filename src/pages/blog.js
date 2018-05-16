import React from 'react';
import Link from 'gatsby-link';
import NavBar from '../components/navBar';

const BlogPage = ({ data }) => (
  <div id="writing">
    <NavBar />
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <h3>
          {node.frontmatter.title}{" "}
          <p>— {node.frontmatter.date}</p>
        </h3>
        <p>{node.excerpt}</p>
      </div>
    ))}
  </div>
)

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          excerpt
        }
      }
    }
  }
`;


export default BlogPage;
