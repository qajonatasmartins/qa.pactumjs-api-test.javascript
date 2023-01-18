const { spec } = require('pactum');

it('should get random users', async () => {
    let { json, statusCode } = await spec()
        .get('https://randomuser.me/api')
        .expectStatus(200)

    console.log(json)
    console.log(json, statusCode)
});
