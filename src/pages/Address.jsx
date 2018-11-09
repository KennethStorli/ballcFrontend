import React,  { Component } from 'react';
import { Row, Grid, Col, Tab, Tabs } from 'react-bootstrap';
import { ListGroup, ListGroupItem} from 'react-bootstrap';
import { Button, Input } from 'mdbreact'
import  NewAddress from '../components/NewAddress'
import '../components/Teamlist.css'

import { FormattedMessage } from 'react-intl';

import {PostData} from '../PostData';



export default class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address:[],
      location:'',
      address_id:'',
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
    const address1input = event.target.value
    this.setState({
      address_1: address1input
    })
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

  componentDidMount() {
    fetch(`https://ballc-frontend-be.herokuapp.com/addresses`)
    .then(result => result.json())
    .then(address => this.setState({address}))
  }

  updateAddress = () =>{
    let user = Object.assign({}, this.state);    //creating copy of object

    let data = {
      address_id: user.address_id,
      address_line_1: user.address_1,
      address_line_2: user.address_2,
      address_line_3: user.address_3,
      postal_code: user.postal_code,
      city: user.city,
      country: user.country
    }
    PostData('/updateaddress', data);
  }

  delAddress = () =>{
    let user = Object.assign({}, this.state);    //creating copy of object

    let data = {
      address_id: user.address_id,
      address_line_1: user.address_1,
      address_line_2: user.address_2,
      address_line_3: user.address_3,
      postal_code: user.postal_code,
      city: user.city,
      country: user.country
    }
    PostData('/deladdress', data);
  }
    render(){

      return(
        <Grid>
          <div>
            <Row>
              <Col xs={12} sm={6}>
                <p className="h5 text-center mb-4">
                <FormattedMessage
                id="ADDRESS.registerMes"
                defaultMessage="REGISTERED ADDRESSES"
                />
                </p>
                <br/>
                <div className="Teamlist">
                  <ListGroup>
                    <div>
                      {this.state.address.map(address =>
                        <ListGroupItem
                          className="listingplayer"
                          onClick={
                            e => {
                              this.setState({
                                location:address.location,
                                address_id: address.address_id,
                                address_1: address.address_line_1,
                                address_2: address.address_line_2,
                                address_3: address.address_line_3,
                                postal_code: address.postal_code,
                                city: address.city,
                                country: address.country

                              });

                            }
                          }
                          key={address.address_id}>
                          {address.address_line_1}
                        </ListGroupItem>)}
                    </div>
                  </ListGroup>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <Tabs defaultActiveKey={this.state.key} id="uncontrolled-tab-example">
                  <Tab eventKey={1} title="Edit Address">

                    <br/>
                    <br/>
                    <br/>
                    <p>
                    <FormattedMessage
                    id="ADDRESS.address1"
                    defaultMessage="Address 1:"
                    />
                    </p>
                    <Input
                      name="address_1"
                      value={(this.state.address ? this.state.address_1 : '')}
                      onChange={this.onChangeA1}
                    validate/>
                    <br/>
                    <br/>
                    <br/>
                    <p>
                    <FormattedMessage
                    id="ADDRESS.address2"
                    defaultMessage="Address 2:"
                    />
                    </p>
                    <Input
                      name="address_2"
                      value={(this.state.address ? this.address_2 : '' )}
                      onChange={this.onChangeA2}
                    validate/>
                    <br/>
                    <br/>
                    <br/>
                    <p>
                    <FormattedMessage
                    id="ADDRESS.address3"
                    defaultMessage="Address 3:"
                    />
                    </p>
                    <Input
                      name="address_3"
                      value={(this.state.address ? this.state.address_3 : '')}
                      onChange={this.onChangeA3}/>
                    <br/>
                    <br/>
                    <br/>
                    <Col sm={6}>
                      <p>
                      <FormattedMessage
                      id="ADDRESS.postalCode"
                      defaultMessage="Postal code:"
                      />
                      </p>
                      <Input
                        name="postal"
                        value={(this.state.address ? this.state.postal_code : '')}
                        onChange={this.onChangePostal}/>
                    </Col>
                    <Col sm={6}>
                      <p>
                      <FormattedMessage
                      id="ADDRESS.city"
                      defaultMessage="City:"
                      />
                      </p>
                      <Input
                        name="city"
                        value={(this.state.address ? this.state.city : '')}
                        onChange={this.onChangeCity}/>
                    </Col>
                    <br/>
                    <br/>
                    <br/>

                    <br/>
                    <br/>
                    <br/>
                    <p>
                    <FormattedMessage
                      id="ADDRESS.country"
                      defaultMessage="Country:"
                      />
                      </p>
                    <Input
                      name="country"
                      value={(this.state.address ? this.state.country : '')}
                      onChange={this.onChangeCountry}/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>


                    <div className="text-center">

                      <Button className="formbtnSave" color="primary" onClick={this.updateAddress} >
                      <FormattedMessage
                      id="ADDRESS.saveEdit"
                      defaultMessage="Save edit"
                      />
                      </Button>
                      <Button className="formbtnDel" color="primary" onClick={this.delAddress} >
                      <FormattedMessage
                      id="ADDRESS.deleteAddr"
                      defaultMessage="Delete address"
                      />
                      </Button>


                    </div>
                  </Tab>
                  <Tab eventKey={2} title={
                    <FormattedMessage
                    id="ADDRESS.tabNewAddress"
                    defaultMessage="New Address"
                    />
                  }
                  //{intl.formatMessage({id: 'ADDRESS.tabNewAddress', defaultMessage: 'New Address'})}
                  >
                    <NewAddress/>
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </div>
        </Grid>

      )
    }
  }

