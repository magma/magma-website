import React from "react";
import content from "../content/footer-nav.json";

import OSFLogo from "../../static/img/osf-logo.svg";
import SupporterLogo from "../../static/img/supporter-logo-placeholder.png";

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
              <div className="column is-one-fifth">
                <a href="//facebook.com">
                  <img src={SupporterLogo} width="250px" alt="OSF logo" />
                </a>
              </div>
              <div className="column is-one-fifth">
                <a href="//facebook.com">
                  <img src={SupporterLogo} width="250px" alt="OSF logo" />
                </a>
              </div>
              <div className="column is-one-fifth">
                <a href="//facebook.com">
                  <img src={SupporterLogo} width="250px" alt="OSF logo" />
                </a>
              </div>
              <div className="column is-one-fifth">
                <a href="//facebook.com">
                  <img src={SupporterLogo} width="250px" alt="OSF logo" />
                </a>
              </div>
              <div className="column is-one-fifth">
                <a href="//osf.dev">
                  <img src={OSFLogo} width="250px" alt="OSF logo" />
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
