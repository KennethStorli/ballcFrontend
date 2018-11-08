import React,  { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Button, Input } from 'mdbreact'
import '../components/Teamlist.css'
import {PostData} from '../PostData';


export default class NewLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: [],
      selectAdd:[],
      address_id: '',
      location_name: '',
      description: ''
    };
    this.onChangeA1 = this.onChangeA1.bind(this);
    this.onChangeA2 = this.onChangeA2.bind(this);
  }

  componentDidMount() {
    fetch(`https://ballc-frontend-be.herokuapp.com/addresses`)
    .then(result => result.json())
    .then(address => this.setState({address}))
 }

 onChangeA1(event){
  const address1input = event.target.value
  this.setState({
    location_name: address1input
  })
}

onChangeA2(event){
  const address2input = event.target.value
  this.setState({
    description: address2input
  })
}


 createlocation = () =>{
  let user = Object.assign({}, this.state);    //creating copy of object

  let data = {
    address: user.address_id,
    name: user.location_name,
    description: user.description

  }
  PostData('/addlocation', data);
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
                            selectAdd: address,
                            address_id:address.address_id
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
            <Button color="primary" onClick={this.createlocation} >Create new address</Button>
          </div>
        </div>

      )
    }
  }
