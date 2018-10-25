import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Modal, Tabs, Tab } from 'react-bootstrap';
import Login from  './Login';
import SignUp from './SignUp'

import './Navigator.css'

export default class Navigator extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  render(){
    return(
      <div>

        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">BallC</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavDropdown eventKey={2} title="Seasons" id="basic-nav-dropdown">
                <MenuItem eventKey={2.1} href="/Season3" to="/Season3">Season 3</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={2.2} href="/Season2" to="/Season2">Season 2</MenuItem>
                <MenuItem eventKey={2.3} href="/Season1" to="/Season1">Season 1</MenuItem>
              </NavDropdown>
              <NavItem eventKey={3} href="/Teams" to="/Teams">
                Teams
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="/User" to="/User">
                Profile
              </NavItem>Login

              <NavItem eventKey={1} onClick={this.handleShow}>
                Login
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
      </div>
    )
  }
}
