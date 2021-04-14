import React, { useRef, useState } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';

import content from '../content/contact.json';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subscribe, setSubscribe] = useState(false);
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errorMessageSubscribe, setErrorMessageSubscribe] = useState('');
    // const recaptchaRef = useRef(<ReCAPTCHA />);

    const submitForm = async (event) => {
        event.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');
        console.log('here', name, email, subscribe, message);
        console.log('testing body', JSON.stringify({ name, email, message }));

        // const token = await recaptchaRef.current.executeAsync();
        // recaptchaRef.current.reset();

        // console.log('token?=', token);

        if (subscribe) {
            try {
                const data = {};
                const response = await fetch("/.netlify/functions/subscribe", {
                    method: "POST",
                    body: JSON.stringify({ email, name }),
                })
                if (!response.ok) {
                    //not 200 response
                    setErrorMessageSubscribe('There was an error subscribing to the mailing list, please try again')
                }
            } catch (e) {
                setErrorMessageSubscribe('There was an error subscribing to the mailing list, please try again')
            }
        }
        // try {
        //     const response = await fetch("/.netlify/functions/sendEmail", {
        //         method: "POST",
        //         body: JSON.stringify({ name, email, message }),
        //     })
        //     if (!response.ok) {
        //         setErrorMessage('There was an error sending your message, please try again')
        //     } else {
        //         setSuccessMessage('Your message was successfully send');
        //     }
        // } catch (e) {
        //     setErrorMessage('There was an error sending your message, please try again')
        // }
    }

    return (
        <div className="two-col contact-section">
            <div className="container-one">
                <div className="contact-text">
                    <h2>Contact</h2>
                    <p className="section-paragraph contact-info">
                        Let us know if you would like to receive more information about Magma or if you have questions on how to contribute to the community.
                    </p>
                    <a href="mailto: community@openinfra.dev" className="text-cta">Send us an email</a>
                    <div className="social-icons">
                        <a href="mailto: community@openinfra.dev">
                            <img className="social-icon" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIuMSA1MTIuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjEgNTEyLjE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMTc3N0YyO30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ0OS40LDBINjIuNkMyOCwwLDAsMjgsMCw2Mi41YzAsMCwwLDAsMCwwLjF2Mzg2LjljMCwzNC42LDI4LDYyLjYsNjIuNiw2Mi42aDM4Ni45YzM0LjYsMCw2Mi42LTI4LDYyLjYtNjIuNgoJVjYyLjZDNTEyLDI4LDQ4NCwwLDQ0OS40LDB6Ii8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00MDAuMywyMTcuOGMxLjUtMS4yLDMuOC0wLjksNC45LDAuN2MwLjUsMC42LDAuNywxLjMsMC43LDIuMXYxMTkuOGMwLDE1LjYtMTIuNiwyOC4yLTI4LjIsMjguMkgxMzQuMgoJYy0xNS42LDAtMjguMi0xMi42LTI4LjItMjguMlYyMjAuNmMwLTEuOSwxLjUtMy41LDMuNS0zLjVjMC44LDAsMS42LDAuMywyLjIsMC44YzEzLjIsMTAuMiwzMC41LDIzLjIsOTAuMyw2Ni42CgljMTIuMyw5LDMzLjIsMjgsNTQsMjcuOWMyMC45LDAuMiw0Mi4yLTE5LjIsNTQuMS0yNy45QzM2OS44LDI0MSwzODcuMiwyMjgsNDAwLjMsMjE3Ljh6IE0yNTYsMjkzLjVjMTMuNiwwLjIsMzMuMi0xNy4xLDQzLTI0LjIKCWM3Ny43LTU2LjQsODMuNy02MS4zLDEwMS42LTc1LjRjMy40LTIuNyw1LjQtNi44LDUuNC0xMS4xdi0xMS4yYzAtMTUuNS0xMi42LTI4LjEtMjguMS0yOC4xYzAsMCwwLDAsMCwwSDEzNC4yCgljLTE1LjUsMC0yOC4xLDEyLjYtMjguMiwyOC4xdjExLjJjMCw0LjMsMiw4LjQsNS40LDExLjFjMTcuOSwxNCwyMy44LDE5LDEwMS42LDc1LjRDMjIyLjgsMjc2LjQsMjQyLjQsMjkzLjgsMjU2LDI5My41eiIvPgo8L3N2Zz4K" />
                        </a>
                        <a href="https://www.linkedin.com/company/magmacore/">
                            <img className="social-icon" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJnNTg5MSI+PHBhdGggZD0iTTUxMiw2NGMwLC0zNS4zMjMgLTI4LjY3NywtNjQgLTY0LC02NGwtMzg0LDBjLTM1LjMyMywwIC02NCwyOC42NzcgLTY0LDY0bDAsMzg0YzAsMzUuMzIzIDI4LjY3Nyw2NCA2NCw2NGwzODQsMGMzNS4zMjMsMCA2NCwtMjguNjc3IDY0LC02NGwwLC0zODRaIiBpZD0iYmFja2dyb3VuZCIgc3R5bGU9ImZpbGw6IzI4NjdiMjsiLz48ZyBpZD0ic2hhcGVzIj48cmVjdCBoZWlnaHQ9IjI1Ny45NjIiIGlkPSJyZWN0MTEiIHN0eWxlPSJmaWxsOiNmZmY7IiB3aWR0aD0iODUuNzYiIHg9IjYxLjA1MyIgeT0iMTc4LjY2NyIvPjxwYXRoIGQ9Ik0xMDQuNTEyLDU0LjI4Yy0yOS4zNDEsMCAtNDguNTEyLDE5LjI5IC00OC41MTIsNDQuNTczYzAsMjQuNzUyIDE4LjU4OCw0NC41NzQgNDcuMzc3LDQ0LjU3NGwwLjU1NCwwYzI5LjkwMywwIDQ4LjUxNiwtMTkuODIyIDQ4LjUxNiwtNDQuNTc0Yy0wLjU1NSwtMjUuMjgzIC0xOC42MTEsLTQ0LjU3MyAtNDcuOTM1LC00NC41NzNaIiBpZD0icGF0aDEzLTAiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PHBhdGggZD0iTTM1Ny4yNzgsMTcyLjYwMWMtNDUuNDksMCAtNjUuODY2LDI1LjAxNyAtNzcuMjc2LDQyLjU4OWwwLC0zNi41MjNsLTg1LjczOCwwYzEuMTM3LDI0LjE5NyAwLDI1Ny45NjEgMCwyNTcuOTYxbDg1LjczNywwbDAsLTE0NC4wNjRjMCwtNy43MTEgMC41NTQsLTE1LjQyIDIuODI3LC0yMC45MzFjNi4xODgsLTE1LjQgMjAuMzA1LC0zMS4zNTIgNDMuOTkzLC0zMS4zNTJjMzEuMDEyLDAgNDMuNDM2LDIzLjY2NCA0My40MzYsNTguMzI3bDAsMTM4LjAybDg1Ljc0MSwwbDAsLTE0Ny45M2MwLC03OS4yMzcgLTQyLjMwNSwtMTE2LjA5NyAtOTguNzIsLTExNi4wOTdaIiBpZD0icGF0aDE1IiBzdHlsZT0iZmlsbDojZmZmO2ZpbGwtcnVsZTpub256ZXJvOyIvPjwvZz48L2c+PC9zdmc+" />
                        </a>
                        <a href="https://twitter.com/MagmaCommunity">
                            <img className="social-icon" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwYXRoIGQ9Ik00NDgsNTEybC0zODQsMGMtMzUuMzI4LDAgLTY0LC0yOC42NzIgLTY0LC02NGwwLC0zODRjMCwtMzUuMzI4IDI4LjY3MiwtNjQgNjQsLTY0bDM4NCwwYzM1LjMyOCwwIDY0LDI4LjY3MiA2NCw2NGwwLDM4NGMwLDM1LjMyOCAtMjguNjcyLDY0IC02NCw2NFoiIGlkPSJEYXJrX0JsdWUiIHN0eWxlPSJmaWxsOiMxZGExZjI7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PHBhdGggZD0iTTE5Ni42MDgsMzg2LjA0OGMxMjAuNzA0LDAgMTg2Ljc1MiwtMTAwLjA5NiAxODYuNzUyLC0xODYuNzUyYzAsLTIuODE2IDAsLTUuNjMyIC0wLjEyOCwtOC40NDhjMTIuOCwtOS4yMTYgMjMuOTM2LC0yMC44NjQgMzIuNzY4LC0zNC4wNDhjLTExLjc3Niw1LjI0OCAtMjQuNDQ4LDguNzA0IC0zNy43NiwxMC4zNjhjMTMuNTY4LC04LjA2NCAyMy45MzYsLTIwLjk5MiAyOC45MjgsLTM2LjM1MmMtMTIuNjcyLDcuNTUyIC0yNi43NTIsMTIuOTI4IC00MS43MjgsMTUuODcyYy0xMi4wMzIsLTEyLjggLTI5LjA1NiwtMjAuNzM2IC00Ny44NzIsLTIwLjczNmMtMzYuMjI0LDAgLTY1LjY2NCwyOS40NCAtNjUuNjY0LDY1LjY2NGMwLDUuMTIgMC42NCwxMC4xMTIgMS42NjQsMTQuOTc2Yy01NC41MjgsLTIuNjg4IC0xMDIuOTEyLC0yOC45MjggLTEzNS4yOTYsLTY4LjYwOGMtNS42MzIsOS43MjggLTguODMyLDIwLjk5MiAtOC44MzIsMzMuMDI0YzAsMjIuNzg0IDExLjY0OCw0Mi44OCAyOS4xODQsNTQuNjU2Yy0xMC43NTIsLTAuMzg0IC0yMC44NjQsLTMuMzI4IC0yOS42OTYsLTguMTkybDAsMC44OTZjMCwzMS43NDQgMjIuNjU2LDU4LjM2OCA1Mi42MDgsNjQuMzg0Yy01LjUwNCwxLjUzNiAtMTEuMjY0LDIuMzA0IC0xNy4yOCwyLjMwNGMtNC4yMjQsMCAtOC4zMiwtMC4zODQgLTEyLjI4OCwtMS4xNTJjOC4zMiwyNi4xMTIgMzIuNjQsNDUuMDU2IDYxLjMxMiw0NS41NjhjLTIyLjUyOCwxNy42NjQgLTUwLjgxNiwyOC4xNiAtODEuNTM2LDI4LjE2Yy01LjI0OCwwIC0xMC40OTYsLTAuMjU2IC0xNS42MTYsLTAuODk2YzI4LjkyOCwxOC40MzIgNjMuNDg4LDI5LjMxMiAxMDAuNDgsMjkuMzEyIiBpZD0iTG9nb19feDIwMTRfX0ZJWEVEIiBzdHlsZT0iZmlsbDojZmZmO2ZpbGwtcnVsZTpub256ZXJvOyIvPjwvZz48L3N2Zz4=" />
                        </a>
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
                {/* <ReCAPTCHA sitekey={process.env.GATSBY_PUBLIC_RECAPTCHA_SITE_KEY} size="invisible" ref={recaptchaRef} /> */}
            </div>
        </div>
    )
}

export default Contact;