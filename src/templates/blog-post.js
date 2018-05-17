import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/header';
import NavBar from '../components/navBar';
import Footer from '../components/footer';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <NavBar background="dark"/>
      <h1 id="post-title">{post.frontmatter.title}</h1>
      <div id="post-html" dangerouslySetInnerHTML={{ __html: post.html }} />
      <Footer />
    </div>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
