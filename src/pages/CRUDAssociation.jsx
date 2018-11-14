import React,  { Component } from 'react';
import { Col, Grid, Row, ListGroup, ListGroupItem} from 'react-bootstrap';
import { Button, Input } from 'mdbreact'

import { FormattedMessage } from 'react-intl';
import axios from 'axios';

import {PostData} from '../PostData';


import '../components/Teamlist.css'


export default class CRUDAssociation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      associations: [],
      selectAss:[],
      association_id:'',
      association_name:'',
      association_description:'',

    };
    this.onChangeA1 = this.onChangeA1.bind(this);
    this.onChangeA2 = this.onChangeA2.bind(this);
  }

  componentDidMount() {
    fetch(`https://ballc-frontend-be.herokuapp.com/associations`)
    .then(result => result.json())
    .then(associations => this.setState({associations}))
  }


 onChangeA1(event){
  const address1input = event.target.value
  this.setState({
    association_name: address1input
  })
}

onChangeA2(event){
  const address2input = event.target.value
  this.setState({
    association_description: address2input
  })
}

createassociation = () =>{
  let user = Object.assign({}, this.state);    //creating copy of object

  let data = {
    name: user.association_name,
    description: user.association_description

  }
  axios.post('http://ballc-frontend-be.herokuapp.com/addassociation', data)
  .then(function(response){
    window.location.reload(); 
  })
}

updateAssociation = () =>{
  let user = Object.assign({}, this.state);    //creating copy of object

  let data = {
    association_id: user.association_id,
    name: user.association_name,
    description: user.association_description

  }
  axios.post('http://ballc-frontend-be.herokuapp.com/updateassociation', data)
  .then(function(response){
    window.location.reload(); 
  })
}

delAssociation = () =>{
  let user = Object.assign({}, this.state);    //creating copy of object

  let data = {
    association_id: user.association_id,
    name: user.association_name,
    description: user.association_description

  }
  axios.post('http://ballc-frontend-be.herokuapp.com/delassociation', data)
  .then(function(response){
    window.location.reload(); 
  })
}

    render(){
      return(
        <Grid>
          <div>
            <Row>
              <Col xs={12} sm={6}>
                <p className="h5 text-center mb-4">
                <FormattedMessage
                id="CRUDASSOCIATION.registerTitle"
                defaultMessage="REGISTERED ASSOCIATIONS"
                />
                </p>
                <br/>
                <div className="Teamlist">
                  <ListGroup>
                    <div>
                      {this.state.associations.map(ass =>
                        <ListGroupItem
                          className="listingplayer"
                          onClick={
                            e => {
                              this.setState({
                                selectAss: ass,
                                association_id: ass.association_id,
                                association_name: ass.name,
                                association_description: ass.description,
                              });
                            }
                          }
                          key={ass.association_id}>
                          {ass.name}
                        </ListGroupItem>)}
                    </div>
                  </ListGroup>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <br/>
                <br/>
                <hr/>
                <br/>
                <br/>
                <p>
                <FormattedMessage
                id="CRUDASSOCIATION.assName"
                defaultMessage="Association name:"
                />
                </p>
                <Input
                  name="loc"
                  value={(this.state.selectAss ? this.state.association_name : '')}
                  onChange={this.onChangeA1}
                validate/>
                <br/>
                <br/>
                <br/>
                <hr/>
                <br/>
                <br/>
                <p>
                <FormattedMessage
                id="CRUDASSOCIATION.description"
                defaultMessage="Description:"
                />
                </p>
                <Input
                  name="des"
                  value={(this.state.selectAss ? this.state.association_description : '' )}
                  onChange={this.onChangeA2}
                validate/>
                <br/>
                <br/>
                <hr/>
                <br/>

                <br/>
                <br/>
                <br/>

                <div className="text-center">

                  <Button color="primary" onClick={this.createassociation} >
                  <FormattedMessage
                  id="CRUDASSOCIATION.newAssButton"
                  defaultMessage="Create new association"
                  />
                  </Button>

                  <Button className="formbtnSave" color="primary" onClick={this.updateAssociation} >
                  <FormattedMessage
                  id="CRUDASSOCIATION.saveEditButton"
                  defaultMessage="Save edit"
                  />
                  </Button>

                  <Button className="formbtnDel" color="primary" onClick={this.delAssociation} >
                  <FormattedMessage
                  id="CRUDASSOCIATION.deleteAssButton"
                  defaultMessage="Delete association"
                  />
                  </Button>


                </div>

              </Col>
            </Row>
          </div>
        </Grid>

      )
    }
  }
