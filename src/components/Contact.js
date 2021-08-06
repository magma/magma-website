import React from 'react';

import Paperwork from "../../static/img/paperwork.png";
import Facebook from "../../static/img/facebook-icon.svg";
import LinkedIn from "../../static/img/linkedin-icon.svg";
import Twitter from "../../static/img/twitter-icon.svg";
import Email from "../../static/img/email-icon.svg";
import Form from "../components/Form"
import FormEmbed from "../components/FormEmbed"

const Contact = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { contact: { display, email, linkedin, twitter, formUrl } } = this.props;

    if (display) {
      return (
        <React.Fragment>
          <div className="two-col contact-section">
            <div className="container-one">
              <div className="contact-text">
                <h2>Contact</h2>
                <p className="section-paragraph contact-info">Let us know if you would like to receive more information about Magma or if you have questions on how to contribute to the community.
                </p>
                <a href={`mailto: ${email}`} className="text-cta">Send us an email</a>
                <div className="social-icons">
                  <a href={`mailto: ${email}`}><img className="social-icon" src={Email} /></a>
                  <a href={linkedin}><img className="social-icon" src={LinkedIn} /></a>
                  <a href={twitter}><img className="social-icon" src={Twitter} /></a>
                </div>
              </div>
              {/*<div className="form-container">
                  <Form />
                </div>*/}
            </div>
            <FormEmbed formUrl={formUrl} />
          </div>
        </React.Fragment>
      );
    } else {
      return null;
    }

  }
};

export default Contact;
