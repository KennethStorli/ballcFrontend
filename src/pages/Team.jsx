import React, { Component } from 'react'
import {Row, Grid, Col } from 'react-bootstrap';
import { ListGroup, ListGroupItem} from 'react-bootstrap';
import { Input, Button } from 'mdbreact';
import SearchSmall from '../components/SearchSmall'
import '../components/UpdatePerson.css'
import './Home.css'
import {PostData} from '../PostData';



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
      ownerNames:[],
      selectedAssociation:'',
      selectedCoach:'',
      selectedLocation:'',
      selectedOwner:'',
      selectedTeamName:'',
      association_id :'',
      location_id: '',
      coach_id : '',
      owner_id: '',
      team_id:''
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAssociation = this.onChangeAssociation.bind(this)
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeCoach = this.onChangeCoach.bind(this);
    this.onChangeOwner = this.onChangeOwner.bind(this);
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

  onChangeAssociation(event){
      const associationinput = event.target.value
      this.setState({
        selectedAssociation: associationinput
      })
  }
  onChangeLocation(event){
    const locationinput = event.target.value
    this.setState({
      selectedLocation: locationinput
    })
  }
  onChangeCoach(event){
    const coachinput = event.target.value
    this.setState({
      selectedCoach: coachinput
    })
  }
  onChangeOwner(event){
    const ownerinput = event.target.value
    this.setState({
      selectedOwner: ownerinput
    })
  }
  



addTeam = () =>{
  let user = Object.assign({}, this.state);    //creating copy of object

  var data = {
    teamName : user.selectedTeamName,
    association : user.association_id,
    location : user.location_id,
    coach : user.coach_id,
    owner : user.owner_id
  }

  PostData('addteam', data);
}

updateTeam = () =>{
  let user = Object.assign({}, this.state);    //creating copy of object

  var data = {
    teamName : user.selectedTeamName,
    association : user.association_id,
    location : user.location_id,
    coach : user.coach_id,
    owner : user.owner_id,
    team_id: user.team_id
  }

  PostData('updateteam', data);
}

delTeam = () =>{
  let user = Object.assign({}, this.state);    //creating copy of object

  var data = {
    team_id: user.team_id
  }

  PostData('delteam', data);
}


  render(){
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
                                team_id: team.team_id,
                                association_id: team.association,
                                location_id: team.location,
                                coach_id: team.coach,
                                owner_id: team.owner,
                                selectedAssociation: this.getTeamAssociation(team.association),
                                selectedLocation: this.getTeamLocation(team.location),
                                selectedCoach: this.getTeamCoach(team.coach),
                                selectedOwner: this.getTeamOwner(team.owner)
                              });
                            }
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
                      onChange={this.onChangeAssociation
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
                      onChange={this.onChangeLocation
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
                      onChange={this.onChangeCoach
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
                      onChange={this.onChangeOwner
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
                                  selectedAssociation:association.name,
                                  association_id : association.association_id
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
                                  selectedLocation:location.name,
                                  location_id: location.location_id
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
                                  selectedCoach:this.getPersonName(coach.person),
                                  coach_id : coach.coach_id
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
                                  selectedOwner:this.getPersonName(owner.person),
                                  owner_id: owner.owner_id
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
                <Button className="formbtnSave" color="primary" onClick={this.updateTeam}>Save </Button>
                <Button className="formbtnSave" color="primary" onClick={this.addTeam}>Create </Button>
                <Button className="formbtnDel" color="primary" onClick={this.delTeam}>Delete </Button>
              </div>

            </Col>
          </Row>
        </Grid>
      </div>



    )
  }
}

