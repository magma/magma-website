import React from "react";
import Paperwork from "../../static/img/paperwork.jpg";

const FormEmbed = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { formUrl } = this.props;

    return (
      <React.Fragment>
        <div className="embedded-form-container">
          <iframe className="embedded-form" src={formUrl} title="Contact Form" />
        </div>
      </React.Fragment>
    );
  }
};

export default FormEmbed;
