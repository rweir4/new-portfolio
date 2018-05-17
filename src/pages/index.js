import Link from 'gatsby-link';
import Header from '../components/header';
import NavBar from '../components/navBar';
import Footer from '../components/footer';
import rwLogo from '../../assets/images/rw-logo.png';
import flasks from '../../assets/images/flasks.png';
import coding from '../../assets/images/coding (1).png';
import writer from '../../assets/images/writer.png';
import headshot from '../../assets/images/boo-headshot.png';
import backgroundImg from '../../assets/images/homepage-background.png';
import React from 'react';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    let headerClass;
    let descriptionClass;
    headerClass = 'header-desktop';
    descriptionClass = 'desc-desktop';

    this.state = {
      headerFont: headerClass,
      descriptionFont: descriptionClass
    };
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 515 && this.state.headerFont !== 'phone') {
        this.setState({
          'headerFont':'header-phone',
          'descriptionFont':'desc-phone'
        });
      } else if (window.innerWidth < 880 && this.state.headerFont !== 'tablet') {
        this.setState({
          'headerFont':'header-tablet',
          'descriptionFont':'desc-tablet'
        });
      } else if (window.innerWidth >= 880 && this.state.headerFont !== 'desktop') {
        this.setState({
          'headerFont':'header-desktop',
          'descriptionFont':'desc-desktop'
        });
      }
    });
  }

  render() {
    return (
      <div className="homepage">
        <NavBar background="light" hamburger="dark"/>
        <span>
          <img id="home-background-img" src={backgroundImg} />
        </span>
        <header id="home-header">
          <img id="logo" src={rwLogo}/>
          <Header id="homepage-title" className={this.state.headerFont} siteTitle="Rebecca Weir" />
          <p id="description" className={this.state.descriptionFont}>Software Developer / Author / Biochemist</p>
        </header>
        <section id="renaissance">
          <h2>The renaissance isn't dead.</h2>
          <p>
            Let's be honest, I have more than one passion. I aspire to be a modern renaissance woman.
            Software developer by day, author by night, biochemist by trade.
          </p>
        </section>
        <section id="areas">
          <div id="area-icons">
            <div className="area-pairs">
              <img src={coding}/>
              <p>
                As a software developer, I yearn to optimize the code that provides users
                with an enjoyable web experience.
              </p>
            </div>
            <div className="area-pairs">
              <img src={writer}/>
              <p>
                As a writer developer, I hope to provide insight on life through short stories
                and novels.
              </p>
            </div>
            <div className="area-pairs">
              <img src={flasks}/>
              <p>
                As a biochemist developer, I have studied the molecular biophysics of proteins
                from a pharmaceutical/neutraceutical viewpoint.
              </p>
            </div>
          </div>
          <div className="area-descriptions">
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

export default IndexPage;
