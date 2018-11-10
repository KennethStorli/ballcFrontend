import React, { Component } from 'react'
import {Row, Grid, Col, Image, ListGroup, ListGroupItem, } from 'react-bootstrap';
import {Button, Input} from 'mdbreact'
import Select from 'react-select';

import AnonMatches from './Anonmatches'
import '../components/UpdatePerson.css'
import './Home.css'
import './Teams.css'




export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

      players:[],
      teamsformatch:[],
      selectedOptionPlayers:[],
      teamID:'',
      filterText:'',
    };

  }

  componentDidMount() {

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
    this.setState({ selectedOptionPlayers});
  }
  handleChangeTeams = (selectedOptionTeams) => {
    this.setState({ selectedOptionTeams});
  }

    render() {

      const { selectedOptionPlayers } = this.state.players;
      const { selectedOptionTeams } = this.state.teamsformatch;

    return(
      <div>
        <Grid>
          <h1>Edit watchlist</h1>
          <p>Use the dropdown to add to your favourites</p>
          <p>and the list to remove</p>
          <Row>

            <Col xs={12} sm={6}>
              <h3>Players</h3>


              <Select
                value={selectedOptionPlayers}
                onChange={this.handleChangePlayers}
                options={this.state.players}
              />
              <div className="TeamlistMed">

                <ListGroup>
                  <ListGroupItem>
                    1
                  </ListGroupItem>
                  <ListGroupItem>
                    1
                  </ListGroupItem>
                  <ListGroupItem>
                    1
                  </ListGroupItem>
                  <ListGroupItem>
                    1
                  </ListGroupItem>
                  <ListGroupItem>
                    1
                  </ListGroupItem>
                  <ListGroupItem>
                    1
                  </ListGroupItem>
                </ListGroup>

              </div>
              <br/>


            </Col>

            <Col xs={12} sm={6}>
              <h3>Teams</h3>
              <Select
                value={selectedOptionTeams}
                onChange={this.handleChangeTeams}
                options={this.state.teamsformatch}
              />
              <div className="TeamlistMed">

                <ListGroup>
                  <ListGroupItem>
                    1
                  </ListGroupItem>
                  <ListGroupItem>
                    1
                  </ListGroupItem>
                  <ListGroupItem>
                    1
                  </ListGroupItem>
                  <ListGroupItem>
                    1
                  </ListGroupItem>

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
