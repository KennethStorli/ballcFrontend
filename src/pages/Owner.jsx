import React, { Component} from 'react';
import {Col} from 'react-bootstrap'
import PersonInfo from './PersonInfo'
import './Teams.css'




export default class Owner extends Component{
  constructor(props) {
    super(props);
    this.state = {
      owners:[],
      owner: this.props.owner,
    };

  }
  componentWillReceiveProps(nextprop) {
    fetch(`https://ballc-frontend-be.herokuapp.com/owner/${nextprop.owner}`)
    .then(result => result.json())
    .then(owners => this.setState({owners}))
  }


  render(){
    return(
      <Col xs={12} sm={3}>
        <h1>Owner</h1>
        <hr/>

        <PersonInfo person={this.state.owners.person}/>
      </Col>
        )
  }
}
