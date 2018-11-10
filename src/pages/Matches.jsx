import React, { Component } from 'react'
import {Row, Grid, Col, Image } from 'react-bootstrap';
import '../components/UpdatePerson.css'
import './Home.css'
import './Teams.css'

import { FormattedMessage } from 'react-intl';


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
            <h2>
            <FormattedMessage
            id="MATCHES.allMatchesTitle"
            defaultMessage="All Matches"
            />
            </h2>
            {this.state.matches.slice(0,10).map(team =>
              <div className="matchmappingAnon">
                <legend>
                  <Col xs={12} sm={4} key={team.home_team}>
                    <h1 className="teamnames">{team.home_team}</h1>
                    <Image src={`images/teams/${team.home_team}.jpg`} circle className="teamimages" onError={this.addDefaultSrc} />
                    <h3>{team.home_result}</h3>
                  </Col>
                  <Col xs={12} sm={4}>

                    <h3 className="greytext">
                    <FormattedMessage
                    id="MATCHES.seasonHeader"
                    defaultMessage="Season"
                    />
                     {team.season}</h3>
                    <br/>
                    <h2>{team.home_score} {String.fromCharCode(160)}{String.fromCharCode(160)}{String.fromCharCode(160)}{String.fromCharCode(160)}
                      <FormattedMessage
                      id="MATCHES.vs"
                      defaultMessage="VS"
                      />
                      {String.fromCharCode(160)}{String.fromCharCode(160)}{String.fromCharCode(160)}{String.fromCharCode(160)}  {team.away_score} </h2>
                    <br/>
                    <h3 className="greytext">{team.date}</h3>
                  </Col>
                  <Col xs={12} sm={4} key={team.away_team}>
                    <h1 className="teamnames">{team.away_team}</h1>
                    <Image src={`images/teams/${team.away_team}.jpg`} circle className="teamimages" onError={this.addDefaultSrc} />
                    <h3>{team.away_result}</h3>
                  </Col>
                </legend>
                <hr/>
                <br/><br/><br/><br/><br/><br/><br/>


              </div>
            )}
          </Row>
        </Grid>
      </div>
    )
  }
}
