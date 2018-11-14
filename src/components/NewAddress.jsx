import React,  { Component } from 'react';
import {  Col } from 'react-bootstrap';
import { Button, Input } from 'mdbreact'
import '../components/Teamlist.css'
import {PostData} from '../PostData';
import axios from 'axios';



export default class NewAddress extends Component {

  constructor(props) {
    super(props);
    this.state = {
      address:[],
      address_1:'',
      address_2:'',
      address_3:'',
      postal_code:'',
      city:'',
      country:'',
    };

    this.onChangeA1 = this.onChangeA1.bind(this);
    this.onChangeA2 = this.onChangeA2.bind(this);
    this.onChangeA3 = this.onChangeA3.bind(this);

    this.onChangePostal = this.onChangePostal.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);


  }

  onChangeA1(event){
    let hh = event.target.value;
    this.setState({address_1: hh})
    console.log(hh);
  }
  onChangeA2(event){
    const address2input = event.target.value
    this.setState({
      address_2: address2input
    })
  }

  onChangeA3(event){
    const address3input = event.target.value
    this.setState({
      address_3: address3input
    })
  }

  onChangePostal(event){
    const postalinput = event.target.value
    this.setState({
      postal_code: postalinput
    })
  }

  onChangeCity(event){
    const cityinput = event.target.value
    this.setState({
      city: cityinput
    })
  }

  onChangeCountry(event){
    const countryinput = event.target.value
    this.setState({
      country: countryinput
    })
  }

  createaddress = () =>{
    let user = Object.assign({}, this.state);    //creating copy of object

    let data = {
      address_line_1: user.address_1,
      address_line_2: user.address_2,
      address_line_3: user.address_3,
      postal_code: user.postal_code,
      city: user.city,
      country: user.country
    }
    axios.post('http://ballc-frontend-be.herokuapp.com/addaddress', data)
    .then(function(response){
      window.location.reload(); 
    })
  }

    render(){
      return(
          <div>
            <br/>
            <br/>
            <br/>

            <p>Address 1:</p>
            <Input
              name="address_1"
              onChange={this.onChangeA1.bind(this)}
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
                name="postal_code"
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
              <Button color="primary" onClick={this.createaddress} >Create new address</Button>
            </div>
          </div>

      )
    }
  }
