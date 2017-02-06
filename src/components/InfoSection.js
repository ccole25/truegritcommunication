/* @flow */
import React, { Component, PropTypes } from "react";
import Radium from "radium";
import { Row, Col, Glyphicon } from "components/react-bootstrap-subset";

// import breakpoints from "../lib/breakpoints";

export class InfoSection extends Component {
  static propTypes = {
    sections: PropTypes.array
  }

  renderSections() {
    const { sections } = this.props;

    return sections.map((section, i) => {
      const { iconName, title, description } = section;
      const isOdd = i % 2;
      const dynamicCircleStyles = isOdd ? styles.oddCircle : styles.evenCircle;
      const dynamicSectionStyles = isOdd ? styles.oddSection : styles.evenSection;

      return (
        <div key={i} style={[styles.sectionWrapper, dynamicSectionStyles]}>
          <Row className="justify-center">
            <Col xs={12} sm={5}>
              <div style={[styles.circle, dynamicCircleStyles]}>
                <Glyphicon glyph={iconName} style={styles.icon}/>
              </div>
            </Col>
            <Col xs={12} sm={6}>
                <h2>{title}</h2>
                <p>
                  {description}
                </p>
            </Col>
            <Col></Col>
          </Row>
        </div>
      );
    });
  }

  render () {
    return (
      <div>{ this.renderSections() }</div>
    );
  }
}

export default Radium(InfoSection);

const styles = {
  sectionWrapper: {
    padding: "100px 20px",
    textAlign: "left"
  },
  icon: {
    fontSize: 130,
    margin: "82px 0px 0px -9px"
  },
  circle: {
    borderRadius: 150,
    height: 300,
    width: 300,
    margin: "0 auto",
    textAlign: "center",
  },
  evenCircle: {
    border: "7px solid #be4d35",
    color: "#be4d35"
  },
  oddCircle: {
    border: "7px solid #fff",
  },
  evenSection: {
    backgroundColor: "#fff"
  },
  oddSection: {
    backgroundColor: "#be4d35",
    color: "#fff"
  }
};
