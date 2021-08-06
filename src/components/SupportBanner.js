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

    const { supportBanner: { display, columns } } = this.props;

    if (display) {
      return (
        <React.Fragment>
          <section>
            <div id="supporters" className="support-content">
              <h4 className="support-content-title">
                {content.productName} is an open source project supported by
              </h4>
              <div className="columns is-multiline">
                {columns.map((c, index) => {
                  return (
                    <div className="column is-one-quarter vert-centered horiz-centered">
                      <a href={c.link} className="support-link">
                        <img src={c.image.publicURL} className={`support-logo ${c.className}`} alt={c.alt} />
                      </a>
                    </div>
                  )
                })}                
              </div>
            </div>
          </section>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
};

export default SupportBanner;
