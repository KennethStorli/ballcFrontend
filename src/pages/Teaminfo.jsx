import React, { Component} from 'react';
import './Teaminfo.css'
import {Row, Grid, Col } from 'react-bootstrap';
import Association from './Association'
import Owner from './Owner'

import './Teams.css'


export default class Teaminfo extends Component{
    constructor(props) {
      super(props);
      this.state = {
        team:[],
        associations:[],
        locations:[],
        coaches: [],
        owners: [],
        players: [],
        owner: '',
        association:'',
        coach:'',
        location:'',

        teamID: props.location.state.id,
      };
      console.log('Teams is:', this.state.teamID)


    }
    componentDidMount() {
      fetch(`https://ballc-frontend-be.herokuapp.com/team/${this.state.teamID}`)
      .then(result => result.json())
      .then(team => this.setState({team,
          association: team.association,
          owner: team.owner,
          location: team.location,
          coach: team.coach
        }))
    }


    render() {


      return (
          <div>
            <h1>{this.state.team.teamName}</h1>
            <br/>
            <br/>
            <br/>
            <br/>

            <Row>
                <Col xs={12} sm={3}>
                  <div className="bufferTeaminfo">
                    <p className="ass_name">Association:</p>
                    <Association association={this.state.team.association}/>
                  </div>
                </Col>
                <Col xs={12} sm={3}>
                  <div className="bufferTeaminfo">
                    <p className="ass_name">Owner:</p>
                    <Owner owner={this.state.team.owner}/>
                  </div>
                </Col>
                <Col xs={12} sm={3}>
                  <div className="bufferTeaminfo">
                    <p className="ass_name">Association:</p>
                    <Association association={this.state.team.association}/>
                  </div>
                </Col>
                <Col xs={12} sm={3}>
                  <div className="bufferTeaminfo">
                    <p className="ass_name">Association:</p>
                    <Association association={this.state.team.association}/>
                  </div>
                </Col>
            </Row>
          </div>
      );
    }

  }
