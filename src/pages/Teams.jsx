import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Row, Grid, Col, Image } from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';
import { ListGroup, ListGroupItem} from 'react-bootstrap';
import { Input, Button } from 'mdbreact';
import CreatePerson from '../components/CreatePerson';
import Search from '../components/Search'
import '../components/UpdatePerson.css'
import './Home.css'
import './Teams.css'




export default class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 1,
      persons:[],
      address:[],
      contact:[],
      contactID:[],
    };

  }

  componentDidMount() {
    fetch(`https://ballc-frontend-be.herokuapp.com/teams`)
    .then(result => result.json())
    .then(teams => this.setState({teams}))


  }



    render() {

    return(
      <div>
        <Grid>
          <Row>

            <p className="h5 text-center mb-4">REGISTERED PEOPLE</p>
            <br/>
            {this.state.teams.map(team =>
              <Col xs={12} sm={4}>
                <div
                  className="allTeams"
                  key={team.team_id}>
                  <h1>{team.team_name}</h1>
                </div>
              </Col>
            )}
              <br/>
          </Row>
        </Grid>
      </div>
    )
  }
}
