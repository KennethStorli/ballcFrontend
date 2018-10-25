import React from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';

import {PostData} from '../PostData';


class Login extends React.Component  {


  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      email:'',
      confpassword:'',
    }
    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  signup(){
    if(this.state.password === this.state.confpassword){
      if(this.state.username && this.state.password && this.state.email){
        console.log("Login function");
        PostData('user', this.state)
      }
      else {
        alert("Please fill out all the fields!")
      }
    }
    else{ alert("Please make sure your passwords match!")
    }
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state);
  }

  render() {

    return(
      <Container>
        <Row>
          <Col md="6">
            <form>
              <h1 className="h5 text-center mb-4">Log in</h1>
              <br/>
              <div className="grey-text">
                <p>Username:</p>
                <Input
                  name="username"
                  group type="username"
                  validate error="wrong"
                  success="right"
                  onChange={this.onChange}/>

                <p>Email:</p>
                <Input
                  name="email"
                  group type="email"
                  validate error="wrong"
                  placeholder="Email"
                  onChange={this.onChange}
                success="right"/>


                <p> Password: </p>
                <Input
                  name="password"
                  group type="password"
                  onChange={this.onChange}
                validate/>

                <p> Confirm Password: </p>
                <Input
                  name="confpassword"
                  group type="password"
                  onChange={this.onChange}
                validate/>
              </div>

              <div className="text-center">
                <Button color="primary" onClick={this.signup} >Login</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Login;
