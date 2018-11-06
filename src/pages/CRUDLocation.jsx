import React,  { Component } from 'react';
import { Row, Grid, Col, Checkbox, Tab, Tabs } from 'react-bootstrap';
import { ListGroup, ListGroupItem, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import { Button, Input } from 'mdbreact'
import  NewAddress from '../components/NewAddress'
import '../components/Teamlist.css'


export default class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: [],
      locations: [],
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
                                location_id: location.location_id,
                                location_name: location.name,
                                location_description: location.description,
                                address_id: location.address_id
                              });

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
                    <br/>
                    <p>Address 1:</p>
                    <Input
                      name="address_1"
                      value={(this.state.address ? this.state.address_1 : '')}
                      onChange={this.onChangeA1}
                    validate/>
                    <br/>
                    <br/>
                    <br/>
                    <p>Address 2:</p>
                    <Input
                      name="address_2"
                      value={(this.state.address ? this.address_2 : '' )}
                      onChange={this.onChangeA2}
                    validate/>
                    <br/>
                    <br/>
                    <br/>
                    <p>Address 3:</p>
                    <Input
                      name="address_3"
                      value={(this.state.address ? this.state.address_3 : '')}
                      onChange={this.onChangeA3}/>
                    <br/>
                    <br/>
                    <br/>
                    <Col sm={6}>
                      <p>Postal code:</p>
                      <Input
                        name="postal"
                        value={(this.state.address ? this.state.postal_code : '')}
                        onChange={this.onChangePostal}/>
                    </Col>
                    <Col sm={6}>
                      <p>City:</p>
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
                    <p>Country:</p>
                    <Input
                      name="country"
                      value={(this.state.address ? this.state.country : '')}
                      onChange={this.onChangeCountry}/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>


                    <div className="text-center">
                      <Button className="formbtnSave" color="primary" onClick={this.updatePerson} >Save edit</Button>
                      <Button className="formbtnDel" color="primary" onClick={this.delPerson} >Delete address</Button>

                    </div>
                  </Tab>
                  <Tab eventKey={2} title="New Address">
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
