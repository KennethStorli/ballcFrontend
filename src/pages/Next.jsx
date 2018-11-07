import React, { Component } from 'react'

import {IntlProvider, FormattedMessage} from 'react-intl';

export default class Next extends Component {
  render() {
    return(
      <div>
      	<FormattedMessage
      	id="NEXT.nextMessage"
        defaultMessage="NEXT PAGE"
        />
      </div>
    )
  }
}
