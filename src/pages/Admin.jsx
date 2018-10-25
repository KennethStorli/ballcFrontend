import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Button, Row } from 'react-bootstrap';
import Teamform from '../components/Teamform';
import Teamlist from '../components/Teamlist'


import './Home.css'

export default class Admin extends Component {

  render(){
    return(
      <div>
        <Grid>
          <Row>
            <Teamlist/>
            <Teamform/>
          </Row>
        </Grid>
        </div>
      )
    }
  }
