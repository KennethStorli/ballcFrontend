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

      teams:[],
      seasons:[],
      teamID:'',
      filterText:'',
    };

  }

  componentDidMount() {
    fetch(`https://ballc-frontend-be.herokuapp.com/teams`)
    .then(result => result.json())
    .then(teams => this.setState({teams}))

    fetch(`https://ballc-frontend-be.herokuapp.com/seasonslist`)
    .then(result => result.json())
    .then(seasons => this.setState({seasons}))

  }
  addDefaultSrc(ev){
    ev.target.src = `images/teams/default.jpg`
  }
  handleChangeSeason = (selectedOptionSeason) => {
    this.setState({ selectedOptionSeason});
  }

    render() {

      const { selectedOptionSeason } = this.state.seasons;

    return(
      <div>
        <Grid>
          <h1>Edit watchlist</h1>
          <Row>

            <Col xs={12} sm={6}>
              <h3>Players</h3>
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

              <Select
                value={selectedOptionSeason}
                onChange={this.handleChangeSeason}
                options={this.state.seasons}
              />
              <Input/>
              <Button>Add player</Button>

            </Col>

            <Col xs={12} sm={6}>
              <h3>Teams</h3>

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
              <Select
                value={selectedOptionSeason}
                onChange={this.handleChangeSeason}
                options={this.state.seasons}
              />
              <Input/>
              <Button>Add team</Button>

              </Col>
            </Row>
        </Grid>
      </div>
    )
  }
}
