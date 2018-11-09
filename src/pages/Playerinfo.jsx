import React, { Component} from 'react';
import {Col, ListGroup, ListGroupItem} from 'react-bootstrap'
import './Teams.css'
import { FormattedMessage } from 'react-intl';


export default class Coach extends Component{
    constructor(props) {
      super(props);
      this.state = {
        players:[],
        allplayers: this.props.person,
      };
    }
    componentDidMount() {
      fetch(`https://ballc-backend-api.herokuapp.com/players`)
      .then(result => result.json())
      .then(players => this.setState({players}))
    }

    render() {
      let filteredPlayers = this.state.players.filter(
        (players) => {
          return this.state.allplayers.indexOf(this.state.players) !== -1
        }
      )

      return (
          <div>
            <ListGroup>
              <div>
                {this.state.players.map(name =>
                  <ListGroupItem
                    className="listingplayer"
                    key={name.person_id}>
                    {name.first_name} {name.last_name}
                  </ListGroupItem>)}
              </div>
            </ListGroup>

            {      console.log(this.state.players)
            }
            {this.state.players.map(players =>
              <Col xs={12} sm={3} key={players.player_id}>
                <h2>{this.state.players.first_name}</h2>
              </Col>
            )}
          </div>
        )
      }
    }
