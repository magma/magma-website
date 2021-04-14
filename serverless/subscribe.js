const { EMMA_ACCOUNT_ID, EMMA_PUBLIC_KEY, EMMA_PRIVATE_KEY } = process.env;

exports.handler = async (event, context, callback) => {

    const data = JSON.parse(event.body);

    console.log('data', data);
    
    // const subscribe = await fetch(`https://api.e2ma.net/${EMMA_ACCOUNT_ID}}/members/signup`, {
    //     headers: new Headers({
    //         'Authorization': `Basic ${EMMA_PUBLIC_KEY}:${EMMA_PRIVATE_KEY}`,
    //         'Content-Type': 'application/json'
    //     }),
    //     method: 'POST',
    //     body: data
    // });

};