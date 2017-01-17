/* @flow */
import React, { Component } from "react";
import { Grid, Row, Col, Nav, NavItem, Collapse, Well } from "react-bootstrap";

export default class Header extends Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }
  render () {
    return (
      <div className="header" style={styles.wrapper}>
        <Grid>
          <Row>
            <Col xs={6}>
              <h5>True Grit Comminication, LLC</h5>
            </Col>
            <Col xs={6}>
              <div onClick={ ()=> this.setState({ open: !this.state.open })} style={styles.contact}>Contact</div>
              <Collapse in={this.state.open}>
                <div>
                  <Well>
                    Words
                  </Well>
                </div>
              </Collapse>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    borderBottom: "1px solid #ccc"
  },
  contact: {
    marginTop: 10,
    textAlign: "right"
  }
};
