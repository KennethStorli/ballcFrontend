import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';
import { Modal, Tabs, Tab } from 'react-bootstrap';
import Login from  './Login';
import SignUp from './SignUp'
import FAQs from './FAQ'

import './Navigator.css'

export default class Navigator extends Component {
  constructor(props, context) {
    super(props, context);

        this.handleShowHelp = this.handleShowHelp.bind(this);
        this.handleCloseHelp = this.handleCloseHelp.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      showHelp: false,
      users: null,
      username:''
    };
  }




  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleCloseHelp() {
    this.setState({ showHelp: false });
  }

  handleShowHelp() {
    this.setState({ showHelp: true });
  }
  render(){
    return(
      <div>

        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Foul</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>

              <NavItem eventKey={3} href="/Matches" to="/Matches">
                Matches
              </NavItem>
              <NavItem eventKey={3} href="/Teams" to="/Teams">
                Teams
              </NavItem>
            </Nav>
            <Nav pullRight>

              <NavItem eventKey={4} href="/User" to="/User">
                Profile
                <p>{this.state.username}</p>
              </NavItem>
              <NavItem>

              </NavItem>
              <NavItem eventKey={1} onClick={this.handleShow}>
                Login
              </NavItem>
              <NavItem eventKey={1} href="/Watchlist" to="/Watchlist">
                <Glyphicon glyph="star" />
              </NavItem>
              <NavItem eventKey={1} href="/Profile" to="/Profile">
                <Glyphicon glyph="user" />
              </NavItem>

              <NavItem eventKey={1} href="/Profile" to="/Profile">
                <Glyphicon glyph="cog" />
              </NavItem>
              <NavItem eventKey={1} onClick={this.handleShowHelp}>
                <Glyphicon glyph="question-sign" />
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Access your BallC account!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
              <Tab eventKey={1} title="Log in">
                <Login />
              </Tab>
              <Tab eventKey={2} title="Sign up">
                <SignUp />
              </Tab>
            </Tabs>
          </Modal.Body>
          <Modal.Footer>
            <p>Thank you for using our site!</p>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showHelp} onHide={this.handleCloseHelp}>
          <Modal.Header closeButton>
            <Modal.Title>Need some help?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FAQs />
          </Modal.Body>
          <Modal.Footer>
            <p>Thank you for using our site!</p>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
