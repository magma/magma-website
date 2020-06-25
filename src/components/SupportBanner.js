import React from "react";
import content from "../content/footer-nav.json";

import OSFLogo from "../../static/img/osf-logo.svg";

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
            <img src={OSFLogo} width="250px" alt="OSF logo" />
          </div>
        </section>
      </React.Fragment>
    );
  }
};

export default SupportBanner;
