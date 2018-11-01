import React, { Component } from 'react'
import {Row, Grid, Col } from 'react-bootstrap';
import { ListGroup, ListGroupItem} from 'react-bootstrap';
import { Input, Button } from 'mdbreact';
import SearchSmall from '../components/SearchSmall'
import '../components/UpdatePerson.css'
import './Home.css'



export default class Team extends Component {


  render() {

    return(
      <div>
        <Grid>
          <Row>
            <Col xs={12} sm={4}>
              <br/>

              <p className="h5 text-center mb-4">REGISTERED TEAMS</p>
              <div className="Teamlist">
                <ListGroup>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                </ListGroup>
              </div>
              <br/>
              <SearchSmall
              />

            </Col>
            <Col xs={12} sm={4}>

              <br/>

              <p className="h5 text-center mb-4">EDIT/CREATE TEAMS</p>
              <form>
                <div className="grey-text">
                  <br/>
                  <p>Team name:</p>
                  <Input/>
                </div>
                <br/>
                <hr/>
                <br/>
                <div className="grey-text">
                  <br/>
                  <p>Association:</p>
                  <Input/>
                </div>
                <br/>
                <hr/>
                <br/>
                <div className="grey-text">
                  <br/>
                  <p>Location:</p>
                  <Input/>
                </div>
                <br/>
                <hr/>
                <br/>
                <div className="grey-text">
                  <br/>
                  <p>Coach:</p>
                  <Input/>
                </div>
                <br/>
                <hr/>
                <br/>
                <div className="grey-text">
                  <br/>
                  <p>Owner:</p>
                  <Input/>
                </div>


              </form>

            </Col>
            <Col xs={12} sm={4}>
              <br/>

              <p className="h5 text-center mb-4">REGISTERED ASSOCIATIONS</p>
              <div className="divlist">
                <ListGroup>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>

                </ListGroup>
              </div>
              <br/>

              <p className="h5 text-center mb-4">REGISTERED LOCATIONS</p>
              <div className="divlist">
                <ListGroup>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>

                </ListGroup>
              </div>
              <br/>

              <p className="h5 text-center mb-4">REGISTERED COACHES</p>
              <div className="divlist">
                <ListGroup>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>

                </ListGroup>
              </div>
              <br/>

              <p className="h5 text-center mb-4">REGISTERED OWNERS</p>
              <div className="divlist">
                <ListGroup>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>
                  <ListGroupItem> TEST </ListGroupItem>

                </ListGroup>
              </div>
              <div className="text-center">
                <Button className="formbtnSave" color="primary" onClick={this.signup}>Save </Button>
                <Button className="formbtnSave" color="primary" onClick={this.signup}>Create </Button>
                <Button className="formbtnDel" color="primary" onClick={this.signup}>Delete </Button>
              </div>

            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
