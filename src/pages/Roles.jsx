import React,  { Component } from 'react';
import {Row, Grid, Col, Checkbox } from 'react-bootstrap';
import { ListGroup, ListGroupItem} from 'react-bootstrap';
import {Button} from 'mdbreact'
import '../components/Teamlist.css'


export default class Roles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons:[],


    };
  }


  componentDidMount() {
    fetch(`http://ballc-frontend-be.herokuapp.com/persons`)
    .then(result => result.json())
    .then(persons => this.setState({persons}))
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
                <p>{(this.state.first_name ? this.state.first_name: '')} {this.state.last_name ? this.state.last_name}</p>

                <br/>
                <hr/>
                <br/>
                <p>Email:</p>
                <p>{(this.state.email ? this.state.email: '')}</p>

                <br/>
                <br/>
                <Checkbox onClick={this.onAdminCheck} defaultChecked={this.state.admin}>
                  Admin
                </Checkbox>
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
