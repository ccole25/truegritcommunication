/* @flow */
import React, { Component } from "react";
import { Row, Col, Nav, NavItem, Modal, Button, Table } from "react-bootstrap";

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
      return (this.renderProducts());
    } else if (whichModal === "licenses") {
      return (this.renderLicenses());
    } else if (whichModal === "safety") {
      return (this.renderSafety());
    } if (whichModal === "contact") {
      return (this.renderContact());
    }
  }

  renderContact() {
    return (
      <Table className="contactTable" striped hover>
        <tbody>
          <tr>
            <td>Rodger High</td>
            <td>President</td>
            <td><a href="tel:9137244446">(913)724-4446</a></td>
          </tr>
          <tr>
            <td>Ginger Cole</td>
            <td>Project Manager</td>
            <td><a href="tel:8168302923">(816)830-2923</a></td>
          </tr>
          <tr>
            <td>Email</td>
            <td><a href="mailto:truegrit.kc@gmail.com">truegrit.kc@gmail.com</a></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    );
  }

  renderProducts() {
    const materials = [
      "Splice Enclosures Inside/Outside Plant Applications",
      "Patch Cables",
      "Pig Tails",
      "Custom Cable Assemblies",
      "Fiber Distribution Cabinets",
      "Rack Assemblies",
      "OPGW Pole Attachment Systems",
      "OPGW Splice Enclosures",
      "Sub-Station Operation & Maintenance Materials",
      "Meterological Tower Splicing Materials",
      "CAT 5/6 Supplies, Patch Panels, Racks to Fit All Applicat"
    ];

    const pmList = [
      "Weekly Production Reports",
      "Prompt Invoicing",
      "Final Product Thumb Drives with Prints, Pictures, & Completion Reports",
      "Excellent Communicat"
    ];

    const equipmentList = [
      "A minimum of 2 TGC personnel on-site at all times",
      "All Required Safety & Peripherial Equipment",
      "All TGC Bids agrees to Mob/DeMob as many times as necessary to complete the projects"
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
  }

  renderLicenses() {
    const insurances = [
      "Liability Insurance of $4M (additional available upon client request)",
      "Bonding Insurance of $25K (additional available upon client request)",
      "Vehicles & Trailers of $1M (additional available upon client request)",
      "Workman's Compensation Applicable in Each of the 48 States"
    ];

    const approvals = [
      "AT&T",
      "Blattner Energy",
      "EDF Renewable Energy",
      "ENEL North America",
      "EPC Services Company",
      "Geronimo Wind Energy",
      "Google",
      "Henkles & McCoy, Inc.",
      "J. F. Edwards Construction Company",
      "Mortenson Construction",
      "North Arkansas Telephone Company",
      "RES North American, LLC",
      "SCADA International, Inc.",
      "Southwest Arkansas Telephone Company",
      "Spring",
      "SunEdison",
      "Sunergy World",
      "T-Mobile Telephone Company",
      "Verizon Telephone Company",
      "Vestas USA",
      "Wanzek Construction, Inc.",
      "WSP Group",
      "Xcel En"
    ];

    return (
      <div>
        <p>TGC currently is licensed in the State of Kansas.  Operational licenses in all other
        States are readily available within one day and will be obtained as needed by a
        client''s job requirements.</p>

        <h2><b>Insurance & Bonding</b></h2>
        <h4>TGC is insured & bonded in all 48 continental United States to include:</h4>
        <ul>
          {
            insurances.map((insurance, i) => {
              return <li key={i}>{insurance}</li>;
            })
          }
        </ul>

        <h3><b>APPROVED CONTRACTOR FOR:</b></h3>
        <ul>
          {
            approvals.map((approved, i) => {
              return <li key={i}>{approved}</li>;
            })
          }
        </ul>
      </div>
    );
  }

  renderSafety() {
    const list = [
      "All TGC Employees are up-to-date with OSHA Requirements 19.10 & Other Required Standards",
      "Wind Turbine Safety Training",
      "Outside Plant Splicing Safety Training",
      "Inside Plant Safety Training",
      "Power Safety Training",
      "Construction Safety Training",
      "Fire Safety Training",
      "Driver Safety Training",
      "Personnel Protective Equipment Safety Training",
      "Hazardous Material Safety Training",
      "Site Emergency Training",
      "Emergency Contact Training",
      "Dangerous & Protected Wildlife Training",
      "Emergency Evacuation Training",
      "Emergency Weather Training",
      "Heavy Lifting Training",
      "Ladder Safety Training",
      "Fall Protection Training",
      "Cold/Hot Weather Trai"
    ];

    return (
      <div>
        {
          list.map((item, i) => {
            return <li key={i}>{item}</li>;
          })
        }
        <p>These Training Procedures are Updated Monthly, Semi-Annually & Yearly</p>
        <p>All TGC Employees are required to attend a daily safety training meeting on-site.</p>
      </div>
    );
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
        <Modal.Footer>
          <Button onClick={this.hideModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  render () {
    return (
      <div className="header" style={styles.wrapper}>
        <Row>
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
      </div>
    );
  }
}

const styles = {
  wrapper: {
    width: "100%",
    backgroundColor: "#be4d35",
    position: "fixed",
    zIndex: 3,
    borderBottom: "1px solid #a2a2a2"
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
