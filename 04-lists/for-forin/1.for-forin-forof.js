const service = require('./api')

async function main() {
  try {
    const result = await service.obterRepositorios('Javascript')
    const names = []
    /*
    ######### FOR #########
    console.time('tempo for')
    for(let i=0; i<= result.items.length -1; i++) {
      const repositorio = result.items[i]
      names.push(repositorio.name)
    }
    console.timeEnd('tempo for')
    */

    /*
    ######## FOR IN ###########
    console.time('tempo for in')
    for(let i in result.items) {
      const repositorio = result.items[i]
      names.push(repositorio.name)
    }
    console.timeEnd('tempo for in')
    */

    console.time('tempo forof')
    for(repositorio of result.items){
      names.push(repositorio.name)
    }
    console.timeEnd('tempo forof')

    console.log('names', names)

  } catch (error) {
    console.error('erro interno', error)
  }

}
main()