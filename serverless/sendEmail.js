const sgMail = require('@sendgrid/mail');
const { GATSBY_SENDGRID_API_KEY, GATSBY_SENDGRID_TO_EMAIL, GATSBY_SENDGRID_FROM_EMAIL } = process.env;

sgMail.setApiKey(GATSBY_SENDGRID_API_KEY);

exports.handler = (event, context, callback) => {

    const payload = JSON.parse(event.body);

    const body = Object.keys(payload).map((k) => {
        return `${k}: ${payload[k]}`
    }).join("<br><br>");

    const msg = {
        from: GATSBY_SENDGRID_FROM_EMAIL,
        to: GATSBY_SENDGRID_TO_EMAIL.split(','),
        subject: 'Contact from Magma Website',
        html: body,
    };

    sgMail
        .send(msg)
        .then((res) => {
            console.log('res sendEmail', res);
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(res.data),
            });
        }, (err) => {
            console.log('err sendEmail', err.response.body.errors);
            callback(null, {
                statusCode: 500,
                body: JSON.stringify(err),
            });
        });
};