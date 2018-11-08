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

import '../components/Teamlist.css'

import './Home.css'

export default class Person extends Component {

  constructor(props) {
    super(props);
    this.state = {
      goaltypes:[],
      goalname:'',
      goalID:'',

    };

    this.onChangeGoalName = this.onChangeGoalName.bind(this)
  }


  onChangeGoalName(event){
    const goalname = event.target.value
    this.setState({
      goalname: goalname
    })
  }

  componentDidMount() {
    fetch(`https://ballc-frontend-be.herokuapp.com/goaltypes`)
    .then(result => result.json())
    .then(goaltypes => this.setState({goaltypes}))

  }

    render() {

    return(
      <div>
        <Grid>
          <Row>
            <Col xs={12} sm={6}>
              <p className="h5 text-center mb-4">REGISTERED GOALTYPES</p>
              <br/>
              <div className="Teamlist">
                <ListGroup>
                  <div>
                    {this.state.goaltypes.map(goaltypes =>
                      <ListGroupItem
                        className="listingplayer"
                        onClick={
                          e => {
                            this.setState({
                              goalname:goaltypes.type,
                              goalID:goaltypes.goal_type_id,
                            });
                          }
                        }

                        key={goaltypes.goal_type_id}>
                        {goaltypes.type}
                      </ListGroupItem>)}
                  </div>
                </ListGroup>
              </div>
              <br/>
            </Col>
            <Col xs={12} sm={6}>
              <p className="h5 text-center mb-4">EDIT GOALTYPE</p>

              <br/><br/><br/><br/><br/><br/><br/><br/>

              <Input
                name="goalname"
                value={(this.state.goalname ? this.state.goalname : '')}
                onChange={this.onChangeGoalName
                }/>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              <Button className="formbtnSave" color="primary" onClick={this.updatePerson} >Save edit</Button>
              <Button className="formbtnDel" color="primary" onClick={this.delPerson} >Delete goaltype</Button>

            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
