import React, { Component} from 'react';
import { Input } from 'mdbreact'
import { Grid, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Button } from 'mdbreact'
import DayPicker from 'react-day-picker';
import { FormattedMessage } from 'react-intl';

import 'react-day-picker/lib/style.css';

import './Teams.css'



export default class EditSeason extends Component{
    constructor(props) {
      super(props);

      this.state = {
        seasons:[],
        selectedSeason:[],
        selectedDayStart: undefined,
        selectedDayEnd:undefined,
        selectedDayStartString:'',
        selectedDayEndString:'',
        seasonName:'',
        seasonDescription:'',

      };
  }

  componentDidMount() {
    fetch(`https://ballc-frontend-be.herokuapp.com/seasons`)
    .then(result => result.json())
    .then(seasons => this.setState({seasons}))
  }

  onChangeName(event){
    const name = event.target.value
    this.setState({
      seasonName: name
    })
  }

  onChangeDescription(event){
    const description = event.target.value
    this.setState({
      seasonDescription: description
    })
  }


    render() {

      return (
          <div>
            <Grid>
              <br/>              <br/>
              
              <Row>
                <Col xs={12} sm={6}>
                  <p className="h5 text-center mb-4">
                    <FormattedMessage
                    id="EDITSEASON.registerTitle"
                    defaultMessage="REGISTERED SEASONS"
                    />
                    </p>
                  <br/>
                  <div className="Teamlist">
                    <ListGroup>
                      <div>
                        {this.state.seasons.map(season =>
                          <ListGroupItem
                            className="listingplayer"
                            onClick={
                              e => {
                                this.setState({
                                  selectedSeason: season,
                                  selectedDayStartString:season.start_date,
                                  selectedDayEndString:season.end_date,
                                  seasonName: season.name,
                                  seasonDescription:season.description,
                                });
                              }
                            }
                            key={season.season_id}>
                            {season.name}
                          </ListGroupItem>)}
                      </div>
                    </ListGroup>
                  </div>
                </Col>
                <Col xs={12} sm={6}>

                  <Col xs={12} sm={6}>
                    <p>
                    <FormattedMessage
                    id="EDITSEASON.name"
                    defaultMessage="Name:"
                    />
                    </p>
                    <Input
                      name="Name"
                      value={(this.state.selectedSeason ? this.state.seasonName : '')}
                      onChange={this.onChangeName.bind(this)}
                    />
                  </Col>
                  <Col xs={12} sm={6}>
                    <p>
                    <FormattedMessage
                    id="EDITSEASON.description"
                    defaultMessage="Description:"
                    />
                    </p>
                    <Input
                      name="Description"
                      value={(this.state.selectedSeason ? this.state.seasonDescription : '')}
                      onChange={this.onChangeDescription.bind(this)}
                    />
                  </Col>
                  <div className="buffer"/>
                  <div className="buffer"/>

                  <Col xs={12} sm={6}>
                    <p>
                    <FormattedMessage
                    id="EDITSEASON.startMessage"
                    defaultMessage="Start of season"
                    />
                    </p>
                    <hr/>
                    <Input
                      name="Description"
                      value={(this.state.selectedSeason ? this.state.selectedDayEndString : '')}
                    />
                  </Col>

                  <Col xs={12} sm={6}>
                    <p>
                    <FormattedMessage
                    id="EDITSEASON.endMessage"
                    defaultMessage="End of season"
                    />
                    </p>
                    <hr/>
                    <Input
                      name="Description"
                      value={(this.state.selectedSeason ? this.state.selectedDayEndString : '')}
                    />

                  </Col>
                  <div className="buffer"/>
                  <div className="buffer"/>
                  <div className="buffer"/>

                  <div className="text-center">
                    <Button className="formbtnSave" color="primary" onClick={this.updatePerson} >
                    <FormattedMessage
                    id="EDITSEASON.saveEditButton"
                    defaultMessage="Save Edit"
                    />
                    </Button>
                    <Button className="formbtnDel" color="primary" onClick={this.delPerson} >
                    <FormattedMessage
                    id="EDITSEASON.deleteSeasonButton"
                    defaultMessage="Delete Season"
                    />
                    </Button>

                  </div>

                </Col>

              </Row>

              <div className="buffer"/>


            </Grid>
          </div>

          );
          }

          }
