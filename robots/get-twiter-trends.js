const twitter = require('twitter')
const twitterKey = require('../credenciais/twiter.json')

async function serchTrendsOfTwitter() {

    const client = new twitter({
        consumer_key: twitterKey.apiKey,
        consumer_secret: twitterKey.apiSecretKey,
        access_token_key: twitterKey.accessToken,
        access_token_secret: twitterKey.accessSecretToken
    })

    client.get('https://api.twitter.com/1.1/trends/place.json?id=1', async function (error, tweets, response) {

        if (error) {
            console.log('Erro de request ' + error)
        }

        const dataFromTwitter = tweets[0]

         console.log(dataFromTwitter)

        // function dataTransform(dataFromTwitter) {
        //     for (let elem in dataFromTwitter) {
        //         console.log(dataFromTwitter.trends)
        //         console.log(elem.name)

        //     }
        // }

        // dataTransform(dataFromTwitter)
    })

}

serchTrendsOfTwitter()
