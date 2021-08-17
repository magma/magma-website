import React from "react";
import Paperwork from "../../static/img/paperwork.jpg";

const ImageRight = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { tag, title, description, image } = this.props;

    return (
      <React.Fragment>
        <div className="two-col">
          <div className="container-one">
            <div className="section-text-left">
              <h5 id="about" className="section-tag">{tag}</h5>
              <h2>{title}</h2>              
              <p className="section-paragraph" dangerouslySetInnerHTML={{__html: description}} />
            </div>
            <div className="img-container-rt">
              <img className="img-rt" src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} />
            </div>
          </div>

        </div>
      </React.Fragment>
    );
  }
};

export default ImageRight;
