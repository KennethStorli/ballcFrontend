import React, { Component} from 'react';
import { Input } from 'mdbreact'
import { Grid, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Button } from 'mdbreact'
import DayPicker from 'react-day-picker';

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
              <h1>Edit season</h1>
              <Row>
                <Col xs={12} sm={6}>
                  <p className="h5 text-center mb-4">REGISTERED SEASONS</p>
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
                    <p>Name:</p>
                    <Input
                      name="Name"
                      value={(this.state.selectedSeason ? this.state.seasonName : '')}
                      onChange={this.onChangeName.bind(this)}
                    />
                  </Col>
                  <Col xs={12} sm={6}>
                    <p>Description:</p>
                    <Input
                      name="Description"
                      value={(this.state.selectedSeason ? this.state.seasonDescription : '')}
                      onChange={this.onChangeDescription.bind(this)}
                    />
                  </Col>
                  <div className="buffer"/>
                  <div className="buffer"/>

                  <Col xs={12} sm={6}>
                    <p>Start of season</p>
                    <hr/>
                    <Input
                      name="Description"
                      value={(this.state.selectedSeason ? this.state.selectedDayEndString : '')}
                    />
                  </Col>

                  <Col xs={12} sm={6}>
                    <p>End of season</p>
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
                    <Button className="formbtnSave" color="primary" onClick={this.updatePerson} >Save edit</Button>
                    <Button className="formbtnDel" color="primary" onClick={this.delPerson} >Delete Season</Button>

                  </div>

                </Col>

              </Row>

              <div className="buffer"/>


            </Grid>
          </div>

          );
          }

          }
