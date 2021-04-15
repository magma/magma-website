const axios = require('axios');

const { GATSBY_EMMA_ACCOUNT_ID, GATSBY_EMMA_FORM_ID, GATSBY_EMMA_GROUP_ID, GATSBY_EMMA_PUBLIC_KEY, GATSBY_EMMA_PRIVATE_KEY } = process.env;

exports.handler = async function (event, context, callback) {

    const data = JSON.parse(event.body);
    const { name, email } = data;
    const body = {
        fields: {
            first_name: name
        },
        email,
        group_ids: [GATSBY_EMMA_GROUP_ID],
        signup_form_id: GATSBY_EMMA_FORM_ID
    }

    const response = await axios.post(`https://api.e2ma.net/${GATSBY_EMMA_ACCOUNT_ID}/members/signup`, body, {
        headers: { 'Content-Type': 'application/json' },
        auth: {
            username: GATSBY_EMMA_PUBLIC_KEY,
            password: GATSBY_EMMA_PRIVATE_KEY
        }
    }).then((res) => {
        console.log('res subscribe', res);
        return {
            statusCode: 200,
            body: JSON.stringify(res.data)
        }
    }).catch((err) => {
        console.log('err subscribe', err);
        return {
            statusCode: 500,
            body: JSON.stringify(err),
        }
    });

    return response;
};