import React from 'react';
import Link from 'gatsby-link';
import GiphyGif from '../../assets/images/parksAndRecGiphyDemo.gif';

const JQLife = () => (
  <div>
    <h2 id="project-title">JQ Life</h2>
    <p className="project-description">
      I built a jQuery library using vanilla Javascript. I have implemented many
      basic features by createing DOM Node Collections and manipulating them in Javascript.
    </p>
    <img className="project-image" src={GiphyGif}/>
    <div id="links">
      <a className="project-btn" href="https://rweir4.github.io/jQueryLifeDemo/">See Website</a>
      <a className="project-btn" href="https://github.com/rweir4/JQLife">See Repo</a>
    </div>
  </div>
);

export default JQLife;
