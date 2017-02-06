/* @flow */
import React, { Component } from "react";
// import Measure from "react-measure";
import "assets/css/main.scss";

import Header from "components/Header";
import HeroContent from "components/HeroContent";
import InfoSection from "components/InfoSection";

export default class Home extends Component {
  state = {
    header: {
      height: -1
    },
    footer: {
      height: -1
    }
  }

  render () {
    const sections = [
      {iconName: "book", title: "Our Philosphy", description: "Our Philosophy is in our name. We expect these qualities in each and every one of our employees throughout our Company to include Honesty, Integrity, Toughness, Determination, Resolve, Patience, Perserverance, Honor, Valor, Resourcefulness, & the ability to adapt to all circumstances. When we arrive to your job site and the surrounding community, we exemplify respect, show respect, & give respect to all above & beyond as Veterans & Citizens of the United States can and should do. To Our Customers, we will provide a 100% working system on time with a 2-year guarantee."},
      {iconName: "list-alt", title: "Specializing In", description: "Specializing In: Safe Work Practices, Fiber-Optic Splicing, Connections & Terminations, Outside Plant & Inside Plant, CAT-5/6 Installations & Terminations, Rack & Electronic Equipment Installations, Training & Education, FTTH Splicing & Terminations, Specialized Fiber-Optic Testing, Excellent Service & Problem Solving, Turbines, MET Towers, Sub-Stations & O&M Facilities & Office."},
      {iconName: "home", title: "About Us", description: "Since 1985, True Grit Communication''s President, Roger High, has been working for the world''s largest telephone fiber-optic communication companies.  The last 6 years, he has subcontracted to smaller independent telephone companies, FTTH companies, and Wind Turbine Farms. During these experiences, Roger found that the quality of workmanship with many subcontractors lacks quality. Roger has developed a high standard of service with the desire to apply & teach young apprentices his trade so the customer will receive an outperforming product that will last more than 25 years without expensive repair costs. Back to the American way of products that last!"}
    ];

    return (
      <div className="home" style={styles.wrapper}>
        <Header />
        <HeroContent />
        <InfoSection sections={sections}/>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    height: "100vh",
  }
};

// return (
//   <div className="home" style={styles.wrapper}>
//     <Measure
//       onMeasure={(header) => {
//         this.setState({header});
//       }}
//     >
//       <Header />
//     </Measure>
//
//     <HeroContent headerHeight={header.height} footerHeight={footer.height}/>
//
//     <Measure
//       onMeasure={(footer) => {
//         this.setState({footer});
//       }}
//     >
//       <InfoSection />
//     </Measure>
//   </div>
// );
