import React, { Component } from 'react'
import {Row, Grid, Col} from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';
import { ListGroup, ListGroupItem} from 'react-bootstrap';
import { Input, Button } from 'mdbreact';
import '../components/UpdatePerson.css'
import './Home.css';
import {PostData} from '../PostData'
import { FormattedMessage } from 'react-intl';
import '../components/Teamlist.css'

import './Home.css'

export default class Person extends Component {

  constructor(props) {
    super(props);
    this.state = {
      goaltypes:[],
      goalname:'',
      newgoalname:'',

      goalID:'',

    };

    this.onChangeGoalName = this.onChangeGoalName.bind(this)
    this.onChangeNewGoalName = this.onChangeNewGoalName.bind(this)

  }


  onChangeGoalName(event){
    const goalname = event.target.value
    this.setState({
      goalname: goalname
    })
  }
  onChangeNewGoalName(event){
    const goalname = event.target.value
    this.setState({
      newgoalname: goalname
    })
  }

  componentDidMount() {
    fetch(`https://ballc-frontend-be.herokuapp.com/goaltypes`)
    .then(result => result.json())
    .then(goaltypes => this.setState({goaltypes}))

  }

  addGoalType = () =>{
    let user = Object.assign({}, this.state);    //creating copy of object

    var data = {

      type: user.newgoalname
    }

    PostData('addgoaltype', data)
  }
    render() {

    return(
      <div>
        <Grid>
          <Row>
            <Col xs={12} sm={6}>
              <p className="h5 text-center mb-4">
              <FormattedMessage
              id="GOALTYPES.registerMes"
              defaultMessage="REGISTERED GOALTYPES"
              />
              </p>
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
              <Tabs defaultActiveKey={1}>
                <Tab eventKey={1} title={
                  <FormattedMessage
                  id="GOALTYPES.editGoalTypesTab"
                  defaultMessage="Edit Goaltype"
                  />
                }>
                  <p className="h5 text-center mb-4">
                  <FormattedMessage
                  id="GOALTYPES.editGoalTypes"
                  defaultMessage="EDIT GOALTYPE"
                  />
                  </p>

                  <br/><br/><br/><br/><br/><br/><br/><br/>

                  <Input
                    name="goalname"
                    value={(this.state.goalname ? this.state.goalname : '')}
                    onChange={this.onChangeGoalName
                    }/>
                  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                  <Button className="formbtnSave" color="primary" onClick={this.updatePerson} >
                  <FormattedMessage
                  id="GOALTYPES.saveEditButton"
                  defaultMessage="Save edit"
                  />
                  </Button>
                  <Button className="formbtnDel" color="primary" onClick={this.delPerson} >
                  <FormattedMessage
                  id="GOALTYPES.deleteButton"
                  defaultMessage="Delete goaltype"
                  />
                  </Button>

                </Tab>
                <Tab eventKey={2} title={
                  <FormattedMessage
                  id="GOALTYPES.newGoalTypesTab"
                  defaultMessage="New Goaltype"
                  />
                }>
                  <p className="h5 text-center mb-4">
                  <FormattedMessage
                  id="GOALTYPES.newGoalTypes"
                  defaultMessage="NEW GOALTYPE"
                  />
                  </p>

                  <br/><br/><br/><br/><br/><br/><br/><br/>

                  <Input
                    name="goalname"
                    value={(this.state.newgoalname ? this.state.newgoalname : '')}
                    onChange={this.onChangeNewGoalName
                    }/>
                  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                  <Button className="formbtnSave" color="primary" onClick={this.addGoalType} >
                  <FormattedMessage
                  id="GOALTYPES.newGoalButton"
                  defaultMessage="New Goaltype"
                  />
                  </Button>
                </Tab>
              </Tabs>

            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
