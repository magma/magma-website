import React from "react";

const GetStarted = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        
        <div className="cta-banner">
          <div className="develop">
            <h2 className="dev-with-magma">Ready to get started?</h2>
            <div className="contribute-button"><a href="https://github.com/magma/magma" className="button is-outlined">Download Magma</a></div>
          </div>
        </div>

      </React.Fragment>
    );
  }
};

export default GetStarted;
