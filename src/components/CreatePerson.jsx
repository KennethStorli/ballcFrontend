import React, { Component } from 'react';
import {Glyphicon, ListGroup, ListGroupItem} from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';
import { Input, Button } from 'mdbreact';
import { Row, Col, Image } from 'react-bootstrap';


import './CreatePerson.css'

export default class CreatePerson extends Component  {
//REMEBER TO PUT A <ROW> INFRONT OF THE CALL, PLS


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
            name="username"
            group type="username"
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
            name="email"
            group type="email"
            validate error="wrong"
            placeholder="Email"
            onChange={this.onChange}
          success="right"/>


          <Col sm={1}>
          </Col>
          <Col sm={11}>
            <p>Address 1:</p>
          </Col>
          <Input
            name="password"
            group type="password"
            onChange={this.onChange}
          validate/>

          <Col sm={1}>
          </Col>
          <Col sm={11}>
            <p>Address 2:</p>
          </Col>
          <Input
            name="confpassword"
            group type="password"
            onChange={this.onChange}
          validate/>

          <Col sm={1}>
          </Col>
          <Col sm={11}>
            <p>Address 3:</p>
          </Col>
          <Input
            name="username"
            group type="username"
            validate error="wrong"
            success="right"
            onChange={this.onChange}/>
          <Col sm={6}>
            <p>Postal code:</p>
            <Input
              name="username"
              group type="username"
              validate error="wrong"
              success="right"
              onChange={this.onChange}/>
          </Col>
          <Col sm={6}>
            <p>City:</p>
            <Input
              name="username"
              group type="username"
              validate error="wrong"
              success="right"
              onChange={this.onChange}/>
          </Col>

          <Col sm={1}>
          </Col>
          <Col sm={11}>
            <p>Country:</p>
          </Col>
          <Input
            name="username"
            group type="username"
            validate error="wrong"
            success="right"
            onChange={this.onChange}/>
          <Col sm={6}>
            <p>Email:</p>
            <Input
              name="username"
              group type="username"
              validate error="wrong"
              success="right"
              onChange={this.onChange}/>
          </Col>
          <Col sm={6}>
            <p> Phonenumber:</p>
            <Input
              name="username"
              group type="username"
              validate error="wrong"
              success="right"
              onChange={this.onChange}/>
          </Col>

          <Col sm={1}>
            <p className="RedStar">*</p>
          </Col>
          <Col sm={11}>
            <p>Date of Birth (DD/MM/YY:)</p>
          </Col>             <Input
            name="username"
            group type="username"
            validate error="wrong"
            success="right"
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
          <Button color="primary" onClick={this.signup} >Create person</Button>
        </div>
      </form>
    );
  }
};
