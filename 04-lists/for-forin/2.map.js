const service = require('./api')

Array.prototype.meuMap = function (callback) {
  const novoArrayMapeado = []

  for(let indice = 0; indice <= this.length - 1; indice++ ){
    const resultado = callback(this[indice], indice)
    novoArrayMapeado.push(resultado)
  }

  return novoArrayMapeado;
}

async function main() {
  try {
    const result = await service.obterRepositorios('Javascript')
    /*
    const names = []
    result.items.forEach(function(item){
      names.push(item.name)
    })
    */
    
    /*
    const names = result.items.map(function (repositorio) {
      return repositorio.name
    })
    */

    //const names = result.items.map((repositorio) => repositorio.name)
    
    const names = result.items.meuMap(function (repositorio, indice) {
      return `[${indice}] ${repositorio.name}`
    })
    console.log('names', names)
  } catch (error) {
    console.error('Deu RUIM', error)
  }
}
main()