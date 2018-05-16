import React from 'react';
import Link from 'gatsby-link';
import TFIL_game from '../../assets/images/tfil_game.png';

const TheFloorIsLava = () => (
  <div>
    <h2 id="project-title">The Floor is Lava</h2>
    <p className="project-description">
      I built an online game, The Floor is Lava. I used vanilla javascript,
      canvas, and CSS, to create a platform jumper game that listens for
      different key events and changes the rendering accordingly.
    </p>
    <img className="project-image" src={TFIL_game}/>
    <div id="links">
      <a className="project-btn" href="https://rweir4.github.io/TheFloorIsLava/">Play Game</a>
      <a className="project-btn" href="https://github.com/rweir4/TheFloorIsLava">See Repo</a>
    </div>
  </div>
);

export default TheFloorIsLava;
