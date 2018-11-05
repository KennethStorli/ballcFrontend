import React,  { Component } from 'react';
import {Row, Grid, Col, Checkbox } from 'react-bootstrap';
import { ListGroup, ListGroupItem} from 'react-bootstrap';
import {Button} from 'mdbreact'
import '../components/Teamlist.css'


export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      email:'',
      admin: false,
      id:'',
      name:''

    };
    this.onChangeUserName = this.onChangeUserName.bind(this)
    this.onAdminCheck = this.onAdminCheck.bind(this)
  }

  onChangeUserName(event){
    const username = event.target.value
    this.setState({
      name: username
    })
  }

  onAdminCheck(e){
    this.setState({admin: !this.state.admin});
    console.log(this.state.admin)
  }



  componentDidMount() {
    fetch(`https://ballc-frontend-be.herokuapp.com/userslist`)
    .then(result => result.json())
    .then(users => this.setState({users}))
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
                      {this.state.users.map(name =>
                        <ListGroupItem
                          className="listingplayer"
                          onClick={
                            e => {
                              this.setState({
                                email: name.email,
                                admin: name.admin,
                                name: name.name,
                              });

                            }
                          }
                          key={name.id}>
                          {name.name}
                        </ListGroupItem>)}
                    </div>
                  </ListGroup>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <p>Username:</p>
                <p>{(this.state.name ? this.state.name: '')}</p>

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
