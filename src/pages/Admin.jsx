import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Row, Col, Grid } from 'react-bootstrap';


import './Home.css'

export default class Admin extends Component {

  render(){
    return(
      <div>
        <Grid>
          <Row>
            <Col xs={12} sm={3}>
              <div className="buffer">
                <Link to="/"><h1> TEAMS </h1></Link>
              </div>
            </Col>

            <Col xs={12} sm={3}>
              <div className="buffer">
                <Link to="/"><h1> PEOPLE </h1></Link>
              </div>
            </Col>


            <Col xs={12} sm={3}>
              <div className="buffer">
                <Link to="/"><h1> USERS </h1></Link>
              </div>
            </Col>

            <Col xs={12} sm={3}>
              <div className="buffer">
                <Link to="/"><h1> ROLES </h1></Link>
              </div>
            </Col>

            <Col xs={12} sm={3}>
              <div className="buffer">
                <Link to="/"><h1> SEASONS </h1></Link>
              </div>
            </Col>

            <Col xs={12} sm={3}>
              <div className="buffer">
                <Link to="/"><h1> MATCHES </h1></Link>
              </div>
            </Col>

            <Col xs={12} sm={3}>
              <div className="buffer">
                <Link to="/"><h1> ASSOCIATIONS </h1></Link>
              </div>
            </Col>

            <Col xs={12} sm={3}>
              <div className="buffer">
                <Link to="/"><h1> LOCATIONS </h1></Link>
              </div>
            </Col>

            <Col xs={12} sm={3}>
              <div className="buffer">
                <Link to="/"><h1> ADDRESSES </h1></Link>
              </div>
            </Col>
          </Row>
        </Grid>


      </div>
      )
    }
  }
