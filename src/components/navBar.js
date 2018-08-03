import React from 'react';
import Link from 'gatsby-link';
import WhiteLogo from '../../assets/images/rw-logo-white.png';
import Bars from '../../assets/images/bars.svg';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navClass: 'normal' };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }


  componentDidMount() {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 515 && this.state.navClass === 'dropdown') {
        this.setState({'navClass':'normal'});
      }
    });
  }

  toggleDropdown() {
    if (this.state.navClass === 'dropdown') {
      this.setState({'navClass':'normal'});
    } else {
      this.setState({'navClass':'dropdown'});
    }
  }

  render() {
    return (
      <div className={`nav-bar color-${this.props.background}`}>
        <img className="white-logo" src={WhiteLogo} />
        <div className={this.state.navClass}>
          <Link to="/">About</Link>
          <Link to="/coding">Coding</Link>
          <Link to="/writing/">Writing</Link>
          <Link to="/biochemistry/">Biochemistry</Link>
          <Link to="/blog/">Blog</Link>
        </div>
        <button className="bars" onClick={this.toggleDropdown}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>
        </button>
      </div>
    );
  }
}

export default NavBar;
