import React,  { Component } from 'react';
import { Row, Grid, Col, Tab, Tabs } from 'react-bootstrap';
import { ListGroup, ListGroupItem} from 'react-bootstrap';
import { Button, Input } from 'mdbreact'
import  NewLocation from '../components/NewLocation'

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

  }

  componentDidMount() {
    fetch(`https://ballc-frontend-be.herokuapp.com/addresses`)
    .then(result => result.json())
    .then(address => this.setState({address}))

    fetch(`https://ballc-frontend-be.herokuapp.com/locations`)
    .then(result => result.json())
    .then(locations => this.setState({locations}))
  }
    render(){
      return(
        <Grid>
          <div>
            <Row>
              <Col xs={12} sm={6}>
                <p className="h5 text-center mb-4">REGISTERED LOCATIONS</p>
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
                                selectAdd: selectedAddress.address_line_1
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
                  <Tab eventKey={1} title="Edit Address">
                    <br/>
                    <br/>
                    <p>Location name:</p>
                    <Input
                      name="loc"
                      value={(this.state.selectLoc ? this.state.location_name : '')}
                      onChange={this.onChangeA1}
                    validate/>
                    <br/>
                    <br/>
                    <br/>
                    <p>Description:</p>
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

                      <p>Current address:</p>
                      <Input
                        name="address"
                        value={(this.state.selectAdd ? this.state.selectAdd : '')}
                        onChange={this.onChangeA3}/>
                      <br/>
                      <br/>
                      <p>Select new address:</p>

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
                    <br/>
                    <br/>


                    <div className="text-center">
                      <Button className="formbtnSave" color="primary" onClick={this.updatePerson} >Save edit</Button>
                      <Button className="formbtnDel" color="primary" onClick={this.delPerson} >Delete location</Button>

                    </div>
                  </Tab>
                  <Tab eventKey={2} title="New Address">
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