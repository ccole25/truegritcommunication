/* @flow */
import React, { Component } from "react";
// import Measure from "react-measure";
import "assets/css/main.scss";

import Header from "components/Header";
import HeroContent from "components/HeroContent";
import Footer from "components/Footer";

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
    // const { header, footer } = this.state;

    return (
      <div className="home" style={styles.wrapper}>
        <Header />
        <HeroContent />
        <Footer />
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
//       <Footer />
//     </Measure>
//   </div>
// );
