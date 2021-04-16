import React from "react";
import content from "../content/footer-nav.json";

import OIFLogo from "../../static/img/OpenInfrastructureFoundation-logo-RGB-horiz2.svg";
import TIPLogo from "../../static/img/TIP_vertical_rgb_color.png";
import OAILogo from "../../static/img/oai_final_logo.png";
import LFLogo from "../../static/img/lf_logo.svg";

const SupportBanner = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section>
          <div id="supporters" className="support-content">
            <h4 className="support-content-title">
              {content.productName} is an open source project supported by
            </h4>
            <div className="columns is-multiline">
              <div className="column is-one-quarter vert-centered horiz-centered">
                <a href="https://www.linuxfoundation.org/" className="support-link">
                  <img src={LFLogo} className="support-logo lf-logo" alt="LF logo" />
                </a>
              </div>
              <div className="column is-one-quarter vert-centered horiz-centered">
                <a href="https://openairinterface.org/" className="support-link">
                  <img src={OAILogo} className="support-logo oai-logo" alt="OAI logo" />
                </a>
              </div>
              <div className="column is-one-quarter vert-centered horiz-centered">
                <a href="https://openinfra.dev/" className="support-link">
                  <img src={OIFLogo} className="support-logo oif-logo" alt="Open Infrastructure Foundation logo" />
                </a>
              </div>
              <div className="column is-one-quarter vert-centered horiz-centered">
                <a href="https://telecominfraproject.com/" className="support-link">
                  <img src={TIPLogo} className="support-logo tip-logo" alt="TIP logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
};

export default SupportBanner;
