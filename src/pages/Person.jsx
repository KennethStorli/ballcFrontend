import React, { Component } from 'react'
import {Row, Grid, Col } from 'react-bootstrap';
import { ListGroup, ListGroupItem} from 'react-bootstrap';

import CRUDPerson from '../components/CRUDPerson';
import Shortlist from '../components/Shortlist';
import Search from '../components/Search'


import './Home.css'

export default class Person extends Component {

  constructor(props) {
    super(props);
    this.state = {
      persons:[],
      filterText:'',
    };
  }

  filterUpdate(value){
    this.setState({
      filterText: value
    })
  }

  componentDidMount() {
    fetch(`http://ballc-backend-api.herokuapp.com/persons`)
    .then(result => result.json())
    .then(persons => this.setState({persons}))
  }

  editplayer(){
    console.log('Youre editing a person')
  }



    render() {
      let filteredNames = this.state.persons.filter(
        (name) => {
          return name.first_name.indexOf(this.state.filterText) !== -1 || name.last_name.indexOf(this.state.filterText) !== -1
        }
      )
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
                      <ListGroupItem className="listingplayer" onClick={this.editplayer} key={name.person_id}>{name.first_name} {name.last_name} </ListGroupItem>)}
                  </div>
                </ListGroup>
              </div>
              <br/>
              <Search
                filterText={this.state.filterText}
                filterUpdate={this.filterUpdate.bind(this)}
              />
            </Col>
            <CRUDPerson
              editplayer={this.state.editplayer}
            />
          </Row>
        </Grid>
      </div>
    )
  }
}
