import React from "react";
import Tower from "../../static/img/tower.jpg";

const ImageLeft = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="two-col">
          <div className="container-two">
            <div className="img-container-lt">
                <img className="img-lt" src={Tower} />
              </div>
              <div className="section-text-right">
                <h5 className="section-tag">ABOUT THE COMMUNITY</h5>
                <h2>An Active Community For The Network Core</h2>
                <p>Magma is produced by an open-source software community who is user-driven  with a welcoming, respectful culture. We invite you to try out Magma, provide your feedback and get involved in contributing to the code.</p>

                <a href="/community" className="text-cta">Join The Community</a>

              </div>

          </div>  
        </div>
      </React.Fragment>
    );
  }
};

export default ImageLeft;
