import React,  { Component } from 'react';
import {Row, Grid, Col } from 'react-bootstrap';
import { ListGroup, ListGroupItem} from 'react-bootstrap';
import {Button, Input} from 'mdbreact'
import '../components/Teamlist.css'


export default class Profile extends Component {
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
          <Row>
            <Col xs={12} sm={4}></Col>
            <Col xs={12} sm={4}>

              <div>

                <p>Username:</p>
                <br/>

                <Input
                  name="firstname"
                  value={(this.state.name ? this.state.name: '')}
                  onChange={this.onChangeUsername.bind(this)
                  }/>

                <br/>
                <hr/>
                <br/>
                <p>Email:</p>
                <br/>
                
                <Input
                  name="firstname"
                  value={(this.state.email ? this.state.email: '')}
                  onChange={this.onChangeEmail.bind(this)
                  }/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Button>Save profile</Button>


              </div>
            </Col>
            <Col xs={12} sm={4}></Col>

          </Row>
        </Grid>

      )
    }
  }
