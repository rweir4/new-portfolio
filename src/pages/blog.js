import React from 'react';
import Link from 'gatsby-link';
import NavBar from '../components/navBar';
import Footer from '../components/footer';
import Arrow from '../../assets/images/angle-right.svg';
import profile from '../../assets/images/profile.jpg';
import logo from '../../assets/images/rw-logo.png';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBarClass: 'sidebar-hide'
    };

    this.toggleSideBar = this.toggleSideBar.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 515 && this.state.sideBarClass === 'sidebar-show') {
        this.setState({'sideBarClass':'sidebar-hide'});
      }
    });
  }

  toggleSideBar() {
    if (this.state.sideBarClass === 'sidebar-hide') {
      this.setState({
        sideBarClass: 'sidebar-show',

      });
    } else {
      this.setState({
        sideBarClass: 'sidebar-hide',

      });
    }
  }

  render() {
    const { data } = this.props;

    return (
      <div id="blog">
        <NavBar background="dark"/>
        <h1><img src={logo} />Blog</h1>
        <div id="blog-container">
          <div id="blog-index">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div className="article" key={node.id}>
                <h3 className="article-title">
                  {node.frontmatter.title}{" "}
                  <p>{node.frontmatter.date}</p>
                </h3>
                <p>{node.excerpt}</p>
              </div>
            ))}
          </div>
          <div id="sidebar">
            <img src={profile} />
            <p>RW Blog is written by Rebecca Weir: coder, scientist, writer.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

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
