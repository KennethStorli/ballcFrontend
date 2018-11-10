import React from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';
import {PostData} from '../PostData';
import axios from 'axios';

class Login extends React.Component  {

  constructor(props){
    super(props);
    this.state={
      
      username:'',
      password:'',
      userDate: [],
      users:'',
      result:''
    }
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  

  login(){
    if(this.state.username && this.state.password){
      console.log("Login function");
      PostData('login', this.state);
      const list = [...this.state.userDate];
      let user = Object.assign({}, this.state);    //creating copy of object

      var data = {
        username: user.username,
        password: user.password
      }

      this.sendingData();
      list.push(data);

      
    }
  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state);
  }

  

  sendingData(){
    axios.get('http://localhost:8080/check')
    .then(function(response){

      
      reso = null;
      responde = null;
      var reso  = JSON.stringify(response.data);

      var responde = JSON.parse(reso);
      if(responde.token == ""){
        //alert("sorry dude you did put wrong info");
      }else{
      localStorage.setItem("userData", reso);
      alert("Welcome Back " + responde.username);
      responde = null;
      window.location.reload(); 
      }
      

    })
  }
  test(){
    var testing = this.sendingData;
    console.log(testing);
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
                
                <p> Password: </p>
                <Input
                  name="password"
                  group type="password"
                  onChange={this.onChange}
                validate/>
              </div>
              <div className="text-center">
                <Button color="primary" onClick={this.login} >Login</Button>
              </div>
              <ul>
            {this.test}
          </ul>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Login;
