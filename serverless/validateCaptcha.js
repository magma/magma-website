const fetch = require("node-fetch");

export const validateCaptcha = async (token) => {

    const secret = process.env.GATSBY_SECRET_RECAPTCHA_SITE_KEY;
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`, {
        method: 'POST'
    });

    const data = await response.json();

    return data.success;

}