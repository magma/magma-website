import React from "react";
import content from "../content/footer-nav.json";

import OSFLogo from "../../static/img/osf-logo.svg";
import TIPLogo from "../../static/img/TIP_horizontal_rgb_color.png";
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
              <div className="column is-one-third vert-centered">
                <a href="//www.openairinterface.org">
                  <img src={OAILogo} width="250px" alt="OAI logo" />
                </a>
              </div>
              <div className="column is-one-third vert-centered">
                <a href="//osf.dev">
                  <img src={OSFLogo} width="250px" alt="OSF logo" />
                </a>
              </div>
              <div className="column is-one-third vert-centered">
                <a href="https://telecominfraproject.com">
                  <img src={TIPLogo} width="250px" alt="OSF logo" />
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
