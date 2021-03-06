import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Row, Grid, Col, Image } from 'react-bootstrap';
import SearchSmall from '../components/SearchSmall'
import '../components/UpdatePerson.css'
import './Home.css'
import './Teams.css'
import { FormattedMessage } from 'react-intl';



export default class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {

      teams:[],
      teamID:'',
      filterText:'',
    };

  }

  filterUpdate(value){
    this.setState({
      filterText: value
    })
  }


  componentDidMount() {
    fetch(`https://ballc-frontend-be.herokuapp.com/teams`)
    .then(result => result.json())
    .then(teams => this.setState({teams}))
    console.log(this.state.teams)

  }

  addDefaultSrc(ev){
    ev.target.src = `images/teams/default.jpg`
  }

    render() {

      let filteredTeams = this.state.teams.filter(
        (team) => {
          return team.teamName.indexOf(this.state.filterText) !== -1 || team.teamName.toLowerCase().indexOf(this.state.filterText) !== -1
        }
      )

    return(
      <div>
        <Grid>
          <Row>
            <br/>
            <br/>
            <Col xs={12} sm={4}>
            </Col>
            <Col xs={12} sm={4}>
              <SearchSmall
                filterText={this.state.filterText}
                filterUpdate={this.filterUpdate.bind(this)}
              />
            </Col>
            <Col xs={12} sm={4}>
            </Col>
            <div className="buffer"></div>
            {filteredTeams.map(team =>
              <Col xs={12} sm={3} key={team.team_id}>

                <Link to={{
                  pathname:`./Teaminfo/${team.teamName}`,
                  state: ({
                    id: team.team_id,

                  }) }}>
                  <div
                  className="allTeams">
                    {/* <Image src={`images/teams/${team.teamName}.jpg`} circle className="teamimages" /> */}
                    <Image src={`images/teams/${team.teamName}.jpg`} circle className="teamimages" onError={this.addDefaultSrc} />
                    <h1 className="teamnames">{team.teamName}</h1>
                  </div>
                </Link>
              </Col>
            )}
              <br/>
          </Row>
        </Grid>
      </div>
    )
  }
}
