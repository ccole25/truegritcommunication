/* @flow */
import React, { Component, PropTypes } from "react";
import { Row, Col, Modal } from "components/react-bootstrap-subset";
import Radium from "radium";

import sunset from "assets/img/turbineSunset.jpg";
// import breakpoints from "lib/breakpoints.js";

export class MainContent extends Component {
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

  renderInfo() {
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
      <div className="mainContent" style={ [dynamicStyles, styles.wrapper] }>
      { this.renderModal() }
        <Row style={{height: "100%", margin: 0}}>
          <Col xs={12} sm={5} style={styles.imgCol}></Col>
          <Col xs={12} sm={7} style={styles.fullHeight}>
            <Row style={styles.fullHeight}>
              { this.renderInfo() }
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Radium(MainContent);

const styles = {
  imgCol: {
    height: "100%",
    backgroundImage: `url(${sunset})`,
    backgroundSize: "cover",
    backgroundPosition: "25%"
  },
  sharedCol: {
    display: "table",
    height: "100%",
    textAlign: "center",
    padding: 0,
    borderLeft: "1px solid #ccc"
  },
  wrapper: {
    position: "relative",
    height: 400,
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
    color: "orange",
    fontSize: 24,
    ":hover": {
      opacity: 5,
      color: "black"
    }
  }
};
