import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl';

export default class Next extends Component {
  render() {
    return(
      <div>
      <FormattedMessage
      id="NEXT.message"
      defaultMessage="NEXT PAGE"
      />
      </div>
    )
  }
}
