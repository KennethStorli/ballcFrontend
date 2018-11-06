import React,  { Component } from 'react';
import {  Col } from 'react-bootstrap';
import { Button, Input } from 'mdbreact'
import '../components/Teamlist.css'


export default class NewAddress extends Component {

    render(){
      return(
          <div>
            <br/>
            <br/>
            <br/>

            <p>Address 1:</p>
            <Input
              name="address_1"
              onChange={this.onChangeA1}
            validate/>

            <br/>
            <br/>
            <br/>


            <p>Address 2:</p>
            <Input
              name="address_2"
              onChange={this.onChangeA2}
            validate/>
            <br/>
            <br/>
            <br/>


            <p>Address 3:</p>
            <Input
              name="address_3"
              onChange={this.onChangeA3}/>
            <br/>
            <br/>
            <br/>

            <Col sm={6}>
              <p>Postal code:</p>
              <Input
                name="postal"
                onChange={this.onChangePostal}/>
            </Col>
            <Col sm={6}>
              <p>City:</p>
              <Input
                name="city"
                onChange={this.onChangeCity}/>
            </Col>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>


            <p>Country:</p>
            <Input
              name="country"
              onChange={this.onChangeCountry}/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div className="text-center">
              <Button color="primary" onClick={this.createperson} >Create new address</Button>
            </div>
          </div>

      )
    }
  }
