import React, { Component} from 'react';
import { Input } from 'mdbreact'
import { Grid, Row, Col } from 'react-bootstrap'
import DayPicker from 'react-day-picker';
import {Button} from 'mdbreact'
import { FormattedMessage } from 'react-intl';

import {PostData} from '../PostData';


import 'react-day-picker/lib/style.css';

import './Teams.css'



export default class NewSeason extends Component{
    constructor(props) {
      super(props);
      this.handleDayClickStart = this.handleDayClickStart.bind(this);
      this.handleDayClickEnd = this.handleDayClickEnd.bind(this);

      this.state = {
        selectedDayStart: undefined,
        selectedDayEnd:undefined,
        selectedDayStartString:'',
        selectedDayEndString:'',
        seasonName:'',
        seasonDescription:'',

      };
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

    handleDayClickStart(day, { selected, disabled }) {

     if (disabled) {
       return;
     }
     if (selected) {
       this.setState({ selectedDayStart: undefined });
       return;
     }
     this.setState({
       selectedDayStart: day,
       selectedDayStartString: day.toLocaleDateString('en-GB')
     });
   }

   handleDayClickEnd(day, { selected, disabled }) {
    if (disabled) {
      return;
    }
    if (selected) {
      this.setState({ selectedDayEnd: undefined });
      return;
    }
    this.setState({
      selectedDayEnd: day,
      selectedDayEndString: day.toLocaleDateString('en-GB')
     });

    }

    addSeason = () =>{
      let user = Object.assign({}, this.state);    //creating copy of object

      var data = {
        start_date: user.selectedDayStartString,
        end_date: user.selectedDayEndString,
        name: user.seasonName,
        description: user.seasonDescription
      }

      PostData('/addseason', data)
    }
    render() {

      return (
          <div>
            <Grid>
              <h1>
              <FormattedMessage
              id="NEWSESASON.createNewSeasonTitle"
              defaultMessage="Create new season"
              />
              </h1>
              <div className="buffer"/>
              <Row>
                <Col xs={12} sm={6}>
                  <p>
                  <FormattedMessage
                  id="NEWSESASON.name"
                  defaultMessage="Name:"
                  />
                  </p>
                  <Input
                    name="Name"
                    onChange={this.onChangeName.bind(this)}
                  />
                </Col>
                <Col xs={12} sm={6}>
                  <p>
                  <FormattedMessage
                  id="NEWSESASON.description"
                  defaultMessage="Description:"
                  />
                  </p>
                  <Input
                    name="Description"
                    onChange={this.onChangeDescription.bind(this)}
                  />
                </Col>
                <div className="buffer"/>
                <div className="buffer"/>

                <Col xs={12} sm={6}>
                  <p>
                  <FormattedMessage
                  id="NEWSESASON.seasonStart"
                  defaultMessage="Start of season"
                  />
                  </p>
                  <hr/>

                  <DayPicker
                    onDayClick={this.handleDayClickStart}
                    selectedDays={this.state.selectedDayStart}
                    disabledDays={{ daysOfWeek: [0] }}
                  />
                  {this.state.selectedDayStart ? (
                    <p>
                    <FormattedMessage
                    id="NEWSESASON.startDate"
                    defaultMessage="Startdate:"
                    />
                   {this.state.selectedDayStart.toLocaleDateString('en-GB')}</p>
                  ) : (
                    <p>
                    <FormattedMessage
                    id="NEWSESASON.selectStartLabel"
                    defaultMessage="Please select a day to start the season"
                  />
                  </p>
                  )}
                </Col>

                <Col xs={12} sm={6}>
                  <p>
                  <FormattedMessage
                  id="NEWSESASON.seasonEnd"
                  defaultMessage="End of season"
                  />
                  </p>
                  <hr/>
                  <DayPicker
                    onDayClick={this.handleDayClickEnd}
                    selectedDays={this.state.selectedDayEnd}
                    disabledDays={{ daysOfWeek: [0] }}
                  />
                  {this.state.selectedDayEnd ? (
                    <p>
                    <FormattedMessage
                    id="NEWSESASON.endDate"
                    defaultMessage="Enddate:"
                    />
                   {this.state.selectedDayEnd.toLocaleDateString('en-GB')}</p>
                  ) : (
                    <p>
                    <FormattedMessage
                    id="NEWSESASON.selectEndLabel"
                    defaultMessage="Please select a day to end the season"
                    />
                  </p>
                  )}
                </Col>

              </Row>

              <div className="buffer"/>
              <div className="text-center">

                <Button className="formbtn" color="primary" onClick={this.addSeason} >
                <FormattedMessage
                  id="NEWSESASON.createNewSeasonButton"
                  defaultMessage="Create new season"
                  />
                  </Button>

              </div>

            </Grid>
          </div>

          );
          }

          }
