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

    const { contact: { display, title, subTitle, email, linkedin, twitter, formUrl } } = this.props;

    if (display) {
      return (
        <React.Fragment>
          <div className={`${subTitle ? 'two-col': ''} contact-section`}>
            <div className="container-one">
              <div className="contact-text" style={{margin: subTitle ? '' : 0}}>
                <h2>{title}</h2>
                {subTitle && <p className="section-paragraph contact-info">{subTitle}</p>}
                {email && <a href={`mailto: ${email}`} className="text-cta">Send us an email</a>}
                <div className="social-icons">
                  {email && <a href={`mailto: ${email}`}><img className="social-icon" src={Email} /></a>}
                  {linkedin && <a href={linkedin}><img className="social-icon" src={LinkedIn} /></a>}
                  {twitter && <a href={twitter}><img className="social-icon" src={Twitter} /></a>}
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
