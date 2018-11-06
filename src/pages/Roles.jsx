import React,  { Component } from 'react';
import { Row, Grid, Col, Checkbox } from 'react-bootstrap';
import { ListGroup, ListGroupItem, FormControl} from 'react-bootstrap';
import { Button, Input } from 'mdbreact'
import '../components/Teamlist.css'


export default class Roles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons:[],
      teams:[],
      selectTeam:[],
      first_name:'',
      last_name:'',
      coach: false,
      owner:false,
      number:'',


    };
    this.onChangeNumber = this.onChangeNumber.bind(this)

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
  }
    render(){
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
                                first_name: name.first_name,
                                last_name:name.last_name,

                              });

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
                <Checkbox onClick={this.onAdminCheck} defaultChecked={this.state.admin}>
                  Coach
                </Checkbox>

                <br/>
                <br/>
                <Checkbox onClick={this.onAdminCheck} defaultChecked={this.state.admin}>
                  Owner
                </Checkbox>

                <br/>

                <br/>
                <br/>
                <div className="chooseTeam">

                  <Col xs={12} sm={6}>
                    <p>Normal Position</p>
                    <FormControl componentClass="select" placeholder="goalkeeper">
                      <option value="goalkeeper">Goalkeeper</option>
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
                    value={(this.state.selectTeam ? this.state.selectTeam.teamName : '')}
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
                                  selectTeam: name
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

                <Button>Save user</Button>
              </Col>
            </Row>
          </div>
        </Grid>

      )
    }
  }
