import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';
import './index.css';
import App from './App';
import './components/NavigatorAdm.css'
import * as serviceWorker from './serviceWorker';




import {IntlProvider, addLocaleData } from 'react-intl';

import en from "react-intl/locale-data/en";
import no from "react-intl/locale-data/no";

import localeData from "./../src/locales/data.json";

addLocaleData([...en, ...no]);

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const language =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage;

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, try locale without region code, fallback to 'en'
const messages =
  localeData[languageWithoutRegionCode] ||
  localeData[language] ||
  localeData.en;





class IntlProviderWrapper extends React.Component {
  constructor(...args) {
    super(...args);

    this.switchToEnglish = () =>
      this.setState({ locale: "en", messages: localeData["en"] });

    this.switchToNorwegian = () =>
      this.setState({ locale: "no", messages: localeData["no"] });

    // pass everything in state to avoid creating object inside render method (like explained in the documentation)
    this.state = {
      locale: language,
      messages: messages,
    };
  }

  render() {

    const { locale, messages } = this.state;
    return (
        <div className="NavigatorAdm2"> 
        <Navbar inverse collapseOnSelect > 
          <Navbar.Collapse>
          
            <Nav pullRight>

              <NavItem eventKey={1} onClick={this.switchToNorwegian}>
                NO
              </NavItem>
              <NavItem eventKey={1} onClick={this.switchToEnglish}>
                EN
              </NavItem>
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <IntlProvider
          key={locale}
          locale={locale}
          messages={messages}
          defaultLocale="en"
        >
    		<App />
        </IntlProvider>
        </div>
    );
  }
}



ReactDOM.render(
	<div> 
        <IntlProviderWrapper/>
  	</div>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
