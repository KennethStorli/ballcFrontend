import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Row, Jumbotron, Grid, Button } from 'react-bootstrap';
import CRUDPerson from '../components/CRUDPerson';
import Personlist from '../components/Personlist';

import './Home.css'

export default class Person extends Component {
  render(){
  /*  if(this.state.redirect){
      return(<Redirect to={'/'}/>)
    }*/
    return(
      <div>
        <Grid>
          <Row>
            <Personlist/>
            <CRUDPerson/>
          </Row>
        </Grid>
      </div>
    )
  }
}
