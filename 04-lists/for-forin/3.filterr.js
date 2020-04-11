const { obterRepositorios } = require('./api')

/*
const item = {
  nome: 'Felipe',
  idade: 12
}

const { nome } = item
console.log(nome)
*/

Array.prototype.meuFilter = function (callback) {
  const lista = []
  for (index in this){
    const item = this[index]
    const result = callback(item, index, this)

    if(!result) continue
      lista.push(item)
  }
  return lista;
}

async function main() {
  try {
    const { items } = await obterRepositorios('Javascript')
    
    /*
    const nameJs = items.filter(function (item) {
      
      por padrão precisa retornar um booleano
      para informar se deve manter ou remover da lista
      false -> remove da lista, true -> mantém
      não encontrou == -1
      encontrou = posicaoNoArray
      
      const result = item.name.toLowerCase().indexOf('.js') !== -1
      return result;
    })
    */
    const nameJs = items.meuFilter((item, index, lista) => {
      console.log(`index: ${index}`, lista.length)
      return item.name.toLowerCase().indexOf('.js') !== -1
    })
    
    const names = nameJs.map((repositorio) => repositorio.name)
    console.log(names)

  } catch (error) {
    console.error('Erro: ', error)
  }
}
main()