const request = require('request')
const cheerio = require('cheerio')

async function serchImdbTitleAndRating() {
    request(`https://www.imdb.com/chart/top`, async function (err, res, body) {
        if (err) {
            console.log('Erro no request: ' + err)
        }

        const $ = await cheerio.load(body)

        $('.lister-list tr').each(function (index, value) {

            let title = $(this).find('.titleColumn a').text().trim()
            let rating = $(this).find('.ratingColumn strong').text().trim()

            console.log('Titulo: ' + title + ', Nota: ' + rating)

        })

    })

}
serchImdbTitleAndRating()

module.exports = serchImdbTitleAndRating