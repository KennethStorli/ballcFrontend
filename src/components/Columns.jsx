 import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import './Columns.css'

export default class Columns extends Component {
  render(){
    return(
      <div>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-Wrapper">
            <Image href="/" alt="171x180" src="images/teams/norway.jpg" circle className="profile-pic" />
            <h3> Norway </h3>
            <p> Moneyz </p>
          </Col>
          <Col xs={12} sm={4} className="person-Wrapper">
            <Image src="images/teams/sweden.jpg" circle className="profile-pic" />
            <h3> Sweden </h3>
            <p> Cheap stuff </p>
          </Col>
          <Col xs={12} sm={4} className="person-Wrapper">
            <Image src="images/teams/denmark.jpg" circle className="profile-pic" />
            <h3> Denmark </h3>
            <p> Good beer </p>
            <div className="spacer"></div>
          </Col>
          <Col xs={12} sm={4} className="person-Wrapper">
            <Image src="images/teams/germany.jpg" circle className="profile-pic" />
            <h3> Germany </h3>
            <p> Donuts on the subway </p>
          </Col>
          <Col xs={12} sm={4} className="person-Wrapper">
            <Image src="images/teams/france.jpg" circle className="profile-pic" />
            <h3> France </h3>
            <p> Honhonhon </p>
          </Col>
          <Col xs={12} sm={4} className="person-Wrapper">
            <Image src="images/teams/england.jpg" circle className="profile-pic" />
            <h3> England </h3>
            <p> Tea? </p>
          </Col>
        </Row>

      </div>
    )
  }
}
