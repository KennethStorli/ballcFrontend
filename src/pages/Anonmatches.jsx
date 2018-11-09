import React, { Component } from 'react'
import {Row, Grid, Col, Image } from 'react-bootstrap';
import '../components/UpdatePerson.css'
import './Home.css'
import './Teams.css'




export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches:[],

    };

  }
  addDefaultSrc(ev){
    ev.target.src = `images/teams/default.jpg`
  }

  componentDidMount() {
    fetch(`https://ballc-frontend-be.herokuapp.com/matchlist`)
    .then(result => result.json())
    .then(matches => this.setState({matches}))

  }



    render() {

    return(
      <div>
        <Grid>
          <Row>
            {this.state.matches.map(team =>
              <div>
                <Col xs={12} sm={4} key={team.home_team}>
                  <h1 className="teamnames">{team.home_team}</h1>
                  <Image src={`images/teams/${team.home_team}.jpg`} circle className="teamimages" onError={this.addDefaultSrc} />
                </Col>
                <Col xs={12} sm={4}>
                  <br/><br/><br/>
                  <h3> VS </h3>
                  <h3>{team.date}</h3>
                </Col>
                <Col xs={12} sm={4} key={team.away_team}>
                  <h1 className="teamnames">{team.away_team}</h1>
                  <Image src={`images/teams/${team.away_team}.jpg`} circle className="teamimages" onError={this.addDefaultSrc} />
                </Col>
              </div>
            )}
          </Row>
        </Grid>
      </div>
    )
  }
}
