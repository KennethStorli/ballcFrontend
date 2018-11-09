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
     // ownerNames:[],
      availableOwners:[],
      availableCoaches:[],
      selectedAssociation:'',
      selectedCoach:'',
      selectedLocation:'',
      selectedOwner:'',
      selectedTeamName:''
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

  onChangeName(event){
    const teamNameInput = event.target.value
    this.setState({
      selectedTeamName: teamNameInput
    })
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

  setAvailableOwners() {
    var tempAvailableOwnerIds = []
    var tempOccupiedOwnerIds = []
    var availableOwners = []
    var index;

    this.state.owners.forEach(owner => {
      tempAvailableOwnerIds.push(owner.owner_id)
    })
    this.state.teams.forEach(team => {
      tempOccupiedOwnerIds.push(team.owner)
    })
    
    for (var i = 0; i < tempOccupiedOwnerIds.length; i++) {
      index = tempAvailableOwnerIds.indexOf(tempOccupiedOwnerIds[i]);
      if(index > -1) {
        tempAvailableOwnerIds.splice(index, 1);
      }
    }
    tempAvailableOwnerIds.forEach(owner => {
      availableOwners.push(this.getOwnerById(owner))
    })
    this.state.availableOwners = availableOwners.slice()
  }

  getOwnerById(id) {
    var tempOwner;
    this.state.owners.forEach(owner => {
      if(id === owner.owner_id) {
        tempOwner = owner;
        
      }
    })
    return tempOwner;
  }

  setAvailableCoaches() {
    var tempAvailableCoachIds = []
    var tempOccupiedCoachIds = []
    var availableCoaches = []
    var index;

    this.state.coaches.forEach(coach => {
      tempAvailableCoachIds.push(coach.coach_id)
    })
    this.state.teams.forEach(team => {
      tempOccupiedCoachIds.push(team.coach)
    })
    
    for (var i = 0; i < tempOccupiedCoachIds.length; i++) {
      index = tempAvailableCoachIds.indexOf(tempOccupiedCoachIds[i]);
      if(index > -1) {
        tempAvailableCoachIds.splice(index, 1);
      }
    }
    tempAvailableCoachIds.forEach(coach => {
      availableCoaches.push(this.getCoachById(coach))
    })
    console.log(availableCoaches)
    this.state.availableCoaches = availableCoaches.slice()
  }

  getCoachById(id) {
    var tempCoach;
    this.state.coaches.forEach(coach => {
      if(id === coach.coach_id) {
        tempCoach = coach;
        
      }
    })
    return tempCoach;
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
                                selectedTeamName: team.teamName,
                              selectedAssociation: this.getTeamAssociation(team.association),
                              selectedLocation: this.getTeamLocation(team.location),
                              selectedCoach: this.getTeamCoach(team.coach),
                              selectedOwner: this.getTeamOwner(team.owner)
                            });
                          }
                        }
                        key={team.team_id}>
                        {team.teamName}
                      </ListGroupItem>)}
                  </div>
                </ListGroup>
              </div>
              
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
                      value={this.state.selectedTeamName ? this.state.selectedTeamName : ''}
                      onChange={this.onChangeName.bind(this)}/>
                </div>
                <br/>
                <hr/>
                <br/>
                <div className="grey-text">
                  <br/>
                  <p>Association:</p>
                  <Input
                      name="Association"
                      value={(this.state.selectedAssociation ? this.state.selectedAssociation : '')}
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
                      value={(this.state.selectedLocation ? this.state.selectedLocation : '')}
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
                      value={(this.state.selectedCoach ? this.state.selectedCoach : '')}
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
                      value={(this.state.selectedOwner ? this.state.selectedOwner : '')}
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
                                  selectedAssociation:association.name
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
                                  selectedLocation:location.name
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
                        {this.setAvailableCoaches()}
                        {this.state.availableCoaches.map(coach =>
                          <ListGroupItem
                            className="listingplayer"
                            onClick={
                              e => {
                                this.setState({
                                  selectedCoach:this.getPersonName(coach.person)
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

              <p className="h5 text-center mb-4">AVAILABLE OWNERS</p>
              <div className="divlist">
              <ListGroup>
                      <div>
                        {this.setAvailableOwners()}
                        {this.state.availableOwners.map(owner =>
                          <ListGroupItem
                            className="listingplayer"
                            onClick={
                              e => {
                                this.setState({
                                  selectedOwner:this.getPersonName(owner.person)
                                });
                              }
                            }
                            key={owner.owner_id}>
                            {this.getPersonName(owner.person)}
                          </ListGroupItem>)
                        }
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
