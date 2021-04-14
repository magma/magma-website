import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import content from '../content/contact.json';

const Contact = () => {

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
                    setSuccessMessage('Your message was successfully send');
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
        <div className="two-col contact-section">
            <div className="container-one">
                <div className="contact-text">
                    <h2>Contact</h2>
                    <p className="section-paragraph contact-info">
                        {content.contact.text}
                    </p>
                    {content.contact.email && <a href={`mailto: ${content.contact.email}`} className="text-cta">Send us an email</a>}
                    <div className="social-icons">
                        {content.contact.email &&
                            <a href={`mailto: ${content.contact.email}`}>
                                <img className="social-icon" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIuMSA1MTIuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjEgNTEyLjE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMTc3N0YyO30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ0OS40LDBINjIuNkMyOCwwLDAsMjgsMCw2Mi41YzAsMCwwLDAsMCwwLjF2Mzg2LjljMCwzNC42LDI4LDYyLjYsNjIuNiw2Mi42aDM4Ni45YzM0LjYsMCw2Mi42LTI4LDYyLjYtNjIuNgoJVjYyLjZDNTEyLDI4LDQ4NCwwLDQ0OS40LDB6Ii8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00MDAuMywyMTcuOGMxLjUtMS4yLDMuOC0wLjksNC45LDAuN2MwLjUsMC42LDAuNywxLjMsMC43LDIuMXYxMTkuOGMwLDE1LjYtMTIuNiwyOC4yLTI4LjIsMjguMkgxMzQuMgoJYy0xNS42LDAtMjguMi0xMi42LTI4LjItMjguMlYyMjAuNmMwLTEuOSwxLjUtMy41LDMuNS0zLjVjMC44LDAsMS42LDAuMywyLjIsMC44YzEzLjIsMTAuMiwzMC41LDIzLjIsOTAuMyw2Ni42CgljMTIuMyw5LDMzLjIsMjgsNTQsMjcuOWMyMC45LDAuMiw0Mi4yLTE5LjIsNTQuMS0yNy45QzM2OS44LDI0MSwzODcuMiwyMjgsNDAwLjMsMjE3Ljh6IE0yNTYsMjkzLjVjMTMuNiwwLjIsMzMuMi0xNy4xLDQzLTI0LjIKCWM3Ny43LTU2LjQsODMuNy02MS4zLDEwMS42LTc1LjRjMy40LTIuNyw1LjQtNi44LDUuNC0xMS4xdi0xMS4yYzAtMTUuNS0xMi42LTI4LjEtMjguMS0yOC4xYzAsMCwwLDAsMCwwSDEzNC4yCgljLTE1LjUsMC0yOC4xLDEyLjYtMjguMiwyOC4xdjExLjJjMCw0LjMsMiw4LjQsNS40LDExLjFjMTcuOSwxNCwyMy44LDE5LDEwMS42LDc1LjRDMjIyLjgsMjc2LjQsMjQyLjQsMjkzLjgsMjU2LDI5My41eiIvPgo8L3N2Zz4K" />
                            </a>
                        }
                        {
                            content.contact.socialNetworks.map((social) => {
                                return (
                                    <a href={social.link}>
                                        <img className="social-icon" src={social.icon} />
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="form-container">
                    <form name="contact" method="POST" onSubmit={e => submitForm(e)}>
                        <input type="hidden" name="form-name" value="contact" />
                        <input type="text" className="form-field" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                        <input type="text" className="form-field" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                        <div className="form-field checkbox">
                            <input type="checkbox" name="subscribe" value={subscribe} onClick={() => setSubscribe(!subscribe)} /><span>Subscribe to Newsletter</span>
                        </div>
                        <textarea className="form-field message" name="message" placeholder="Message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                        {successMessage && <span className="result-message success">{successMessage}</span>}
                        {errorMessage && <span className="result-message error">{errorMessage}</span>}
                        {errorMessageSubscribe && <span className="result-message error">{errorMessageSubscribe}</span>}
                        <button className="button is-primary form-button" type="submit">SUBMIT</button>
                    </form>
                </div>
                <ReCAPTCHA sitekey={process.env.GATSBY_PUBLIC_RECAPTCHA_SITE_KEY} size="invisible" ref={recaptchaRef} />
            </div>
        </div>
    )
}

export default Contact;