const hi = document.querySelector('hi');

console.log('hi', hi);

const regresApiKey =
    'pub_0ee23e330226703cb460110316e1f3be54b4f4b750bcdea22b2813ce572af445';

const regresUrl = 'https://app.reqres.in/api/users';

const callApi = async () => {
    const data = await fetch(regresUrl, {
        method: 'post',
        body: JSON.stringify({name: 'sampo', job: 'student'}),
        headers: {
            'x-api-key': regresApiKey,
        },
    });

    const result = await data.json();

    console.log('data', data);
    console.log('result', result);
};

console.log('logitus ennen kutsua');
callApi();
console.log('logitus kutsun jälkeen');
