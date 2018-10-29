import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap';
import Teamform from '../components/Teamform';
import Teamlist from '../components/Teamlist'


import './Home.css'

export default class Team extends Component {

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
