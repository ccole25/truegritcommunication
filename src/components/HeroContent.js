/* @flow */
import React, { Component, PropTypes } from "react";
import { Row, Col, Modal, Glyphicon } from "components/react-bootstrap-subset";
import Radium from "radium";

import heroImg from "assets/img/turbine5.jpg";
// import breakpoints from "lib/breakpoints.js";

export class HeroContent extends Component {
  static propTypes = {
    headerHeight: PropTypes.number,
    footerHeight: PropTypes.number
  }

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({
      showModal: true
    });
  }

  hideModal() {
    this.setState({
      showModal: false
    });
  }

  renderModal() {
    return (
      <Modal show={this.state.showModal} onHide={this.hideModal} onClose={this.hideModal} keyboard>
      <Modal.Header onClose={this.hideModal} closeButton>
        Header
      </Modal.Header>
          Unicorns
      </Modal>
    );
  }

  renderLinks() {
    const sections = [
      {href: "1", title: "Products"},
      {href: "2", title: "Licenses"},
      {href: "3s", title: "Saftey"},
    ];

    return sections.map((section, i) => {
      const { title } = section;
      return (
        <Col key={i} xs={12} sm={4} style={styles.sharedCol}>
          <div key={i} style={styles.anchor} onClick={this.showModal}>{title}</div>
        </Col>
      );
    });
  }

  render () {
    const { headerHeight, footerHeight } = this.props;

    const dynamicStyles = {
      top: headerHeight,
      bottom: footerHeight
    };

    return (
      <div className="heroContent" style={ [dynamicStyles, styles.wrapper] }>
      { this.renderModal() }
        <Row>
          <Col xs={12} style={styles.imgCol}></Col>
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
    backgroundPosition: "center 80%"
  },
  text: {
    textAlign: "center",
    fontSize: "325%",
    color: "#fff",
    margin: "150px 0 25px",
    textShadow: "0 0 10px #3d3d3d"
  },
  hr: {
    width: "75%",
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
  anchor: {
    height: "100%",
    display: "table-cell",
    margin: 0,
    verticalAlign: "middle",
    background: "#fff",
    color: "black",
    fontSize: 24,
    ":hover": {
      opacity: 5,
      color: "orange"
    }
  }
};
