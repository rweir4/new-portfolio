import React from 'react';
import Link from 'gatsby-link';
import collectiveImage from '../../assets/images/theCollective.png';

const TheCollective = () => (
  <div>
    <h2 id="project-title">The Collective</h2>
    <p className="project-description">
      I built an app, The Collective, from the backend to frontend,
      using Ruby on Rails and React and Redux, respectively. You can save items
      to collections which can be found on your profile. You can also follow others
      whose items will show in your feed and you can collect.
    </p>
    <img className="project-image" src={collectiveImage}/>
    <p className="project-description">
      I implemented paperclip and AWS for image storage and retrieval, and used JBuilder to
      format data from the backend and AJAX to send data for four react components,
      for which I updated the normalized state via thunk action creators and reducers
    </p>
    <div id="links">
      <a className="project-btn" href="http://www.mycollectivespace.com/#/signup">See Website</a>
      <a className="project-btn" href="https://github.com/rweir4/TheCollective">See Repo</a>
    </div>
  </div>
);

export default TheCollective;
