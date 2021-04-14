const sgMail = require('@sendgrid/mail');
const { SENDGRID_API_KEY, SENDGRID_TO_EMAIL, SENDGRID_FROM_EMAIL } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

exports.handler = (event, context, callback) => {

    const payload = JSON.parse(event.body)    

    const body = Object.keys(payload).map((k) => {
        return `${k}: ${payload[k]}`
    }).join("<br><br>");

    const msg = {
        from: SENDGRID_FROM_EMAIL,
        to: SENDGRID_TO_EMAIL,
        subject: 'Contact from Magma Website',
        html: body,
    };

    sgMail
        .send(msg)
        .then(() => { }, error => {
            console.error(error);

            if (error.response) {
                console.error(error.response.body)
            }
        });
};