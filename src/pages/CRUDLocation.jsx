import React,  { Component } from 'react';
import { Row, Grid, Col, Tab, Tabs } from 'react-bootstrap';
import { ListGroup, ListGroupItem} from 'react-bootstrap';
import { Button, Input } from 'mdbreact'
import { Link } from 'react-router-dom'
import  NewLocation from '../components/NewLocation'
import { FormattedMessage } from 'react-intl';

import {PostData} from '../PostData';



import '../components/Teamlist.css'


export default class CRUDLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: [],
      locations: [],
      selectLoc:[],
      selectedAddress:[],
      selectAdd:'',
      addressID: '',
      location_id:'',
      location_name: '',
      location_description:'',
    };

    this.onChangeA1 = this.onChangeA1.bind(this);
    this.onChangeA2 = this.onChangeA2.bind(this);

  }

  componentDidMount() {
    fetch(`https://ballc-frontend-be.herokuapp.com/addresses`)
    .then(result => result.json())
    .then(address => this.setState({address}))

    fetch(`https://ballc-frontend-be.herokuapp.com/locations`)
    .then(result => result.json())
    .then(locations => this.setState({locations}))
  }

  onChangeA1(event){
    const address1input = event.target.value
    this.setState({
      location_name: address1input
    })
  }
  
  onChangeA2(event){
    const address2input = event.target.value
    this.setState({
      location_description: address2input
    })
  }


  updateLocation = () =>{
    let user = Object.assign({}, this.state);    //creating copy of object

    let data = {
      location_id: user.location_id,
      address: user.addressID,
      name: user.location_name,
      description: user.location_description
  
    }
    PostData('/updatelocation', data);
  }

  delLocation = () =>{
    let user = Object.assign({}, this.state);    //creating copy of object

    let data = {
      location_id: user.location_id,
      address: user.addressID,
      name: user.location_name,
      description: user.location_description
  
    }
    PostData('/dellocation', data);
  }
  
    render(){
      return(
        <Grid>
          <div>
            <Row>
              <Col xs={12} sm={6}>
                <p className="h5 text-center mb-4">
                <FormattedMessage
                id="CRUDLOCATION.registerTitle"
                defaultMessage="REGISTERED LOCATIONS"
                />
                </p>
                <br/>
                <div className="Teamlist">
                  <ListGroup>
                    <div>
                      {this.state.locations.map(location =>
                        <ListGroupItem
                          className="listingplayer"
                          onClick={
                            e => {
                              this.setState({
                                selectLoc: location,
                                location_id: location.location_id,
                                location_name: location.name,
                                location_description: location.description,
                              });

                              fetch(`https://ballc-frontend-be.herokuapp.com/address/${location.address}`)
                              .then(result => result.json())
                              .then(selectedAddress => this.setState({
                                selectedAddress,
                                selectAdd: selectedAddress.address_line_1,
                                addressID: selectedAddress.address_id
                              }))
                              console.log(location.address)
                            }
                          }
                          key={location.location_id}>
                          {location.name}
                        </ListGroupItem>)}
                    </div>
                  </ListGroup>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <Tabs defaultActiveKey={this.state.key} id="uncontrolled-tab-example">
                  <Tab eventKey={1} title={
                    <FormattedMessage
                    id="CRUDLOCATION.editAddressTab"
                    defaultMessage="Edit Address"
                    />
                  }>
                    <br/>
                    <br/>
                    <p>
                    <FormattedMessage
                    id="CRUDLOCATION.locationName"
                    defaultMessage="Location name:"
                    />
                    </p>
                    <Input
                      name="loc"
                      value={(this.state.selectLoc ? this.state.location_name : '')}
                      onChange={this.onChangeA1}
                    validate/>
                    <br/>
                    <br/>
                    <br/>
                    <p>
                    <FormattedMessage
                    id="CRUDLOCATION.description"
                    defaultMessage="Description:"
                    />
                    </p>
                    <Input
                      name="des"
                      value={(this.state.selectLoc ? this.state.location_description : '' )}
                      onChange={this.onChangeA2}
                    validate/>
                    <br/>
                    <br/>
                    <hr/>
                    <br/>
                    <div className="chooseTeam">

                      <p>
                      <FormattedMessage
                      id="CRUDLOCATION.currentAddress"
                      defaultMessage="Current address:"
                      />
                    </p>
                      <Input
                        name="address"
                        value={(this.state.selectAdd ? this.state.selectAdd : '')}
                        onChange={this.onChangeA3}/>
                      <br/>
                      <br/>
                      <p>
                      <FormattedMessage
                      id="CRUDLOCATION.selectNewAddress"
                      defaultMessage="Select new address:"
                      />
                      </p>

                      <div className="TeamlistShort">
                        <ListGroup>
                          <div>
                            {this.state.address.map(address =>
                              <ListGroupItem
                                className="listingplayer"
                                onClick={
                                  e => {
                                    this.setState({
                                      selectAdd: address.address_line_1
                                    });
                                  }
                                }
                                key={address.address_id}>
                                {address.address_line_1}
                              </ListGroupItem>)}
                          </div>
                        </ListGroup>
                      </div>
                    </div>
                    <br/>

                    <Link to='/Address'>
                      <p className="newAddressLink">
                      <FormattedMessage
                      id="CRUDLOCATION.createNewAddress"
                      defaultMessage="Create new address"
                      />
                    </p>
                    </Link>
                    <br/>


                    <div className="text-center">

                      <Button className="formbtnSave" color="primary" onClick={this.updateLocation} >
                      <FormattedMessage
                      id="CRUDLOCATION.saveEdit"
                      defaultMessage="Save edit"
                      />
                      </Button>
                      <Button className="formbtnDel" color="primary" onClick={this.delLocation} >
                      <FormattedMessage
                      id="CRUDLOCATION.deleteLocation"
                      defaultMessage="Delete location"
                      />
                      </Button>


                    </div>
                  </Tab>
                  <Tab eventKey={2} title={
                    <FormattedMessage
                    id="CRUDLOCATION.newAddressTab"
                    defaultMessage="New Address"
                    />

                  }>
                    <NewLocation/>
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </div>
        </Grid>

      )
    }
  }
