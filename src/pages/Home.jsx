import React, { Component } from 'react'
import {Row, Grid} from 'react-bootstrap';
import AnonMatches from './Anonmatches'
import '../components/UpdatePerson.css'
import './Home.css'
import './Teams.css'




export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

      teams:[],
      teamID:'',
      filterText:'',
    };

  }

  componentDidMount() {
    fetch(`https://ballc-frontend-be.herokuapp.com/teams`)
    .then(result => result.json())
    .then(teams => this.setState({teams}))

  }



    render() {


    return(
      <div>
        <Grid>
          <h1>Latest matches</h1>
          <Row>
            <br/>
            <br/>
            <br/>
            <br/>

            <AnonMatches/>
            {/* <UserMatches/> */}
          </Row>
        </Grid>
      </div>
    )
  }
}
