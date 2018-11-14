import React, { Component } from 'react'
import {Row, Grid, Col} from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';
import { ListGroup, ListGroupItem} from 'react-bootstrap';
import { Input, Button } from 'mdbreact';
import CreatePerson from '../components/CreatePerson';
import Search from '../components/Search'
import '../components/UpdatePerson.css'
import './Home.css';
import {PostData} from '../PostData';
import { FormattedMessage } from 'react-intl';
import axios from 'axios';
import '../components/Teamlist.css'

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
      contactToChange: null,
      personToEdit: null,

      contact_id:'',
      location:'',
      address_id:'',
      person_id:'',
      firstname: '',
      lastname: '',
      address_1:null,
      address_2:null,
      address_3:null,
      postal:'',
      city:'',
      country:'',
      contact_type:'',
      contact_detail:'',
      dob:''

    };

    this.onChangeFName = this.onChangeFName.bind(this)
    this.onChangeLName = this.onChangeLName.bind(this)
    this.onChangeA1 = this.onChangeA1.bind(this)
    this.onChangeA2 = this.onChangeA2.bind(this)
    this.onChangeA3 = this.onChangeA3.bind(this)
    this.onChangePostal = this.onChangePostal.bind(this)
    this.onChangeCity = this.onChangeCity.bind(this)
    this.onChangeCountry = this.onChangeCountry.bind(this)
    this.onChangeDOB = this.onChangeDOB.bind(this)
    this.onChangeContactDetail = this.onChangeContactDetail.bind(this)
    this.onChangeContactType = this.onChangeContactType.bind(this)
  }

  filterUpdate(value){
    this.setState({
      filterText: value
    })
  }

  onChangeFName(event){
    const firstnameinput = event.target.value
    this.setState({
      firstname: firstnameinput
    })
  }

  onChangeLName(event){
    const lastnameinput = event.target.value
    this.setState({
      lastname: lastnameinput
    })
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
      postal: postalinput
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

  onChangeDOB(event){
    const DOBinput = event.target.value
    this.setState({
      dob: DOBinput
    })
  }

  onChangeContactType(event){
    const contacttypeinput = event.target.value
    this.setState({
      contact_type: contacttypeinput
    })
  }

  onChangeContactDetail(event){
    const contactdetailinput = event.target.value
    this.setState({
      contact_detail: contactdetailinput
    })
  }

  componentDidMount() {
    fetch(`http://ballc-frontend-be.herokuapp.com/persons`)
    .then(result => result.json())
    .then(persons => this.setState({persons}))

   fetch(`http://ballc-frontend-be.herokuapp.com/contacts`)
    .then(result => result.json())
    .then(contact => this.setState({contact}))

  }


  updatePerson = () =>{

    let user = Object.assign({}, this.state);    //creating copy of object

    /*
      firstname: '',
      lastname: '',
      address_1:'',
      address_2:'',
      address_3:'',
      postal:'',
      city:'',
      country:'',
      contact_type:'',
      contact_detail:'',
      dob:''
    */
    var data = {
      address: user.address_id,
      person_id:user.person_id,
      first_name: user.firstname,
      last_name: user.lastname,
      date_of_birth: user.dob

    }
    axios.post('http://ballc-frontend-be.herokuapp.com/updateperson', data)
    .then(function(response){
    })
    var data2 = {
      location: user.location,
      address_id: user.address_id,
      address_line_1: user.address_1,
      address_line_2: user.address_2,
      address_line_3: user.address_3,
      postal_code: user.postal,
      city: user.city,
      country: user.country
    }
    axios.post('http://ballc-frontend-be.herokuapp.com/updateaddress', data2)
    .then(function(response){
      window.location.reload(); 
    })


  }

  delPerson = () => {

    let user = Object.assign({}, this.state);    //creating copy of object

    var data5 = {
      address_id: user.address_id,
      person_id: user.person_id
    }
    axios.post('http://ballc-frontend-be.herokuapp.com/delperson', data5)
    .then(function(response){
      window.location.reload(); 
    })
  }

  updateContact = () => {

    let user = Object.assign({}, this.state);    //creating copy of object


    var data3 = {
      person: user.person_id,
      contact_id: user.contact_id,
      contact_type: user.contact_type,
      contact_detail: user.contact_detail,
    }

    console.log(data3);
    axios.post('http://ballc-frontend-be.herokuapp.com/updatecontact', data3)
    .then(function(response){
      window.location.reload(); 
    })
  }

  addContact = () => {

    let user = Object.assign({}, this.state);    //creating copy of object

    var data4 = {
      person: user.person_id,
      contact_type: user.contact_type,
      contact_detail: user.contact_detail,
    }

    axios.post('http://ballc-frontend-be.herokuapp.com/addcontact', data4)
    .then(function(response){
      window.location.reload(); 
    })
  }

  delContact = () => {

    let user = Object.assign({}, this.state);    //creating copy of object

    var data4 = {
      person: user.person_id,
      contact_id: user.contact_id,
      contact_type: user.contact_type,
      contact_detail: user.contact_detail,
    }


    
    axios.post('http://ballc-frontend-be.herokuapp.com/delcontact', data4)
    .then(function(response){
      window.location.reload(); 
    })
  }

    render() {
      let filteredNames = this.state.persons.filter(
        (name) => {
          return name.first_name.indexOf(this.state.filterText) !== -1 || name.last_name.indexOf(this.state.filterText) !== -1
        }
      )
      let filteredContacts = []

    if(this.state.contactID.length !== 0  ){
       filteredContacts = this.state.contact.filter(
        (contact) => {
          return this.state.contactID.indexOf(contact.contact_id) !== -1
        }
      )
    }

    return(
      <div>
        <Grid>
          <Row>
            <Col xs={12} sm={6}>
              <p className="h5 text-center mb-4">
              <FormattedMessage
              id="PERSON.registeredTitle"
              defaultMessage="REGISTERED PEOPLE"
              />
              </p>
              <br/>
              <div className="Teamlist">
                <ListGroup>
                  <div>
                    {filteredNames.map(name =>
                      <ListGroupItem
                        className="listingplayer"
                        onClick={
                          e => {
                            this.setState({

                              address_id: name.address_id,
                              person_id: name.person_id,
                              firstname: name.first_name,
                              lastname: name.last_name,
                              dob:name.date_of_birth,
                              personToEdit: name,
                              contactID: name.contacts,
                            });

                            fetch(`https://ballc-frontend-be.herokuapp.com/address/${name.address}`)
                            .then(result => result.json())
                            .then(address => this.setState({
                              address,
                              location: address.location,
                              address_id: address.address_id,
                              address_1: address.address_line_1,
                              address_2: address.address_line_2,
                              address_3: address.address_line_3,
                              postal: address.postal_code,
                              city: address.city,
                              country: address.country
                            }))
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
                <Tab eventKey={1} title={
                  <FormattedMessage
                  id="PERSON.editPersonTab"
                  defaultMessage="Edit Person"
                  />
                }>
                  <form>
                    <div className="grey-text">
                      <br/>

                      <p>
                      <FormattedMessage
                      id="PERSON.firstName"
                      defaultMessage="First name:"
                      />
                      </p>
                      <Input
                        name="firstname"
                        value={(this.state.personToEdit ? this.state.firstname : '')}
                        onChange={this.onChangeFName
                        }/>

                      <p>
                      <FormattedMessage
                      id="PERSON.lastName"
                      defaultMessage="Last name:"
                      />
                      </p>
                      <Input
                        name="last_name"
                        value={(this.state.personToEdit ? this.state.lastname : '')}
                        onChange={this.onChangeLName
                        }/>


                      <p>
                      <FormattedMessage
                      id="PERSON.address1"
                      defaultMessage="Address 1:"
                      />
                      </p>
                      <Input
                        name="address_1"
                        value={(this.state.address ? this.state.address_1 : '')}
                        onChange={this.onChangeA1}
                      validate/>

                      <p><FormattedMessage
                      id="PERSON.address2"
                      defaultMessage="Address 2:"
                      /></p>
                      <Input
                        name="address_2"
                        value={(this.state.address ? this.address_2 : '' )}
                        onChange={this.onChangeA2}
                      validate/>

                      <p>
                      <FormattedMessage
                      id="PERSON.address3"
                      defaultMessage="Address 3:"
                      />
                      </p>
                      <Input
                        name="address_3"
                        value={(this.state.address ? this.state.address_3 : '')}
                        onChange={this.onChangeA3}/>
                      <Col sm={6}>
                        <p>
                        <FormattedMessage
                        id="PERSON.postalCode"
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
                        id="PERSON.city"
                        defaultMessage="City:"
                        />
                        </p>
                        <Input
                          name="city"
                          value={(this.state.address ? this.state.city : '')}
                          onChange={this.onChangeCity}/>
                      </Col>

                      <p>
                      <FormattedMessage
                      id="PERSON.country"
                      defaultMessage="Country:"
                      />
                      </p>
                      <Input
                        name="country"
                        value={(this.state.address ? this.state.country : '')}
                        onChange={this.onChangeCountry}/>


                      <br/>

                      <p>
                      <FormattedMessage
                      id="PERSON.availableContactMessage"
                      defaultMessage="Available contacts:  (Click to edit)"
                      />
                      </p>

                      <div className="ContactList">
                        <ListGroup>
                          <div>
                            {filteredContacts.map(contact =>
                              <ListGroupItem
                                className="listingplayer"
                                onClick={
                                  e =>
                                  this.setState({
                                    contactToChange: contact,
                                    contact_id: contact.contact_id,
                                    contact_type:contact.contact_type,
                                    contact_detail:contact.contact_detail,
                                  })
                                }
                                key={contact.contact_id}>
                                {contact.contact_type}{':'} {contact.contact_detail}
                              </ListGroupItem>)}
                          </div>
                        </ListGroup>
                      </div>


                      <Col sm={6}>
                        <p>
                        <FormattedMessage
                        id="PERSON.type"
                        defaultMessage="Type:"
                        />
                        </p>
                        <Input
                          name="phone"
                          value={(this.state.contactToChange ? this.state.contact_type : '')}
                          onChange={this.onChangeContactType
                          }
                        />

                      </Col>
                      <Col sm={6}>
                        <p>
                        <FormattedMessage
                        id="PERSON.contact"
                        defaultMessage="Contact:"
                        />
                        </p>
                        <Input
                          name="phone"
                          value={(this.state.contactToChange ? this.state.contact_detail : '')}
                          onChange={this.onChangeContactDetail}/>
                      </Col>
                      <div className="text-center">
                        <Button className="formbtnSave" color="primary" onClick={this.addContact} >
                        <FormattedMessage
                        id="PERSON.addButton"
                        defaultMessage="Add"
                        />
                        </Button>
                        <Button className="formbtnSave" color="primary" onClick={this.updateContact} >
                        <FormattedMessage
                        id="PERSON.saveButton"
                        defaultMessage="Save"
                        />
                        </Button>
                        <Button className="formbtnDel" color="primary" onClick={this.delContact} >
                        <FormattedMessage
                        id="PERSON.delButton"
                        defaultMessage="Del"
                        />
                        </Button>
                      </div>
                      <p>
                      <FormattedMessage
                        id="PERSON.dateOfBirth"
                        defaultMessage="Date of Birth"
                        />
                      </p>
                      <Input
                        name="username"
                        type="date"
                        value={(this.state.personToEdit ? this.state.dob : '')}
                        onChange={this.onChangeDOB}/>

                    </div>

                    <div className="text-center">
                      <Button className="formbtnSave" color="primary" onClick={this.updatePerson} >
                      <FormattedMessage
                        id="PERSON.saveEditButton"
                        defaultMessage="Save edit"
                        />
                        </Button>
                      <Button className="formbtnDel" color="primary" onClick={this.delPerson} >
                      <FormattedMessage
                        id="PERSON.deletePersonButton"
                        defaultMessage="Delete person"
                        />
                        </Button>

                    </div>
                  </form>
                </Tab>
                <Tab eventKey={2} title={
                  <FormattedMessage
                  id="PERSON.newPersonTab"
                  defaultMessage="New Person"
                  />
                }>
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
