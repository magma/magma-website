import React from "react";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ImageRight from "../components/ImageRight"
import ImageLeft from "../components/ImageLeft"
import DevelopWithMagma from "../components/DevelopWithMagma"

const Mainpitch = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <section>
          <ImageRight />
          <ImageLeft />
        </section>
      </React.Fragment>
    );
  } 
};

export default Mainpitch;
