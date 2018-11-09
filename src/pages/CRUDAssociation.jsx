import React,  { Component } from 'react';
import { Col, Grid, Row, ListGroup, ListGroupItem} from 'react-bootstrap';
import { Button, Input } from 'mdbreact'

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

  }

  componentDidMount() {
    fetch(`https://ballc-frontend-be.herokuapp.com/associations`)
    .then(result => result.json())
    .then(associations => this.setState({associations}))
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
                  <Button color="primary" onClick={this.createperson} >Create new association</Button>

                  <Button className="formbtnSave" color="primary" onClick={this.updatePerson} >Save edit</Button>
                  <Button className="formbtnDel" color="primary" onClick={this.delPerson} >Delete association</Button>

                </div>

              </Col>
            </Row>
          </div>
        </Grid>

      )
    }
  }
