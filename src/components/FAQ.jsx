import React from 'react';
import {Glyphicon } from 'react-bootstrap';
import { Container, Row, Col } from 'mdbreact';



class Login extends React.Component  {


  render() {

    return(
      <Container>
        <Row>
          <Col sm={1}>
          </Col>
          <Col sm={4}>
            <br/>
            <p className="greytext">How come i cant access content?</p>
            <p>Some of our content is exclusive to our users. To access this content, please make sure to sign in.</p>
            <hr/>
            <p className="greytext">What is the watchlist?</p>
            <p>With the watchlist, you're able to quickly access your favourite teams and players by the click of a button.</p>
            <hr/>
            <Col sm={6}><Glyphicon glyph="cog" /></Col><Col sm={6}>Settings</Col>
            <Col sm={6}><Glyphicon glyph="user" /></Col><Col sm={6}>Profile</Col>
            <Col sm={6}><Glyphicon glyph="star" /></Col><Col sm={6}>Watchlist</Col>



          </Col>
        </Row>
      </Container>
    );
  }
};

export default Login;
