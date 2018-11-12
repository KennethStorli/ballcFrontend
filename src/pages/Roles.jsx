import React,  { Component } from 'react';
import { Row, Grid, Col, Checkbox } from 'react-bootstrap';
import { ListGroup, ListGroupItem, FormControl} from 'react-bootstrap';
import { Button, Input } from 'mdbreact'
import '../components/Teamlist.css'
import { PostData } from '../PostData';


export default class Roles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons:[],
      people:[],
      teams:[],
      owners:[],
      players:[],
      coaches:[],
      selectTeam:[],
      first_name:'',
      last_name:'',
      team_id:'',
      coach: false,
      owner:false,
      player:false,
      number:'',
      person_id:'',
      selected:'',
      playernumber:'',
      team: '',
      normalPos:'',


    };
    this.onChangeNumber = this.onChangeNumber.bind(this)
    this.selectOption = this.selectOption.bind(this)

    this.onCoachCheck = this.onCoachCheck.bind(this)
    this.onOwnerCheck = this.onOwnerCheck.bind(this)
    this.onPlayerCheck = this.onPlayerCheck.bind(this)

  }
  onChangeNumber(event){
    const number = event.target.value
    this.setState({
      number: number
    })
  }

  componentDidMount() {
    fetch(`http://ballc-frontend-be.herokuapp.com/persons`)
    .then(result => result.json())
    .then(persons => this.setState({persons}))

    fetch(`http://ballc-frontend-be.herokuapp.com/teams`)
    .then(result => result.json())
    .then(teams => this.setState({teams}))

    fetch(`http://ballc-frontend-be.herokuapp.com/coaches`)
    .then(result => result.json())
    .then(coaches => this.setState({coaches}))

    fetch(`http://ballc-frontend-be.herokuapp.com/owners`)
    .then(result => result.json())
    .then(owners => this.setState({owners,
    people: owners.person}))

    fetch(`http://ballc-frontend-be.herokuapp.com/players`)
    .then(result => result.json())
    .then(players => this.setState({players}))
  }

  getOwner(id) {
    this.state.owners.forEach(owner => {
      if(owner.person === id) {
            this.setState({owner: true})
        }
      })
    }
    getCoach(id) {
      this.state.coaches.forEach(owner => {
        if(owner.person === id) {
              this.setState({coach: true})
          }
        })
      }
      getPlayer(id) {
        this.state.players.forEach(owner => {
          if(owner.person == id) {this.setState({
                  player: true,
                  number:  owner.number,
                  team: owner.team,
                  normalPos: owner.normal_position,
                })
                if(owner.normal_position == "GOALKEEPER"){
                  this.setState({selected: 'Goalkeeper'})
                }
                else if(owner.normal_position == "DEFENCE"){
                  this.setState({selected: 'Defence'})
                }
                else if(owner.normal_position == "MIDFIELD"){
                  this.setState({selected: 'Midfield'})
                }
                else if(owner.normal_position == "FORWARD"){
                  this.setState({selected: 'Forward'})
                }
                this.state.teams.forEach(teams => {
                  if(teams.team_id == owner.team) {
                        this.setState({
                          teamname: teams.teamName,
                        })

                  }
            })
          }
        })
      }



  checkingPlayers(id){

  }

  checkingCoaches(id){

  }


  onCoachCheck(e){
    this.setState({coach: !this.state.coach});
  }

  onOwnerCheck(e){
    this.setState({owner: !this.state.owner});
  }

  onPlayerCheck(e){
    this.setState({player: !this.state.player});
  }

  selectOption = (event) =>{
    let selectedOp = event.target.value;
    this.setState({selected: selectedOp});
    console.log(selectedOp);
  }

  addRole = () =>{
    let user = Object.assign({}, this.state);    //creating copy of object

    var data = {
      coach: user.coach,
      owner: user.owner,
      person_id:user.person_id,
      team_id:user.team_id
    }

    if(this.state.number !== ''){
      this.setState({player: true});
      var data3 = {
        number: user.number,
        player: user.player,
        selected: user.selected,
        team: user.team_id
      }
      var data2 = {...data, ...data3 }
      console.log("it is a player");
      PostData('addrole', data2);
    }else{
      PostData('addrole', data);
    }


  }
    render(){
      const owner = this.state.owners;
      return(
        <Grid>
          <div>
            <Row>
              <Col xs={12} sm={6}>
                <div className="Teamlist">
                  <ListGroup>
                    <div>
                      {this.state.persons.map(name =>
                        <ListGroupItem
                          className="listingplayer"
                          onClick={
                            e => {
                              this.setState({
                                person_id: name.person_id,
                                first_name: name.first_name,
                                last_name:name.last_name,
                                selected: '',
                                number:'',
                                team:'',
                                owner: false,
                                coach: false,
                                player:false,

                              });
                              this.getOwner(name.person_id)
                              this.getPlayer(name.person_id)
                              this.getCoach(name.person_id)


                            }
                          }
                          key={name.person_id}>
                          {name.first_name} {name.last_name}
                        </ListGroupItem>)}
                    </div>
                  </ListGroup>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <p>Name:</p>
                <p>{(this.state.first_name ? this.state.first_name: '')} {(this.state.last_name ? this.state.last_name: '')}</p>

                <br/>
                <hr/>

                <br/>
                <br/>
                <p>
                  <input
                    name="isGoing"
                    type="checkbox"
                    checked={this.state.coach}
                    onChange={this.onCoachCheck} /> Coach </p>


                <br/>
                <p>
                  <input
                    name="isGoing"
                    type="checkbox"
                    checked={this.state.owner}
                    onChange={this.onOwnerCheck} /> Owner </p>


                <br/>

                <br/>

                <p>
                  <input
                    name="isGoing"
                    type="checkbox"
                    checked={this.state.player}
                    onChange={this.onPlayerCheck} /> Player
                </p>

                <br/>
                <div className="chooseTeam">

                  <Col xs={12} sm={6}>
                    <p>Normal Position: {this.state.selected}</p>
                    <FormControl componentClass="select" onChange={this.selectOption} placeholder="goalkeeper">
                      <option  value="goalkeeper">Goalkeeper</option>
                      <option value="defence">Defence</option>
                      <option value="midfield">Midfield</option>
                      <option value="forward">Forward</option>
                    </FormControl>
                  </Col>
                  <Col xs={12} sm={6}>
                    <p> Number </p>
                    <Input
                      name="Number"
                      value={(this.state.number ? this.state.number : '')}
                      onChange={this.onChangeNumber
                      }/>
                  </Col>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <p> Team </p>
                  <Input
                    name="team"
                    value={(this.state.teamname ? this.state.teamname : '')}
                    onChange={this.onChangeFName
                    }/>
                  <br/>
                  <br/>
                  <div className="TeamlistShort">
                    <ListGroup>
                      <div>
                        {this.state.teams.map(name =>
                          <ListGroupItem
                            className="listingplayer"
                            onClick={
                              e => {
                                this.setState({
                                  selectTeam: name,
                                  teamname: name.teamName,
                                  team_id: name.team_id
                                });
                              }
                            }
                            key={name.team_id}>
                            {name.teamName}
                          </ListGroupItem>)}
                      </div>
                    </ListGroup>
                  </div>
                </div>

                <br/>
                <br/>

                <Button onClick={this.addRole}>Save role</Button>
                <Button onClick={this.updateRole}>Update role</Button>

              </Col>
            </Row>
          </div>
        </Grid>

      )
    }
  }
