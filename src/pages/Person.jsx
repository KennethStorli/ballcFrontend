import React, { Component } from 'react'
import {Row, Grid, Col } from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';
import { ListGroup, ListGroupItem} from 'react-bootstrap';
import { Input, Button } from 'mdbreact';
import CreatePerson from '../components/CreatePerson';
import Search from '../components/Search'
import '../components/UpdatePerson.css'



import './Home.css'

export default class Person extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: 1,
      persons:[],
      address:[],
      contact:[],
      contactID:[],
      filterText:'',
      personToEdit: 1,
    };
    this.editperson = this.editperson.bind(this)
  }

  filterUpdate(value){
    this.setState({
      filterText: value
    })
  }

  componentDidMount() {
    fetch(`http://ballc-frontend-be.herokuapp.com/persons`)
    .then(result => result.json())
    .then(persons => this.setState({persons}))

  /* fetch(`http://ballc-frontend-be.herokuapp.com/contacts`)
    .then(result => result.json())
    .then(contact => this.setState({contact}))
*/
  }

  editperson(){

  }



    render() {
      let filteredNames = this.state.persons.filter(
        (name) => {
          return name.first_name.indexOf(this.state.filterText) !== -1 || name.last_name.indexOf(this.state.filterText) !== -1
        }
      )


  /*  let filteredContacts = this.state.contact.filter(
          (contacts) => {
            return contacts.contact_id.indexOf(this.state.name.contacts) !== -1
          }
        )
*/
    return(
      <div>
        <Grid>
          <Row>
            <Col xs={12} sm={6}>
              <p className="h5 text-center mb-4">REGISTERED PEOPLE</p>
              <br/>
              <div className="Teamlist">
                <ListGroup>
                  <div>
                    {filteredNames.map(name =>
                      <ListGroupItem
                        className="listingplayer"
                        onClick={
                          e => {
                            this.setState({ personToEdit: name, contactID: name.contacts });
                            console.log(this.state.contactID);

                            fetch(`http://ballc-frontend-be.herokuapp.com/address/${name.address}`)
                            .then(result => result.json())
                            .then(address => this.setState({address}));

                            fetch(`http://ballc-frontend-be.herokuapp.com/contact/${name.contacts}`)
                            .then(result => result.json())
                            .then(contact => this.setState({contact}));
                          }
                        }
                        key={name.person_id}>
                        {name.first_name} {name.last_name}
                      </ListGroupItem>)}
                  </div>
                </ListGroup>
              </div>
              <br/>
              <Search
                filterText={this.state.filterText}
                filterUpdate={this.filterUpdate.bind(this)}
              />
            </Col>
            <Col xs={12} sm={6}>
              <Tabs defaultActiveKey={this.state.key} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Edit Person">
                  <form>
                    <div className="grey-text">
                      <br/>

                      <p>First name:</p>
                      <Input
                        name="username"
                        group type="username"
                        validate error="wrong"
                        success="right"
                        value={(this.state.personToEdit ? this.state.personToEdit.first_name : '')}
                        onChange={this.onChange}/>

                      <p>Last name:</p>
                      <Input
                        name="email"
                        group type="email"
                        validate error="wrong"
                        placeholder="Email"
                        value={(this.state.personToEdit ? this.state.personToEdit.last_name : '')}

                        onChange={this.onChange}
                      success="right"/>


                      <p>Address 1:</p>
                      <Input
                        name="address_1"
                        value={(this.state.address ? this.state.address.address_line_1 : '')}
                        onChange={this.onChange}
                      validate/>

                      <p>Address 2:</p>
                      <Input
                        name="address_2"
                        value={(this.state.address.address_line_2 ? this.state.address.address_line_2 : '')}
                        onChange={this.onChange}
                      validate/>

                      <p>Address 3:</p>
                      <Input
                        name="address_3"
                        value={(this.state.address.address_line_3 ? this.state.address.address_line_3 : '')}
                        onChange={this.onChange}/>
                      <Col sm={6}>
                        <p>Postal code:</p>
                        <Input
                          name="postal"
                          value={(this.state.address ? this.state.address.postal_code : '')}
                          onChange={this.onChange}/>
                      </Col>
                      <Col sm={6}>
                        <p>City:</p>
                        <Input
                          name="city"
                          value={(this.state.address ? this.state.address.city : '')}
                          onChange={this.onChange}/>
                      </Col>

                      <p>Country:</p>
                      <Input
                        name="country"
                        value={(this.state.address ? this.state.address.country : '')}
                        onChange={this.onChange}/>
                      <Col sm={6}>
                        <p>Type:</p>
                        <Input
                          name="email"
                          value={(this.state.contact ? this.state.contact.contact_type : '')}

                          onChange={this.onChange}/>
                      </Col>




                      <Col sm={6}>
                        <p> Phonenumber:</p>
                        <Input
                          name="phone"
                          value={(this.state.contact ? this.state.contact.contact_detail : '')}
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
                        value={(this.state.personToEdit ? this.state.personToEdit.date_of_birth : '')}
                        onChange={this.onChange}/>

                    </div>

                    <div className="text-center">
                      <Button className="formbtnSave" color="primary" onClick={this.signup} >Save edit</Button>
                      <Button className="formbtnDel" color="primary" onClick={this.signup} >Delete person</Button>

                    </div>
                  </form>
                </Tab>
                <Tab eventKey={2} title="New Person">
                  <CreatePerson />
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
