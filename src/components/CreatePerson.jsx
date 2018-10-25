import React, { Component } from 'react';
import {Glyphicon, ListGroup, ListGroupItem} from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';
import { Container, Row, Col, Input, Button } from 'mdbreact';
import Personlist from './PersonList';
import  from './PersonList';

import './Teamlist.css'

export default class CreatePerson extends Component  {
//REMEBER TO PUT A <ROW> INFRONT OF THE CALL, PLS

alertClicked(){
  alert('You clicked the third ListGroupItem');
}

  render() {
    return(
        <div>
          <p>THIS IS CREATE PERSON </p>
        </div>
    );
  }
};
