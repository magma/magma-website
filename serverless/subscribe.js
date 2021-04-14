const fetch = require("node-fetch");

const { GATSBY_EMMA_ACCOUNT_ID, GATSBY_EMMA_FORM_ID, GATSBY_EMMA_PUBLIC_KEY, GATSBY_EMMA_PRIVATE_KEY } = process.env;

exports.handler = async (event, context, callback) => {

    const data = JSON.parse(event.body);
    const { name, email } = data;
    const body = {
        fields: {
            first_name: name
        },
        email,
        group_id: ['22336352'],
        signup_form_id: GATSBY_EMMA_FORM_ID
    }    

    const headers = {
        'Authorization': `Basic ${GATSBY_EMMA_PUBLIC_KEY}:${GATSBY_EMMA_PRIVATE_KEY}`,
        'Content-Type': "application/json"
    };

    console.log('headers', headers);

    const subscribe = await fetch(`https://api.e2ma.net/${GATSBY_EMMA_ACCOUNT_ID}/members/signup`, {
        method: 'POST',
        headers,
        body: data
    });

    console.log('subscribe?', subscribe);
    return subscribe;

};