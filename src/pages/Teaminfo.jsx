import React, { Component} from 'react';
import Association from './Association';
import Owner from './Owner';
import Location from './Location';
import Coach from './Coach';
import Playerinfo from './Playerinfo'
import './Teams.css'
import { FormattedMessage } from 'react-intl';

import { Row, Grid, Col, ListGroup, ListGroupItem   } from 'react-bootstrap'

export default class Teaminfo extends Component{
    constructor(props) {
      super(props);
      this.state = {
        players:[],
        playersInTeam:[],
        team:[],
        teams:[],
        teamID: props.location.state.id,
      };
      console.log('Teams is:', this.state.teamID)


    }
    componentDidMount() {
      fetch(`https://ballc-frontend-be.herokuapp.com/team/${this.state.teamID}`)
      .then(result => result.json())
      .then(team => this.setState({team,
      playersInTeam: team.players}))

      fetch(`https://ballc-backend-api.herokuapp.com/players/team/${this.state.teamID}`)
      .then(result => result.json())
      .then(players => this.setState({players}))
    }


    render() {
      let filteredPlayers = this.state.players.filter(
        (players) => {
          return this.state.team
        }
      )

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
              <br/>
              <br/>

              <hr/>
              <h1 className="playerinfo">Players</h1>
              <br/>
              <br/>


              {this.state.players.map(players =>
                <Col xs={12} sm={4} key={players.person_id}>
                  <div className="playerseparator">

                    <h3 className="greytext">{players.normal_position}</h3>
                    <hr/>
                    <h3>{players.first_name} {players.last_name}</h3>
                    <p>{players.date_of_birth}</p>
                  </div>

                  </Col>
                  )}

            </Row>
          </Grid>
          </div>

          );
          }

  }
