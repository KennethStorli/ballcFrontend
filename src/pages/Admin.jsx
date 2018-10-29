import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


import './Home.css'

export default class Admin extends Component {

  render(){
    return(
      <div>
        <Link to="/Team">
          <Button bsStyle="primary">Update a team</Button>
        </Link>
        <Link to="/Person">
          <Button bsStyle="primary">Update a person</Button>
        </Link>
      </div>
      )
    }
  }
