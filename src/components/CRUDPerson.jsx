import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Row, Col, Image } from 'react-bootstrap';
import CreatePerson from './CreatePerson';
import UpdatePerson from './UpdatePerson';

export default class CRUDPerson extends Component  {
//REMEBER TO PUT A <ROW> INFRONT OF THE CALL, PLS

  render() {
    return(
          <Col xs={12} sm={6}>
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
              <Tab eventKey={1} title="Edit Person">
                <UpdatePerson />
              </Tab>
              <Tab eventKey={2} title="New Person">
                <CreatePerson />
              </Tab>
            </Tabs>
          </Col>

    );
  }
};
