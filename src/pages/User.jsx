import React,  { Component } from 'react';
import {Row, Grid, Col } from 'react-bootstrap';
import { ListGroup, ListGroupItem} from 'react-bootstrap';
import {Button, Input} from 'mdbreact'
import '../components/Teamlist.css'
import { FormattedMessage } from 'react-intl';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      email:'',
      admin: false,
      id:'',
      name:'',
      adminBinary:'',

    };
    this.onAdminCheck = this.onAdminCheck.bind(this)
  }


  onAdminCheck(e){
    this.setState({admin: !this.state.admin});
  }

  onChangeUsername(event){
    const username = event.target.value
    this.setState({
      name: username
    })
  }

  onChangeEmail(event){
    const email = event.target.value
    this.setState({
      email: email
    })
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
                                name: name.username,
                              });
                            }
                          }
                          key={name.id}>
                          {name.username}
                        </ListGroupItem>)}
                    </div>
                  </ListGroup>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <p>
                <FormattedMessage
                id="USER.username"
                defaultMessage="Username:"
                />
                </p>
                <Input
                  name="firstname"
                  value={(this.state.name ? this.state.name: '')}
                  onChange={this.onChangeUsername.bind(this)
                  }/>

                <br/>
                <hr/>
                <br/>
                <p>
                <FormattedMessage
                id="USER.email"
                defaultMessage="Email:"
                />
                </p>
                <Input
                  name="firstname"
                  value={(this.state.email ? this.state.email: '')}
                  onChange={this.onChangeEmail.bind(this)
                  }/>

                <br/>
                <br/>
                <p><input
                  name="isGoing"
                  type="checkbox"
                  checked={this.state.admin}
                  onChange={this.onAdminCheck} />
                  <FormattedMessage
                  id="USER.adminInput"
                  defaultMessage="Admin"
                  />
                 </p>


                <br/>
                <br/>
                <Button>
                <FormattedMessage
                id="USER.saveUserButton"
                defaultMessage="Save user"
                />
                </Button>
                <Button className="formbtnDel" color="primary" onClick={this.delPerson} >
                <FormattedMessage
                id="USER.deleteUserButton"
                defaultMessage="Delete user"
                />
                </Button>

              </Col>
            </Row>
          </div>
        </Grid>

      )
    }
  }
