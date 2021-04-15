import React from "react";
import MagmaLogo from "../../static/img/Logomark_Invert.svg";

const DevelopWithMagma = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        
        <div className="magma-logo-bg">
          <div className="develop">
            <h2 className="dev-with-magma">Develop with Magma</h2>
            <div className="contribute-button"><a href="https://github.com/magma/magma" className="button is-outlined">Start Contributing</a></div>
          </div>

          <img className="magma-icon" src={MagmaLogo} />
          
        </div>

      </React.Fragment>
    );
  }
};

export default DevelopWithMagma;
