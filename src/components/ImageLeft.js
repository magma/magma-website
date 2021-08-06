import React from "react";
import Tower from "../../static/img/tower.jpg";

const ImageLeft = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { tag, title, description, image } = this.props;

    return (
      <React.Fragment>
        <div className="two-col">
          <div className="container-two">
            <div className="img-container-lt">
              <img className="img-lt" src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} />
              </div>
              <div className="section-text-right">
                <h5 className="section-tag">{tag}</h5>
                <h2>{title}</h2>
                <p>{description}</p>
                <a href="/community" className="text-cta">Join The Community</a>
              </div>

          </div>  
        </div>
      </React.Fragment>
    );
  }
};

export default ImageLeft;
