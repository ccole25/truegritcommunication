/* @flow */
import React, { Component, PropTypes } from "react";
import { Row, Col, Glyphicon } from "components/react-bootstrap-subset";
import Radium from "radium";

import heroImg from "assets/img/turbine5.jpg";
// import breakpoints from "lib/breakpoints.js";

export class HeroContent extends Component {
  static propTypes = {
    headerHeight: PropTypes.number,
    footerHeight: PropTypes.number
  }

  render () {
    const { headerHeight, footerHeight } = this.props;

    const dynamicStyles = {
      top: headerHeight,
      bottom: footerHeight
    };

    return (
      <div className="heroContent" style={ [dynamicStyles, styles.wrapper] }>
        <Row>
          <Col xs={12} style={styles.imgCol}>
            <h1 style={styles.h1}>True Grit Communication</h1>
            <hr style={styles.hr}/>
            <h3 style={styles.h3}><i>Fiber-Optic Solutions</i></h3>
            <div style={styles.iconWrapper}><Glyphicon glyph="chevron-down" style={styles.icon}/> </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Radium(HeroContent);

const styles = {
  imgCol: {
    height: 500,
    backgroundImage: `url(${heroImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center 80%",
    color: "#fff",
    textAlign: "center",
    paddingTop: "120px"
  },
  h1: {
    fontSize: 50
  },
  h3: {
    fontSize: 40
  },
  hr: {
    width: "65%",
    margin: "0 auto"
  },
  text: {
    textAlign: "center",
    fontSize: "325%",
    color: "#fff",
    margin: "150px 0 25px",
    textShadow: "0 0 10px #3d3d3d"
  },
  arrows: {
    textAlign: "center",
    marginTop: "14%",
    color: "#fff"
  },
  iconTop: {
    display: "inherit",
    fontSize: 25
  },
  iconBottom: {
    fontSize: 30
  },
  sharedCol: {
    display: "table",
    height: "75px",
    textAlign: "center",
    padding: 0,
    borderLeft: "1px solid #ccc"
  },
  wrapper: {
    position: "relative",
    right: 0,
    left: 0
  },
  fullHeight: {
    height: "100%"
  },
  // anchor: {
  //   height: "100%",
  //   display: "table-cell",
  //   margin: 0,
  //   verticalAlign: "middle",
  //   background: "#fff",
  //   color: "black",
  //   fontSize: 24,
  //   ":hover": {
  //     opacity: 5,
  //     color: "orange"
  //   }
  // },
  iconWrapper: {
    position: "absolute",
    bottom: 0,
    width: 60,
    height: 30,
    color: "#be4d35",
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 22,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingTop: 7,
    left: "50%",
    marginLeft: -30
  },
  icon: {
    marginLeft: 4
  }
};
