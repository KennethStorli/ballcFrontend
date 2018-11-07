import React, { Component } from 'react'
import {Row, Grid, Col } from 'react-bootstrap';
import { ListGroup, ListGroupItem} from 'react-bootstrap';
import { Input, Button } from 'mdbreact';
import SearchSmall from '../components/SearchSmall'
import '../components/UpdatePerson.css'
import './Home.css'



export default class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams:[],
      selectTeam:[],
      associations:[],
      locations:[],
      coaches:[],
      owners:[],
      persons:[],
      ownerNames:[]
    };
  }
  componentDidMount() {
    fetch(`http://ballc-frontend-be.herokuapp.com/teams`)
    .then(result => result.json())
    .then(teams => this.setState({teams}))

    fetch(`http://ballc-frontend-be.herokuapp.com/associations`)
    .then(result => result.json())
    .then(associations => this.setState({associations}))

    fetch(`http://ballc-frontend-be.herokuapp.com/locations`)
    .then(result => result.json())
    .then(locations => this.setState({locations}))

    fetch(`http://ballc-frontend-be.herokuapp.com/coaches`)
    .then(result => result.json())
    .then(coaches => this.setState({coaches}))

    fetch(`http://ballc-frontend-be.herokuapp.com/owners`)
    .then(result => result.json())
    .then(owners => this.setState({owners}))
    
    fetch(`http://ballc-frontend-be.herokuapp.com/persons`)
    .then(result => result.json())
    .then(persons => this.setState({persons}))
  }

  getTeamAssociation(id) {
    var teamAssociationName = '';
    this.state.associations.forEach(association => {
      if(association.association_id === id) {
        teamAssociationName = association.name;
      }
    })
    return teamAssociationName;
  }

  getTeamLocation(id) {
    var teamLocationName = '';
    this.state.locations.forEach(location => {
      if(location.location_id === id) {
        teamLocationName = location.name;
      }
    })
    return teamLocationName;
  }

  getTeamCoach(id) {
    var teamCoachName = '';
    this.state.coaches.forEach(coach => {
      if(coach.coach_id === id) {
        this.state.persons.forEach(person => {
          if(person.person_id === coach.person) {
            teamCoachName = person.first_name + ' ' + person.last_name;
          }
        })
      }
    })
    return teamCoachName;
  }

  getTeamOwner(id) {
    var teamOwnerName = '';
    this.state.owners.forEach(owner => {
      if(owner.owner_id === id) {
        this.state.persons.forEach(person => {
          if(person.person_id === owner.person) {
            teamOwnerName = person.first_name + ' ' + person.last_name;
          }
        })
      }
    })
    return teamOwnerName;
  }

  getPersonName(id) {
    var personName = '';
    this.state.persons.forEach(person => {
      if(person.person_id === id) {
        personName = person.first_name + ' ' + person.last_name;
      }
    })
    return personName;
  }

  render() {
    return(
      <div>
        <Grid>
          <Row>
            <Col xs={12} sm={4}>
            <div className="Teamlist">
                  <ListGroup>
                    <div>
                      {this.state.teams.map(team =>
                        <ListGroupItem
                          className="listingplayer"
                          onClick={
                            e => {
                              this.setState({
                                selectTeam: team,
                                teamname:team.teamName
                              });
                            }
                          }
                          key={team.team_id}>
                          {team.teamName}
                        </ListGroupItem>)}
                    </div>
                  </ListGroup>
            </div>
              <SearchSmall
              />

            </Col>
            <Col xs={12} sm={4}>

              <br/>

              <p className="h5 text-center mb-4">EDIT/CREATE TEAMS</p>
              <form>
                <div className="grey-text">
                  <br/>
                  <p>Team name:</p>
                  <Input
                      name="Team Name"
                      value={this.state.selectTeam ? this.state.selectTeam.teamName : ''}
                      onChange={this.onChangeNumber
                      }/>
                </div>
                <br/>
                <hr/>
                <br/>
                <div className="grey-text">
                  <br/>
                  <p>Association:</p>
                  <Input
                      name="Association"
                      value={(this.state.selectTeam ? this.getTeamAssociation(this.state.selectTeam.association) : '')}
                      onChange={this.onChangeNumber
                      }/>
                </div>
                <br/>
                <hr/>
                <br/>
                <div className="grey-text">
                  <br/>
                  <p>Location:</p>
                  <Input
                      name="Location"
                      value={(this.state.selectTeam ? this.getTeamLocation(this.state.selectTeam.location) : '')}
                      onChange={this.onChangeNumber
                      }/>
                </div>
                <br/>
                <hr/>
                <br/>
                <div className="grey-text">
                  <br/>
                  <p>Coach:</p>
                  <Input
                      name="Coach"
                      value={(this.state.selectTeam ? this.getTeamCoach(this.state.selectTeam.coach) : '')}
                      onChange={this.onChangeNumber
                      }/>
                </div>
                <br/>
                <hr/>
                <br/>
                <div className="grey-text">
                  <br/>
                  <p>Owner:</p>
                  <Input
                      name="Owner"
                      value={(this.state.selectTeam ? this.getTeamOwner(this.state.selectTeam.owner) : '')}
                      onChange={this.onChangeNumber
                      }/>
                </div>


              </form>

            </Col>
            <Col xs={12} sm={4}>
              <br/>

              <p className="h5 text-center mb-4">REGISTERED ASSOCIATIONS</p>
              <div className="divlist">
              <ListGroup>
                      <div>
                        {this.state.associations.map(association =>
                          <ListGroupItem
                            className="listingplayer"
                            onClick={
                              e => {
                                this.setState({
                                  associationName:association.name
                                });
                              }
                            }
                            key={association.association_id}>
                            {association.name}
                          </ListGroupItem>)}
                      </div>
                </ListGroup>
              </div>
              <br/>

              <p className="h5 text-center mb-4">REGISTERED LOCATIONS</p>
              <div className="divlist">
                <ListGroup>
                      <div>
                        {this.state.locations.map(location =>
                          <ListGroupItem
                            className="listingplayer"
                            onClick={
                              e => {
                                this.setState({
                                  locationName:location.name
                                });
                              }
                            }
                            key={location.location_id}>
                            {location.name}
                          </ListGroupItem>)}
                      </div>
                </ListGroup>
              </div>
              <br/>

              <p className="h5 text-center mb-4">REGISTERED COACHES</p>
              <div className="divlist">
              <ListGroup>
                      <div>
                        {this.state.coaches.map(coach =>
                          <ListGroupItem
                            className="listingplayer"
                            onClick={
                              e => {
                                this.setState({
                                  coachName:coach.person
                                });
                              }
                            }
                            key={coach.coach_id}>
                            {this.getPersonName(coach.person)}
                          </ListGroupItem>)}
                      </div>
                </ListGroup>
              </div>
              <br/>

              <p className="h5 text-center mb-4">REGISTERED OWNERS</p>
              <div className="divlist">
              <ListGroup>
                      <div>
                        {this.state.owners.map(owner =>
                          <ListGroupItem
                            className="listingplayer"
                            onClick={
                              e => {
                                this.setState({
                                  ownerName:owner.person
                                });
                              }
                            }
                            key={owner.owner_id}>
                            {this.getPersonName(owner.person)}
                          </ListGroupItem>)}
                      </div>
                </ListGroup>
              </div>
              <div className="text-center">
                <Button className="formbtnSave" color="primary" onClick={this.signup}>Save </Button>
                <Button className="formbtnSave" color="primary" onClick={this.signup}>Create </Button>
                <Button className="formbtnDel" color="primary" onClick={this.signup}>Delete </Button>
              </div>

            </Col>
          </Row>
        </Grid>
      </div>



    )
  }
}
