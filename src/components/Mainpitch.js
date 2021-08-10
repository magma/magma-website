import React from "react";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ImageRight from "../components/ImageRight"
import ImageLeft from "../components/ImageLeft"

const Mainpitch = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    const { mainpitch: { display, imageLeft, imageRight } } = this.props;

    if (display) {
      return (
        <React.Fragment>
          <section>
            <ImageRight {...imageRight} />
            <ImageLeft {...imageLeft} />
          </section>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
};

export default Mainpitch;
