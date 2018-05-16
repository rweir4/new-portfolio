import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/header';
import NavBar from '../components/navBar';
import Footer from '../components/footer';
import TheCollective from '../components/theCollective.js';
import JQLife from '../components/jqLife.js';
import TheFloorIsLava from '../components/theFloorisLava.js';
import rwLogo from '../../assets/images/rw-logo.png';
import headshot from '../../assets/images/boo-headshot.png';
import RubyLogo from '../../assets/images/ruby-logo.png';
import RailsLogo from '../../assets/images/rails-logo.png';
import ReactLogo from '../../assets/images/react-logo.png';
import JSLogo from '../../assets/images/js-logo.png';
import JQueryLogo from '../../assets/images/jquery-logo.png';
import JBuilderLogo from '../../assets/images/jbuilder-logo.png';
import HTMLLogo from '../../assets/images/html5-canvas-logo.png';
import CSSLogo from '../../assets/images/CSS3.png';

class CodingPage extends React.Component {
  constructor(props) {
    super(props);

    let headerClass;
    let descriptionClass;
    if (window.innerWidth < 515) {
      headerClass = 'header-phone';
      descriptionClass = 'software-phone';
    } else {
      headerClass = 'header-tablet';
      descriptionClass = 'software-tablet';
    }

    this.state = {
      headerFont: headerClass,
      descriptionFont: descriptionClass,
      project: 'TheCollective'
    };

    this.handleProjectChange = this.handleProjectChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 515 && this.state.headerFont !== 'phone') {
        this.setState({
          'headerFont':'header-phone',
          'descriptionFont':'software-phone'
        });
      } else {
        this.setState({
          'headerFont':'header-tablet',
          'descriptionFont':'software-tablet'
        });
      }
    });
  }

  handleProjectChange(e) {
    this.setState({'project': e.target.value});
  }

  render() {

    let project;
    if (this.state.project === 'TheCollective') {
      project = ( <TheCollective /> );
    } else if (this.state.project === 'JQLife') {
      project = ( <JQLife /> );
    } else {
      project = ( <TheFloorIsLava /> );
    }

    return (
      <div className="software">
        <NavBar background="dark" hambuger="light"/>
        <header id="software-header">
          <Header id="software-title" className={this.state.headerFont} siteTitle="Software Developer" />
          <p id="software-description" className={this.state.descriptionFont}>
            Software development allows me to do what I love most: solve puzzles.
            Originally engendered by my research on protein catalysis and pharmaco/neutraceuticals,
            my pursuit of programming has grown into a full-blown pursuit of utilizing fluid and efficient
            code to create innovative products.
          </p>
        </header>
        <h1>Portfolio</h1>
        <div id="project-choices">
          <button className="project-btn" value="TheCollective" onClick={this.handleProjectChange}>The Collective</button>
          <button className="project-btn" value="JQLife" onClick={this.handleProjectChange}>JQLife</button>
          <button className="project-btn" value="TheFloorIsLava" onClick={this.handleProjectChange}>The Floor is Lava</button>
        </div>
        { project }
        <section id="skills">
          <h1>Skills</h1>
          <div id="skills-list">
            <div>
              <img src={RubyLogo}/><p>Ruby</p>
            </div>
            <div>
              <img src={RailsLogo}/><p>Rails</p>
            </div>
            <div>
              <img src={ReactLogo}/><p>React</p>
            </div>
            <div>
              <img src={JSLogo}/><p>Javascript</p>
            </div>
            <div>
              <img src={JQueryLogo}/><p>JQuery</p>
            </div>
            <div>
              <img src={JBuilderLogo}/><p>JBuilder</p>
            </div>
            <div>
              <img src={HTMLLogo}/><p>HTML & Canvas</p>
            </div>
            <div>
              <img src={CSSLogo}/><p>CSS3</p>
            </div>
          </div>
        </section>
        <p id="email">
          If you're interested in working with me, then shoot me an&nbsp;
          <a href="mailto:rebeccaweir12@gmail.com?">email.</a>
        </p>
        <section id="insta-container">
          <h2 className="insta-title">Check me out on Instagram</h2>
          <section id="insta">
            <a href="https://www.instagram.com/riza_hawkeyed/">
              <img src={headshot} />
              <p>riza_hawkeyed</p>
            </a>
          </section>
        </section>
        <Footer />
      </div>
    );
  }
}

export default CodingPage;
