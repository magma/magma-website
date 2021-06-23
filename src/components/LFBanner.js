import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import content from '../content/top-bar.json'
import LFLogo from '../../static/img/lf_projects_white.svg'; 

const LFBanner = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="lf-banner">
        <div className="lf-logo-container">
          <OutboundLink className="lf-logo-link" href="https://www.linuxfoundation.org/projects" target="_blank" rel="noopener noreferrer">
            <img src={LFLogo} className="lf-banner-logo" alt="Linux Foundation Logo"/>
          </OutboundLink>
        </div>
      </div>
    )
  }
}

export default LFBanner
