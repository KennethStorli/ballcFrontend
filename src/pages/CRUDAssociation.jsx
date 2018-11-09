import React,  { Component } from 'react';
import { Col, Grid, Row, ListGroup, ListGroupItem} from 'react-bootstrap';
import { Button, Input } from 'mdbreact'
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
  PostData('/addassociation', data);
}

updateAssociation = () =>{
  let user = Object.assign({}, this.state);    //creating copy of object

  let data = {
    association_id: user.association_id,
    name: user.association_name,
    description: user.association_description

  }
  PostData('/updateassociation', data);
}

delAssociation = () =>{
  let user = Object.assign({}, this.state);    //creating copy of object

  let data = {
    association_id: user.association_id,
    name: user.association_name,
    description: user.association_description

  }
  PostData('/delassociation', data);
}

    render(){
      return(
        <Grid>
          <div>
            <Row>
              <Col xs={12} sm={6}>
                <p className="h5 text-center mb-4">REGISTERED ASSOCIATIONS</p>
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
                <p>Association name:</p>
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
                <p>Description:</p>
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
                  <Button color="primary" onClick={this.createassociation} >Create new association</Button>

                  <Button className="formbtnSave" color="primary" onClick={this.updateAssociation} >Save edit</Button>
                  <Button className="formbtnDel" color="primary" onClick={this.delAssociation} >Delete association</Button>

                </div>

              </Col>
            </Row>
          </div>
        </Grid>

      )
    }
  }
