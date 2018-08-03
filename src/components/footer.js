import React from 'react';
import Link from 'gatsby-link';
import InstagramLogo from '../../assets/images/instagram-logo.png';
import GithubLogo from '../../assets/images/github-logo.png';
import LinkedInLogo from '../../assets/images/linkedin-logo.png';

const Footer = () => (
  <footer id="footer">
    <a href="https://www.instagram.com/riza_hawkeyed/">
      <img src={InstagramLogo} />
    </a>
    <a href="https://github.com/rweir4">
      <img src={GithubLogo} />
    </a>
    <a href="https://www.linkedin.com/in/rebeccalweir/">
      <img src={LinkedInLogo} />
    </a>
  </footer>
);

export default Footer;
