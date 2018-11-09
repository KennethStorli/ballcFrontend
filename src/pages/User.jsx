import React,  { Component } from 'react';
import {Row, Grid, Col } from 'react-bootstrap';
import { ListGroup, ListGroupItem} from 'react-bootstrap';
import {Button, Input} from 'mdbreact'
import '../components/Teamlist.css'
import { FormattedMessage } from 'react-intl';
import { PostData } from '../PostData';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      email:'',
      admin: false,
      password:'',
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

  checkAdmin = () =>{
    let user = Object.assign({}, this.state);    //creating copy of object

    var data = {
      user_id: user.id,
      password: user.password,
      email: user.email,
      username: user.name,
      admin: user.admin
    }
    PostData('setadmin', data)
  }
  componentDidMount() {
    fetch(`https://ballc-frontend-be.herokuapp.com/userslist`)
    .then(result => result.json())
    .then(users => this.setState({users}))
  }

  updateUser = () =>{
    let user = Object.assign({}, this.state);    //creating copy of object

    var data = {

      email:user.email,
      admin: user.admin,
      password:user.password,
      id:user.id,
      username:user.name,
    }

    PostData('updateuser', data)
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
                                id: name.user_id,
                                password: name.password,
                                email: name.email,
                                admin: name.admin,
                                name: name.username
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

                <Button onClick={this.checkAdmin}>
                <FormattedMessage
                id="USER.saveUserButton"
                defaultMessage="Save user"
                />
                </Button>
                <Button className="formbtnDel" color="primary" >
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
