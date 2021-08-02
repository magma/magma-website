import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import content from '../content/top-bar.json'
import LFLogo from '../../static/img/lf_projects_white.svg'; 

const OverviewVideo = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <section className="overview-video-section">
        <h5 id="user-stories" className="section-tag">Overview</h5>
        <h2>Learn Why Service Providers Are Using Magma</h2>

        <div className="overview-video-container">
        <iframe className="overview-video" title="Magma Overview Video" src="https://www.youtube.com/embed/1JZOh-jSMls" allowfullscreen></iframe>
        </div>
      </section>
    )
  }
}

export default OverviewVideo
