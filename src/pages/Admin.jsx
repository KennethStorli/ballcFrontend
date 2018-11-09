import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Grid } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

import './Home.css'

export default class Admin extends Component {

  render(){
    return(
      <div>
        <Grid>
          <Row>
            <Col xs={12} sm={3}>
              <div className="buffer">
                <Link to="/"><h1> 
                <FormattedMessage
                id="ADMIN.teamTitle"
                defaultMessage="TEAMS"
                />
                </h1></Link>
              </div>
            </Col>

            <Col xs={12} sm={3}>
              <div className="buffer">
                <Link to="/"><h1> 
                <FormattedMessage
                id="ADMIN.peopleTitle"
                defaultMessage="PEOPLE"
                />
                 </h1></Link>
              </div>
            </Col>


            <Col xs={12} sm={3}>
              <div className="buffer">
                <Link to="/"><h1>
                <FormattedMessage
                id="ADMIN.usersTitle"
                defaultMessage="USERS"
                />
                 </h1></Link>
              </div>
            </Col>

            <Col xs={12} sm={3}>
              <div className="buffer">
                <Link to="/"><h1>
                <FormattedMessage
                id="ADMIN.rolesTitle"
                defaultMessage="ROLES"
                />
                </h1></Link>
              </div>
            </Col>

            <Col xs={12} sm={3}>
              <div className="buffer">
                <Link to="/"><h1> 
                <FormattedMessage
                id="ADMIN.seasonsTitle"
                defaultMessage="SEASONS"
                />
                </h1></Link>
              </div>
            </Col>

            <Col xs={12} sm={3}>
              <div className="buffer">
                <Link to="/"><h1>
                <FormattedMessage
                id="ADMIN.matchesTitle"
                defaultMessage="MATCHES"
                />
                </h1></Link>
              </div>
            </Col>

            <Col xs={12} sm={3}>
              <div className="buffer">
                <Link to="/"><h1> 
                <FormattedMessage
                id="ADMIN.associationsTitle"
                defaultMessage="ASSOCIATIONS"
                />
                </h1></Link>
              </div>
            </Col>

            <Col xs={12} sm={3}>
              <div className="buffer">
                <Link to="/"><h1>
                <FormattedMessage
                id="ADMIN.locationsTitle"
                defaultMessage="LOCATIONS"
                />
                </h1></Link>
              </div>
            </Col>

            <Col xs={12} sm={3}>
              <div className="buffer">
                <Link to="/"><h1>
                <FormattedMessage
                id="ADMIN.addressesTitle"
                defaultMessage="ADDRESSES"
                />
                </h1></Link>
              </div>
            </Col>
          </Row>
        </Grid>


      </div>
      )
    }
  }
