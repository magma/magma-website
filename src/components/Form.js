import React, { useState, useRef } from "react";
import ReCAPTCHA from 'react-google-recaptcha';

const Form = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subscribe, setSubscribe] = useState(false);
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessageSubscribe, setErrorMessageSubscribe] = useState('');
  const recaptchaRef = useRef(<ReCAPTCHA />);

  const submitForm = async (event) => {
    event.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    const token = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();

    const validate = await fetch("/.netlify/functions/validateCaptcha", {
      method: "POST",
      body: JSON.stringify({ token })
    });

    if (validate.ok) {
      if (subscribe) {
        try {
          const response = await fetch("/.netlify/functions/subscribe", {
            method: "POST",
            body: JSON.stringify({ email, name }),
          })
          if (!response.ok) {
            setErrorMessageSubscribe('There was an error subscribing to the mailing list, please try again')
          }
        } catch (e) {
          setErrorMessageSubscribe('There was an error subscribing to the mailing list, please try again')
        }
      }
      try {
        const response = await fetch("/.netlify/functions/sendEmail", {
          method: "POST",
          body: JSON.stringify({ name, email, message }),
        })
        if (!response.ok) {
          setErrorMessage('There was an error sending your message, please try again')
        } else {
          setSuccessMessage('Your message was successfully sent');
        }
      } catch (e) {
        setErrorMessage('There was an error sending your message, please try again')
      }
    }
    else {
      setErrorMessage('There was an error at the ReCAPTCHA validation');
    }
  }

  return (
    <React.Fragment>
      <form name="contact" method="POST" onSubmit={e => submitForm(e)}>
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" className="form-field" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input type="text" className="form-field" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <textarea className="form-field message" name="message" placeholder="Message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
        {successMessage && <span className="result-message success">{successMessage}</span>}
        {errorMessage && <span className="result-message error">{errorMessage}</span>}
        {errorMessageSubscribe && <span className="result-message error">{errorMessageSubscribe}</span>}
        <div className="checkbox">
          <input type="checkbox" name="subscribe" value={subscribe} onClick={() => setSubscribe(!subscribe)} /><span className="checkbox-message">Subscribe to Newsletter</span>
        </div>
        <button className="button is-primary form-button" type="submit">SUBMIT</button>
      </form>
      <ReCAPTCHA sitekey={process.env.GATSBY_PUBLIC_RECAPTCHA_SITE_KEY} size="invisible" ref={recaptchaRef} />
    </React.Fragment>
  );
};

export default Form;
