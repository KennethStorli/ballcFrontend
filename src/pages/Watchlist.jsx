import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Row, Grid, Col, Image, ListGroup, ListGroupItem} from 'react-bootstrap';
import {Button} from 'mdbreact'
import AnonMatches from './Anonmatches'
import '../components/UpdatePerson.css'
import './Home.css'
import './Teams.css'
import { FormattedMessage } from 'react-intl';



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
  addDefaultSrc(ev){
    ev.target.src = `images/teams/default.jpg`
  }


    render() {


    return(
      <div>
        <Grid>
          <h1>
          <FormattedMessage
          id="WATCHLIST.watchlistTitle"
          defaultMessage="Watchlist"
          />
          </h1>
          <Link to="/WatchlistEdit">
            <Button>
            <FormattedMessage
            id="WATCHLIST.editWatchlistButton"
            defaultMessage="Edit watchlist"
            />
            </Button>
          </Link>
          <Row>
            <Col xs={12} sm={6}>
              <h2>
              <FormattedMessage
              id="WATCHLIST.playerHeader"
              defaultMessage="Players"
              />
              </h2>
              <h3>BIANCA EILERTSEN</h3>
              <hr/>

              <p>Date of birth: 14/10/1996</p>
              <p> CAREER GOALS: 6</p>
            </Col>
            <Col xs={12} sm={6}>
              <h2>
              <FormattedMessage
              id="WATCHLIST.teamHeader"
              defaultMessage="Teams"
              />
              </h2>
              <h3>Liverpool</h3>
              <hr/>
              <Col xs={12} sm={6}>
                <Image src={`images/teams/Liverpool.jpg`} circle className="teamimages" onError={this.addDefaultSrc} />
              </Col>
              <Col xs={12} sm={6}>
                <br/><br/>
                <p>
                <FormattedMessage
                id="WATCHLIST.statisticsHeader"
                defaultMessage="STATISTICS"
                />
                </p>
                <div className="content">
                  <p>
                  <FormattedMessage
                  id="WATCHLIST.statisticsWin"
                  defaultMessage="WIN:"
                  />
                   6</p>
                  <p>
                  <FormattedMessage
                  id="WATCHLIST.statisticsLoss"
                  defaultMessage="LOSS:"
                  />
                   8</p>
                  <p>
                  <FormattedMessage
                  id="WATCHLIST.statisticsDraw"
                  defaultMessage="DRAW:"
                  />
                   2</p>
                </div>
              </Col>
            </Col>
          </Row>


        </Grid>
      </div>
    )
  }
}
