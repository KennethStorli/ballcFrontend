import React, { Component } from 'react';
import {Glyphicon, ListGroup, ListGroupItem} from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';
import { Input, Button } from 'mdbreact';
import { Row, Col, Image } from 'react-bootstrap';
import './UpdatePerson.css'

export default class UpdatePerson extends Component  {
//REMEBER TO PUT A <ROW> INFRONT OF THE CALL, PLS

  render() {
    return(
      <form>
        <div className="grey-text">
          <br/>

          <p>First name:</p>
          <Input
            name="username"
            group type="username"
            validate error="wrong"
            success="right"
            onChange={this.onChange}/>

          <p>Last name:</p>
          <Input
            name="email"
            group type="email"
            validate error="wrong"
            placeholder="Email"
            onChange={this.onChange}
          success="right"/>


          <p>Address 1:</p>
          <Input
            name="password"
            group type="password"
            onChange={this.onChange}
          validate/>

          <p>Address 2:</p>
          <Input
            name="confpassword"
            group type="password"
            onChange={this.onChange}
          validate/>

          <p>Address 3:</p>
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

          <p>Country:</p>
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

          <br/>
          <br/>
          <br/>
          <br/>

          <p>Date of Birth (DD/MM/YY)</p>
          <Input
            name="username"
            group type="username"
            validate error="wrong"
            success="right"
            onChange={this.onChange}/>

        </div>

        <div className="text-center">
          <Button className="formbtnSave" color="primary" onClick={this.signup} >Save edit</Button>
          <Button className="formbtnDel" color="primary" onClick={this.signup} >Delete person</Button>

        </div>
      </form>

    );
  }
};
