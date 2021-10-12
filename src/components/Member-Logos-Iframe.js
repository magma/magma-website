import React from 'react'

const MemberLogosIframe = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <React.Fragment>
      <div className="member-logos-iframe">
      <iframe className="embedded-logos" src="https://landscape.magmacore.org/pages/members"></iframe>
      </div>
      </React.Fragment>
    )
  }
}

export default MemberLogosIframe
