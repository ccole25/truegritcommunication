/* @flow */
import React, { Component } from "react";
import { Row, Col, Nav, NavItem, Modal } from "react-bootstrap";

const modalContent = {
  products: {
    title: "Fuck Yea",
    description: "turds"
  }
};

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalContent: {}
    };
    // this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
  }
  showModal(whichModal) {
    this.setState({
      showModal: true,
      whichModal
    });
  }

  hideModal() {
    this.setState({
      showModal: false,
      whichModal: ""
    });
  }

  renderTitle() {
    const whichModal = this.state.whichModal;
    let title = "";
    if (whichModal === "products") {
      title = "Products";
    } else if (whichModal === "licenses") {
      title = "Licenses";
    } else if (whichModal === "safety") {
      title = "Safety";
    } if (whichModal === "contact") {
      title = "Contact Us";
    }
    return title;
  }

  renderDescription() {
    const whichModal = this.state.whichModal;
    if (whichModal === "products") {
      const materials = [
        "Splice Enclosures Inside/Outside Plant Applications",
        "PatchCables",
        "Pig Tails",
        "Custom Cable Assemblies",
        "Fiber Distribution Cabinets",
        "Rack Assemblies",
        "OPGW Pole Attachment Systems",
        "OPGW Splice Enclosures",
        "Sub-Station Operation & Maintanence Materials",
        "Meterological Tower Splicing Materials",
        "CAT 5/6 Supplies",
        "Patch Panels",
        "Racks to Fit All Applications",
      ];

      const pmList = [
        "Weekly production reports",
        "Prompt invoicing",
        "Final product thumb drives with prints, pictures, & completion reports",
        "Excellent communications"
      ];

      const equipmentList = [
        "A minimum of 2 TGC personnel on-site at all times",
        "All required saftey & peripherial equipment",
        "All TGC bids agree to Mob/DeMob as many times as necessary to complete the projects"
      ];

      return (
        <div>
          <h2><b>Materials</b></h2>
          <h4>True Grit Communication, LLC stocks all types of slicing materials to include:</h4>
          <ul>
            {
              materials.map((material, i) => {
                return <li key={i}>{material}</li>;
              })
            }
          </ul>

          <h2><b>Drafting</b></h2>
          <p>TGC has a drafter on staff with over 15-years experience for design & production of all necessary splicing prints.</p>
          <h2><b>Project Management</b></h2>
          <h4>Includes:</h4>
          <ul>
            {
              pmList.map((pm, i) => {
                return <li key={i}>{pm}</li>;
              })
            }
          </ul>

          <h2><b>Drafting</b></h2>
          <p>TGC has a drafter on staff with over 15-years experience for design & production of all necessary splicing prints.</p>

          <h2><b>On-site crew & equipment</b></h2>
          <h4>TGC guarantees to provid:</h4>
          <ul>
            {
              equipmentList.map((equipment, i) => {
                return <li key={i}>{equipment}</li>;
              })
            }
          </ul>
        </div>
      );
    } else if (whichModal === "licenses") {
      "Licenses";
    } else if (whichModal === "safety") {
      "Safety";
    } if (whichModal === "contact") {
      "Contact Us";
    }
  }

  renderModal () {
    return (
      <Modal show={this.state.showModal} onHide={this.hideModal} keyboard>
        <Modal.Header closeButton>
          <div style={styles.modalHeader}>{ this.renderTitle() }</div>
        </Modal.Header>
        <Modal.Body>
          { this.renderDescription() }
        </Modal.Body>
      </Modal>
    );
  }

  render () {
    return (
      <Row className="header" style={styles.wrapper}>
        { this.renderModal() }
        <Col xs={5}>
          <div style={styles.logoWrapper}>TGC</div>
        </Col>
        <Col xs={7}>
          <Nav className="nav" justified>
            <NavItem ref="products" onClick={() => this.showModal("products")}>Products</NavItem>
            <NavItem ref="licenses" onClick={() => this.showModal("licenses")}>Licenses</NavItem>
            <NavItem ref="Safety" onClick={() => this.showModal("safety")}>Safety</NavItem>
            <NavItem ref="Contact" onClick={() => this.showModal("contact")}>Contact</NavItem>
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
    backgroundColor: "#474a4c",
    width: 163,
    margin: "0 auto",
    position: "absolute",
    height: 87,
    left: "25%",
    zIndex: 1,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    textAlign: "center",
    fontSize: 28,
    color: "#fff",
    paddingTop: 17
  },
  modalHeader: {
    backgroundColor: "#be4d35",
    color: "#fff",
    width: "50%",
    height: 70,
    textAlign: "center",
    fontSize: 30,
    margin: "-15px",
    paddingTop: 15
  }
};
