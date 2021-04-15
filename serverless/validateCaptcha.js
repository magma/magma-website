const axios = require('axios');

const { GATSBY_SECRET_RECAPTCHA_SITE_KEY } = process.env;


exports.handler = async (event, context, callback) => {

    const { token } = JSON.parse(event.body);

    const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${GATSBY_SECRET_RECAPTCHA_SITE_KEY}&response=${token}`)
        .then((res) => {
            return {
                statusCode: 200,
                body: JSON.stringify(res.data)
            }
        })
        .catch((err) => {
            return {
                statusCode: 500,
                body: JSON.stringify(err),
            }
        });

    return response;
}