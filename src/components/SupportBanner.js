import React from "react";
import content from "../content/footer-nav.json";

import OSFLogo from "../../static/img/osf-logo.svg";
import TIPLogo from "../../static/img/TIP_vertical_rgb_color.png";
import OAILogo from "../../static/img/oai_final_logo.png";

const SupportBanner = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section>
          <div className="support-content">
            <h4 className="support-content-title">
              {content.productName} is an open source project supported by
            </h4>
            <div className="columns is-multiline">
              <div className="column is-one-third vert-centered horiz-centered">
                <a href="//www.openairinterface.org" className="support-link">
                  <img src={OAILogo} className="support-logo" alt="OAI logo" />
                </a>
              </div>
              <div className="column is-one-third vert-centered horiz-centered">
                <a href="//osf.dev" className="support-link">
                  <img src={OSFLogo} className="support-logo" alt="OSF logo" />
                </a>
              </div>
              <div className="column is-one-third vert-centered horiz-centered">
                <a href="//telecominfraproject.com" className="support-link">
                  <img
                    src={TIPLogo}
                    className="support-logo vert"
                    alt="TIP logo"
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
