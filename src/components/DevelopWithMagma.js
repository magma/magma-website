import React from "react";
import MagmaLogo from "../../static/img/Logomark_Invert.svg";

const DevelopWithMagma = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { develop: { display, title, button: { text, link } } } = this.props;

    if (display) {
      return (
        <React.Fragment>

          <div className="magma-logo-bg">
            <div className="develop">
              <h2 className="dev-with-magma">{title}</h2>
              <div className="contribute-button"><a href={link} className="button is-outlined">{text}</a></div>
            </div>

            <img className="magma-icon" src={MagmaLogo} />

          </div>

        </React.Fragment>
      );
    } else {
      return null;
    }
  }
};

export default DevelopWithMagma;
