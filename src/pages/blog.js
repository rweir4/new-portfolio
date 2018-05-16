import React from 'react';
import Link from 'gatsby-link';
import NavBar from '../components/navBar';
import Footer from '../components/footer';
import Arrow from '../../assets/images/angle-right.svg';

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
      <div id="writing">
        <NavBar />
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <h3>
                {node.frontmatter.title}{" "}
                <p>{node.frontmatter.date}</p>
              </h3>
              <p>{node.excerpt}</p>
            </div>
          ))}
        </div>
        <button onClick={this.toggleSideBar} >
          <img src={Arrow} />
        </button>
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
