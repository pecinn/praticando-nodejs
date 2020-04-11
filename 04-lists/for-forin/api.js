const axios = require('axios')
const URL = 'https://api.github.com/search';

async function obterRepositorios(linguagem) {
  const url = `${URL}/repositories?q=language:${linguagem}&sort=stars&page=1`
  const response = await axios.get(url)
  return response.data
}

module.exports = {
  obterRepositorios
}