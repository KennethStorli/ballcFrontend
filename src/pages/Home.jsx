import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl';
import {Row, Grid} from 'react-bootstrap';
import AnonMatches from './Anonmatches'
import UserMatches from './Usermatches'

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
      showUser:false
    };

  }

  componentDidMount() {
    fetch(`https://ballc-frontend-be.herokuapp.com/teams`)
    .then(result => result.json())
    .then(teams => this.setState({teams}))

    var userData = localStorage.getItem("userData");
    var userString = JSON.parse(userData);
    if(userString == null){
      console.log("NOT LOGGED IN");
    }else{
      this.setState({showUser: true});
    }

  }



    render() {


    return(
      <div>
        <Grid>

          <h1>
          <FormattedMessage
          id="HOME.latestTitle"
          defaultMessage="Latest matches"
          />
          </h1>
          <Row>
            <br/>
            <br/>
            <br/>
            <br/>

            { this.state.showUser ?  <UserMatches/> : <AnonMatches/>}
            
            
          </Row>

        </Grid>
      </div>
    )
  }
}
