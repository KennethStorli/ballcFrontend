import React,  { Component } from 'react';
import { Row, Grid, Col, Checkbox, Tab, Tabs } from 'react-bootstrap';
import { ListGroup, ListGroupItem, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import { Button, Input } from 'mdbreact'
import '../components/Teamlist.css'


export default class NewLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: [],
      selectAdd:[]
    };

  }

  componentDidMount() {
    fetch(`https://ballc-frontend-be.herokuapp.com/addresses`)
    .then(result => result.json())
    .then(address => this.setState({address}))
 }

    render(){
      return(
        <div>
          <br/>
          <br/>
          <p>Location name:</p>
          <Input
            name="address_1"
            onChange={this.onChangeA1}
          validate/>
          <br/>
          <br/>
          <br/>
          <p>Description:</p>
          <Input
            name="address_2"
            onChange={this.onChangeA2}
          validate/>
          <br/>
          <br/>
          <hr/>
          <br/>
          <div className="chooseTeam">

            <p>Current address:</p>
            <Input
              name="address"
              value={(this.state.selectAdd ? this.state.selectAdd.address_line_1 : '')}

              onChange={this.onChangeA3}/>
            <br/>
            <br/>
            <p>Select new address:</p>

            <div className="TeamlistShort">
              <ListGroup>
                <div>
                  {this.state.address.map(address =>
                    <ListGroupItem
                      className="listingplayer"
                      onClick={
                        e => {
                          this.setState({
                            selectAdd: address
                          });
                        }
                      }
                      key={address.address_id}>
                      {address.address_line_1}
                    </ListGroupItem>)}
                </div>
              </ListGroup>
            </div>
          </div>
          <br/>
          <br/>
          <br/>
          <div className="text-center">
            <Button color="primary" onClick={this.createperson} >Create new address</Button>
          </div>
        </div>

      )
    }
  }
