import React, { Component } from 'react';
import { Input, Button } from 'mdbreact';
import { Col } from 'react-bootstrap';
import {PostData} from '../PostData';



import './CreatePerson.css'

export default class CreatePerson extends Component  {
//REMEBER TO PUT A <ROW> INFRONT OF THE CALL, PLS
constructor(props){
  super(props);
  this.state={
    firstname:'',
    lastname:'',
    address_1:'',
    address_2:'',
    address_3:'',
    postal_code:'',
    city:'',
    country:'',
    phonenumber:'',
    dob:'',
    phonenumber:'',
    email:'',
  }
  this.createperson = this.createperson.bind(this);
  this.onChange = this.onChange.bind(this);
}


createperson(){
    if(this.state.firstname && this.state.lastname && this.state.dob){
      console.log("Success in creating a person");
      PostData('regperson', this.state)
    }
    else {
      alert("Please fill out all the fields!")
    }
  }

onChange(e){
  this.setState({[e.target.name]: e.target.value});
  console.log(this.state);
}

  render() {
    return(
      <form>
        <div className="grey-text">
          <br/>
          <Col sm={1}>
            <p className="RedStar">*</p>
          </Col>
          <Col sm={11}>
            <p>First name:</p>
          </Col>
          <Input
            name="firstname"
            group type="firstname"
            validate error="wrong"
            success="right"
            onChange={this.onChange}/>

          <Col sm={1}>
            <p className="RedStar">*</p>
          </Col>
          <Col sm={11}>
            <p>Last name:</p>
          </Col>
          <Input
            name="lastname"
            group type="lastname"
            validate error="wrong"
            placeholder="Lastname"
            onChange={this.onChange}
          success="right"/>


          <Col sm={1}>
          </Col>
          <Col sm={11}>
            <p>Address 1:</p>
          </Col>
          <Input
            name="address_1"
            group type="Address"
            onChange={this.onChange}
          validate/>

          <Col sm={1}>
          </Col>
          <Col sm={11}>
            <p>Address 2:</p>
          </Col>
          <Input
            name="address_2"
            group type="Address"
            onChange={this.onChange}
          validate/>

          <Col sm={1}>
          </Col>
          <Col sm={11}>
            <p>Address 3:</p>
          </Col>
          <Input
            name="address_3"
            group type="address"
            onChange={this.onChange}/>
          <Col sm={6}>
            <p>Postal code:</p>
            <Input
              name="postal_code"
              group type="address"
              onChange={this.onChange}/>
          </Col>
          <Col sm={6}>
            <p>City:</p>
            <Input
              name="city"
              group type="address"
              onChange={this.onChange}/>
          </Col>

          <Col sm={1}>
          </Col>
          <Col sm={11}>
            <p>Country:</p>
          </Col>
          <Input
            name="country"
            group type="address"
            onChange={this.onChange}/>
          <Col sm={6}>
            <p>Email:</p>
            <Input
              name="email"
              group type="contact"
              onChange={this.onChange}/>
          </Col>
          <Col sm={6}>
            <p> Phonenumber:</p>
            <Input
              name="phonenumber"
              group type="contact"
              onChange={this.onChange}/>
          </Col>

          <Col sm={1}>
            <p className="RedStar">*</p>
          </Col>
          <Col sm={11}>
            <p>Date of Birth (DD/MM/YY:)</p>
          </Col>             <Input
            name="dob"
            group type="dob"
            onChange={this.onChange}/>

        </div>

        <Col sm={1}>
          <p className="RedStar">*</p>
        </Col>
        <Col sm={11}>
          <h1 className="h5">Red stars are required fields</h1>
        </Col>
        <br/>
        <br/>
        <div className="text-center">
          <Button color="primary" onClick={this.createperson} >Create person</Button>
        </div>
      </form>
    );
  }
};
