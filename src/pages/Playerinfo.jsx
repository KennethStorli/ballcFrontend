import React, { Component} from 'react';
import {Col} from 'react-bootstrap'
import './Teams.css'



export default class Coach extends Component{
    constructor(props) {
      super(props);
      this.state = {
        players:[],
        allplayers: this.props.person,
      };

    }
    componentWillReceiveProps(nextprop) {
      fetch(`https://ballc-backend-api.herokuapp.com/players`)
      .then(result => result.json())
      .then(players => this.setState({players}))
    }

    render() {
      let filteredPlayers = this.state.players.filter(
        (players) => {
          return this.state.allplayers.indexOf(this.state.players)
        }
      )

      return (
          <div>
            {filteredPlayers.map(players =>
              <Col xs={12} sm={3} key={players.player_id}>
                <h2>{this.state.players.first_name}</h2>
              </Col>
            )}
          </div>
        )
      }
    }
