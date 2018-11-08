import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './NavigatorAdm.css'

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
      <div className="NavigatorAdm">
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/Admin">Admin</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavDropdown eventKey={2} title="Seasons" id="basic-nav-dropdown">
                <MenuItem eventKey={2.1} href="/NewSeason" to="/NewSeason">Create new season</MenuItem>
                <MenuItem eventKey={2.2} href="/EditSeason" to="/EditSeason">Edit seasons</MenuItem>
              </NavDropdown>
              <NavDropdown eventKey={2} title="Match" id="basic-nav-dropdown">
                <MenuItem eventKey={2.1} href="/Match" to="/Match">Create new match</MenuItem>
                <MenuItem eventKey={2.2} href="/Results" to="/Results">Assign results</MenuItem>
              </NavDropdown>


              <NavItem eventKey={3} href="/Team" to="/Team">
                Teams
              </NavItem>
              <NavItem eventKey={3} href="/Associations" to="/Associations">
                Associations
              </NavItem>
              <NavItem eventKey={3} href="/Locations" to="/Locations">
                Locations
              </NavItem>
              <NavItem eventKey={3} href="/Address" to="/Address">
                Address
              </NavItem>

            </Nav>
            <Nav pullRight>
              <NavDropdown eventKey={2} title="Person" id="basic-nav-dropdown">
                <MenuItem eventKey={2.1} href="/Person" to="/Person">Person</MenuItem>
                <MenuItem eventKey={2.3} href="/Roles" to="/Roles">Roles</MenuItem>
              </NavDropdown>
              <NavItem eventKey={3} href="/User" to="/User">
                Users
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </div>
    )
  }
}
