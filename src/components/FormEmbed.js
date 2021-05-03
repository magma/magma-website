import React from "react";
import Paperwork from "../../static/img/paperwork.jpg";

const FormEmbed = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="embedded-form-container">
            <iframe className="embedded-form" src="https://share.hsforms.com/16nQWgToJTqmGX9bC8swiyw4tvhy" title="Contact Form" /> 
        </div>
      </React.Fragment>
    );
  }
};

export default FormEmbed;
