import React from 'react';
import {Glyphicon, ListGroup, ListGroupItem} from 'react-bootstrap';
import { Container, Row, Col, Input, Button } from 'mdbreact';
import './Teamlist.css'

export default class Teamform extends React.Component  {
//REMEBER TO PUT A <ROW> INFRONT OF THE CALL, PLS

alertClicked(){
  alert('You clicked the third ListGroupItem');
}

  render() {
    return(
          <Col xs={12} sm={6}>
            <p className="h5 text-center mb-4">TEAMLIST</p>
            <br/>
            <div className="Teamlist">
              <ListGroup>
                <ListGroupItem href="#">Link 1</ListGroupItem>
                <ListGroupItem href="#">Link 2</ListGroupItem>
                <ListGroupItem href="#">Link 2</ListGroupItem>
                <ListGroupItem href="#">Link 2</ListGroupItem>
                <ListGroupItem href="#">Link 2</ListGroupItem>
                <ListGroupItem href="#">Link 2</ListGroupItem>
                <ListGroupItem href="#">Link 2</ListGroupItem>
                <ListGroupItem href="#">Link 2</ListGroupItem>
                <ListGroupItem href="#">Link 2</ListGroupItem>
                <ListGroupItem href="#">Link 2</ListGroupItem>
                <ListGroupItem href="#">Link 2</ListGroupItem>
                <ListGroupItem href="#">Link 2</ListGroupItem>
                <ListGroupItem href="#">Link 2</ListGroupItem>
                <ListGroupItem href="#">Link 2</ListGroupItem>
                <ListGroupItem href="#">Link 2</ListGroupItem>
                <ListGroupItem href="#">Link 2</ListGroupItem>
                <ListGroupItem href="#">Link 2</ListGroupItem>
                <ListGroupItem href="#">Link 2</ListGroupItem>
                <ListGroupItem href="#">Link 2</ListGroupItem>
                <ListGroupItem href="#">Link 2</ListGroupItem>
                <ListGroupItem href="#">Link 2</ListGroupItem>

                <ListGroupItem onClick={this.alertClicked}>Trigger an alert</ListGroupItem>
              </ListGroup>
            </div>
            <br/>
            <Col sm={1}>
              <Glyphicon glyph="search" className="searchicon"/>
            </Col>
            <Col sm={11}>
              <Input
                name="searchteam"
                group type="text"
              placeholder="Search"/>
            </Col>


          </Col>

    );
  }
};
