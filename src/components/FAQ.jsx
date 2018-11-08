import React from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';

import {PostData} from '../PostData';


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
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Login;
