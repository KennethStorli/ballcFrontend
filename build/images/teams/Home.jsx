import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Button } from 'react-bootstrap';

import './Home.css'

export default class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      redirect: false
    }
    this.logout = this.logout.bind(this);
  }

  componentWillMount(){
    if(sessionStorage.getItem("userData")){
      console.log("Call User Feed");
    }
    else {
      this.setState({redirect: true});
    }
  }

  logout(){
    sessionStorage.setItem("userData", '');
    sessionStorage.clear();
    this.setState({redirect: true});


  }

  render(){
  /*  if(this.state.redirect){
      return(<Redirect to={'/'}/>)
    }*/
    return(
      <div>
        <Grid>
          <Jumbotron>
            <h2> THIS IS A TEST FOR REACT </h2>
            <p> SITE WILL BE USED FOR THE CASE PROJECT BALLC </p>
            <Link to="/Teams">
              <Button bsStyle="primary"> CHECK OUT OUR TEAMS</Button>
            </Link>
          </Jumbotron>
        </Grid>
      </div>
    )
  }
}
