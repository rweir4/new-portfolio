import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/header';
import NavBar from '../components/navBar';
import Footer from '../components/footer';
import headshot from '../../assets/images/boo-headshot.png';
import UTKLogo from '../../assets/images/tennessee-logo.png';
import ORNLLogo from '../../assets/images/ornl-logo.png';
import MicrobioPoster from '../../assets/images/microbio-poster.png';


class BiochemistryPage extends React.Component {
  constructor(props) {
    super(props);

    let headerClass;
    let descriptionClass;
    headerClass = 'header-tablet';
    descriptionClass = 'software-tablet';

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

    return (
      <div className="software">
        <NavBar background="dark" hambuger="light"/>
        <header id="software-header">
          <Header id="software-title" className={this.state.headerFont} siteTitle="Computational Biology Researcher" />
          <p id="software-description" className={this.state.descriptionFont}>
            I love exploring the world from a molecular viewpoint, and as such, from a physics viewpoint.
            I spent a year in a microbiology laboratory, then some time in engineering, but later found my home in research in a
            Computational Biology / Molecular Biophysics Laboratory. There, I spent two to three years modeling
            proteins and simulating their interactions with pharmaceutical and neutraceutical products.
          </p>
        </header>
        <section id="publications">
          <h1>Publications</h1>
          <h3>
            The quinic acid derivative KZ-41 prevents glucose-induced caspase-3 activation in retinal endothelial cells through
            an IGF-1 receptor dependent mechanism
          </h3>
          <p className="journal">Plos One</p>
          <p>Abstract:</p>
          <p>
            Retinal microaneurysms, an early disease manifestation of diabetic retinopathy, are associated with retinal endothelial cell (REC) death and macular edema. We previously demonstrated that a quinic acid (QA) analog, KZ-41, promoted REC survival by blunting stress-induced p38 MAPK activation. Herein, we sought to expand our understanding of the pro-survival signal transduction pathways actuated by KZ-41. Using human RECs exposed to high glucose (25 mM, 72 hours), we demonstrated that KZ-41 blocks caspase-3 activation by triggering phosphorylation of the PI3K regulatory subunit (p85; Tyr458) and its downstream target Akt (Ser473). Akt signal transduction was accompanied by autophosphorylation of the receptor tyrosine kinase, insulin growth factor-1 receptor (IGF-1R). IGF-1R knockdown using either the tyrosine kinase inhibitor AG1024 or silencing RNA abolished KZ-41’s pro-survival effect. Under high glucose stress, caspase-3 activation correlated with elevated ERK1/2 phosphorylation and decreased insulin receptor substrate-1 (IRS-1) levels. KZ-41 decreased ERK1/2 phosphorylation and reversed the glucose-dependent reduction in IRS-1. To gain insight into the mechanistic basis for IGF-1R activation by KZ-41, we used molecular modeling and docking simulations to explore a possible protein:ligand interaction between the IGF-1R kinase domain and KZ-41. Computational investigations suggest two possible KZ-41 binding sites within the kinase domain: a region with high homology to the insulin receptor contains one potential allosteric binding site, and another potential site on the other side of the kinase domain, near the hinge domain. These data, together with previous proof-of-concept efficacy studies demonstrating KZ-41 mitigates pathologic retinal neovascularization in the murine oxygen-induced retinopathy model, suggests that QA derivatives may offer therapeutic benefit in ischemic retinopathies.
          </p>
          <a href="http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0180808">See Publication</a>
          <h3>
            Ensemble-based docking: From hit discovery to metabolism and toxicity predictions
          </h3>
          <p className="journal">Bioorganic and Medicinal Chemistry</p>
          <p>Abstract:</p>
          <p>
            This paper describes and illustrates the use of ensemble-based docking, i.e., using a collection of protein structures in docking calculations for hit discovery, the exploration of biochemical pathways and toxicity prediction of drug candidates. We describe the computational engineering work necessary to enable large ensemble docking campaigns on supercomputers. We show examples where ensemble-based docking has significantly increased the number and the diversity of validated drug candidates. Finally, we illustrate how ensemble-based docking can be extended beyond hit discovery and toward providing a structural basis for the prediction of metabolism and off-target binding relevant to pre-clinical and clinical trials.
          </p>
          <a href="https://www.sciencedirect.com/science/article/pii/S0968089616305879?via%3Dihub">See Publication</a>
        </section>
        <section id="experience">
          <h1>Research Experience</h1>
          <h3>ORNL/UTK</h3>
          <p>
            Spent two to three years doing research in with the Baudry Lab for computation biology at UTK in conjuction
            with his lab (part of a larger group at ORNL) in the Molecular Biophysics Department.
          </p>
          <p>
            My first project, during my internship with ORNL/ORAU, was to research the
            prevention of drug toxicity via an in silico process in the Baudry laboratory
            in the Molecular Biophysics department. The project was supervised by Dr. Wilfredo Evangelista
            and Dr. Jerome Baudry, and was published in Bioorganic and Medicinal Chemistry.
          </p>
          <p>
            My second project was working in conjuction with UTK Memphis, with Dr. Ryan Yates,
            on the quinic acid derivative KZ-41 and its interactions with IGF-1R, which I also modeled. The results were published
           in Plos One.
          </p>
          <h3>UTK Microbiology</h3>
          <p>
            I spent a year working with Dr. Morgan Wurch in Dr. Steven Wilhelm's Laboratory at the University of
            Tennessee. We researched the effects of urea on the growth of Microsystis Aerugenosa NIES 843 in different
            lakes around the world.
          </p>
          <Link to="/poster"><img src={MicrobioPoster} /></Link>
        </section>
        <section id="education">
          <h1>Education</h1>
          <img src={UTKLogo}/>
          <h3>Bachelors of Science, Biochemistry and Cellular and Molecular Biology</h3>
          <h4>Class of 2016</h4>
        </section>
        <p id="email">
          If you're interested in hiring me, take a look at my&nbsp;<Link to="/resume"> resume</Link>&nbsp;and shoot me an&nbsp;
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

export default BiochemistryPage;
