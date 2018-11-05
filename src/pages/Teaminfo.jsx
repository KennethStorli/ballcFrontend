import React, { Component} from 'react';
import Association from './Association';
import Owner from './Owner';
import Location from './Location';
import Coach from './Coach';
import Playerinfo from './Playerinfo'
import './Teams.css'

import { Row, Grid   } from 'react-bootstrap'

export default class Teaminfo extends Component{
    constructor(props) {
      super(props);
      this.state = {
        team:[],
        teamID: props.location.state.id,
      };
      console.log('Teams is:', this.state.teamID)


    }
    componentDidMount() {
      fetch(`https://ballc-frontend-be.herokuapp.com/team/${this.state.teamID}`)
      .then(result => result.json())
      .then(team => this.setState({team}))
    }


    render() {


      return (
        <div>
          <Grid>
            <Row>
              <h1>{this.state.team.teamName}</h1>
              <br/>
              <br/>
              <Association association={this.state.team.association}/>
              <Location location={this.state.team.location}/>
              <Owner owner={this.state.team.owner}/>
              <Coach coach={this.state.team.coach}/>
              <h1 className="playerinfo">Players</h1>
              <br/>
              <br/>
              <Playerinfo allplayers={this.state.team.players}/>
            </Row>
          </Grid>
          </div>

          );
          }

  }
