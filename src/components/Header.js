/* @flow */
import React, { Component } from "react";
import { Grid, Row, Col, Nav, NavItem} from "react-bootstrap";

export default class Header extends Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }
  render () {
    return (
      <Row className="header" style={styles.wrapper}>
        <Col xs={6}>
          <div style={styles.logoWrapper}>
            <h4>TCG</h4>
          </div>
        </Col>
        <Col xs={6}>
          <Nav className="nav" activeKey={1} justified>
            <NavItem eventKey={1}>Products</NavItem>
            <NavItem eventKey={2}>Licenses</NavItem>
            <NavItem eventKey={3}>Safety</NavItem>
            <NavItem eventKey={4}>Contact</NavItem>
          </Nav>
        </Col>
      </Row>
    );
  }
}

const styles = {
  wrapper: {
    backgroundColor: "#be4d35"
  },
  logoWrapper: {
    backgroundColor: "#474a4c"
  },
  nav: {
    color: "#fff"
  }
};
