const { obterRepositorios } = require('./api')

async function main() {
  try {
    const { items } = await obterRepositorios('Javascript')
    const issue = items.map(item => parseInt(item.open_issues_count))
    console.log('Open-Issues: ', issue)

    const total = issue.reduce((anterior, proximo) => {
      return anterior + proximo
    })

    console.log('Quantidade total Issue: ', total)
  } catch (error) {
    console.error('Erro: ', error)
  }
}
main()