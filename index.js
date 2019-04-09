const readline = require('readline-sync')
const robots = {
    text: require('./robots/text.js')
}

async function start() {
    const content = {}
    
    //Termos de busca
    content.serchTerm = askAndReturnSerchTerm()
    content.prefix = askAndReturnPrefix()

    await robots.text(content)

    //Capturando o input do usuario
    function askAndReturnSerchTerm() {
        return readline.question('Term Example: ')
    }

    //Selecionando o prefixo para a busca
    function askAndReturnPrefix() {
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, "Choose one option: ")
        const selectedPrefixText = prefixes[selectedPrefixIndex]
        
        return selectedPrefixText
    }
    console.log(content)
}
start()

//npm install readline-sync