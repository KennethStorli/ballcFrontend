import React from 'react';
import {Glyphicon, ListGroup, ListGroupItem} from 'react-bootstrap';
import { Container, Input, Button } from 'mdbreact';
import { Row, Col, Image } from 'react-bootstrap';

import './Teamlist.css'

export default class Personlist extends React.Component  {
//REMEBER TO PUT A <ROW> INFRONT OF THE CALL, PLS

constructor() {
        super();
        this.state = {persons:[]};

    }

    componentDidMount() {
        fetch(`http://ballc-backend-api.herokuapp.com/persons`)
            .then(result => result.json())
            .then(persons => this.setState({persons}))
    }


alertClicked(){
  alert('You clicked the third ListGroupItem');
}

  render() {
    return(
          <Col xs={12} sm={6}>
            <p className="h5 text-center mb-4">REGISTERED PEOPLE</p>
            <br/>
            <div className="Teamlist">
              <ListGroup>
                <div>
                  {this.state.persons.map(name =>
                    <ListGroupItem key={name.person_id}>{name.first_name} {name.last_name} </ListGroupItem>)}
                </div>

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
