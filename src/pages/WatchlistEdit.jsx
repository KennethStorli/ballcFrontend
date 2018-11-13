import React, { Component } from 'react'
import {Row, Grid, Col, Image, ListGroup, ListGroupItem, } from 'react-bootstrap';
import {Button, Input} from 'mdbreact'
import Select from 'react-select';

import AnonMatches from './Anonmatches'
import '../components/UpdatePerson.css'
import './Home.css'
import './Teams.css'

import { FormattedMessage } from 'react-intl';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfFavPlayers:0,
      numberOfFavTeams:0,
      players:[],
      teamsformatch:[],
      selectedOptionPlayers:[],
      favPlayers:[],
      favPlayerIds:[],
      favTeams:[],
      teamID:'',
      filterText:''
    };

  }

  componentDidMount() {
    /*fetch(`https://ballc-frontend-be.herokuapp.com/teams`)
    .then(result => result.json())
    .then(teams => this.setState({teams}))*/

    fetch(`https://ballc-frontend-be.herokuapp.com/playersformatch`)
    .then(result => result.json())
    .then(players => this.setState({players}))

    fetch(`https://ballc-frontend-be.herokuapp.com/teamsformatch`)
    .then(result => result.json())
    .then(teamsformatch => this.setState({teamsformatch}))

  }
  addDefaultSrc(ev){
    ev.target.src = `images/teams/default.jpg`
  }

  handleChangePlayers = (selectedOptionPlayers) => {
    this.setState({ 
      favPlayers: [...this.state.favPlayers, selectedOptionPlayers]
    });
    this.removePlayer(selectedOptionPlayers)
    console.log(this.state.favPlayers)
  }

  removePlayer(player) {
    var array = [...this.state.players];
    var index = array.indexOf(player)
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({players: array});
    }
  }

  removeFavPlayer(player) {
    var array = [...this.state.favPlayers];
    var index = array.indexOf(player)
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({favPlayers: array});
    }
  }

  handleChangeTeams = (selectedOptionTeams) => {
    this.setState({ 
      favTeams: [...this.state.favTeams, selectedOptionTeams]
    });
    this.removeTeam(selectedOptionTeams)
  }

  removeTeam(team) {
    var array = [...this.state.teamsformatch];
    var index = array.indexOf(team)
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({teamsformatch: array});
    }
  }

  removeFavTeam(team) {
    var array = [...this.state.favTeams];
    var index = array.indexOf(team)
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({favTeams: array});
    }
  }

    render() {

      const { selectedOptionPlayers } = this.state.players;
      const { selectedOptionTeams } = this.state.teamsformatch;

    return(
      <div>
        <Grid>
          <h1>
          <FormattedMessage
          id="WATCHLISTEDIT.editWatchlistTitle"
          defaultMessage="Edit watchlist"
          />
          </h1>
          <p>
          <FormattedMessage
          id="WATCHLISTEDIT.instructionMessage"
          defaultMessage="Use the dropdown to add to your favourites"
          />
          </p>
          <p>
          <FormattedMessage
          id="WATCHLISTEDIT.instructionMessageTwo"
          defaultMessage="and the list to remove"
          />
          </p>
          <Row>

            <Col xs={12} sm={6}>
              <h3>
              <FormattedMessage
              id="WATCHLISTEDIT.playerHeader"
              defaultMessage="Players"
              />
              </h3>


              <Select
                value={selectedOptionPlayers}
                onChange={this.handleChangePlayers}
                options={this.state.players}
              />
              <div className="TeamlistMed">

                <ListGroup>
                      <div>
                        {this.state.favPlayers.map(favPlayer =>
                          <ListGroupItem
                            className="listingplayer"
                            onClick={
                              e => {
                                this.setState({
                                  players:[...this.state.players, favPlayer]
                                });
                                this.removeFavPlayer(favPlayer)
                              }
                            }
                            key={favPlayer.value}>
                            {favPlayer.label}
                          </ListGroupItem>)}
                      </div>
                </ListGroup>

              </div>
              <br/>


            </Col>

            <Col xs={12} sm={6}>
              <h3>
              <FormattedMessage
              id="WATCHLISTEDIT.teamsHeader"
              defaultMessage="Teams"
              />
              </h3>
              <Select
                value={selectedOptionTeams}
                onChange={this.handleChangeTeams}
                options={this.state.teamsformatch}
              />
              <div className="TeamlistMed">

                <ListGroup>
                      <div>
                        {this.state.favTeams.map(favTeam =>
                          <ListGroupItem
                            className="listingplayer"
                            onClick={
                              e => {
                                this.setState({
                                  teamsformatch:[...this.state.teamsformatch, favTeam]
                                });
                                this.removeFavTeam(favTeam)
                              }
                            }
                            key={favTeam.value}>
                            {favTeam.label}
                          </ListGroupItem>)}
                      </div>
                </ListGroup>

              </div>
              <br/>



              </Col>
            </Row>
        </Grid>
      </div>
    )
  }
}
