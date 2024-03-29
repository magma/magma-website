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

    const { overview: { display, tag, title, videos } } = this.props;

    if (display) {
      return (
        <section className="overview-video-section">
          <h5 id="user-stories" className="section-tag">{tag}</h5>
          <h2>{title}</h2>
          <div className="overview-video-container">
            {videos.map((video, index) => {
              return (
                <div className="overview-video">
                  <iframe key={index} title="Magma Overview Video" src={video.videoUrl} allowFullScreen></iframe>
                  <h3>{video.title}</h3>
                </div>
              )
            })}
          </div>
        </section>
      )
    } else {
      return null;
    }
  }
}

export default OverviewVideo
