/*
  0 - Obter um usuário
  1 - Obter numero de telefone de um usuario a 
  partir do Id.
  2 - Obter o endereço do usuario pelo ID
*/
// importamos um modulo interno do node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
      return resolve({
        id: 1,
        nome: "Felipe",
        dataNascimento: new Date()
      })
    }, 1000)
  })
}

function obterTelefone(idUsuario) {
  return new Promise(function resolvePromise(resolve, rejected) {
    setTimeout(() => {
      return resolve({
        ddd: 67,
        telefone: '999403530'
      })
    }, 2000);
  })

}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'Joaquim Murtinho',
      numero: 1225,
      complemento: 'casa 03'
    }, 2000)
  })
}

//1 passo adicionar a palavra async -> automatica-
//mente irá retornar uma promise
main()
async function main() {
  try {
    console.time('medida-promise')
    const usuario = await obterUsuario()
    //const telefone = await obterTelefone(usuario.id)
    //const endereco = await obterEnderecoAsync(usuario.id)
    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEnderecoAsync(usuario.id)
    ])
    const endereco = resultado[1]
    const telefone = resultado[0]

    console.log(`
      Nome: ${usuario.nome}
      Telefone: (${telefone.ddd}) ${telefone.telefone}
      Endereço: ${endereco.rua}, ${endereco.numero} ${endereco.complemento}
    `)
    console.timeEnd('medida-promise')

  }
  catch(error) {
    console.error('Deu RUIM', error)
  }
}

/*
const usuarioPromise = obterUsuario()
//para manipular o sucesso usamos a função .then
//para manipular erros usamos a função .catch
//usuario -> telefone -> 
usuarioPromise
  .then(function (usuario) {
    return obterTelefone(usuario.id)
      .then(function resolverTelefone(result) {
        return {
          usuario: {
            nome: usuario.nome,
            id: usuario.id
          },
          telefone: result
        }
      })
  })
  .then(function (resultado) {
    const endereco = obterEnderecoAsync(resultado.usuario.id)
    return endereco.then(function resolverEndereco(result) {
      return {
        usuario: resultado.usuario,
        telefone: resultado.telefone,
        endereco: result
      }
    })
  })
  .then(function (resultado) {
    console.log(`
      Nome: ${resultado.usuario.nome}
      Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero} ${resultado.endereco.complemento}
      Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
    `)
  })
  .catch(function (error) {
    console.error('Deu RUIM', error)
  })

*/













/*obterUsuario(function resolverUsuario(error, usuario) {
  // null || "" || 0===false
  if(error){
    console.error('Deu ruim em USUARIO', error)
    return;
  }

  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if(error1){
      console.error('Deu ruim em TELEFONE', error1)
      return;
    }

    obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
      if(error2){
        console.error('Deu ruim no ENDEREÇO', error2)
        return;
      }

      console.log(`
        Nome: ${usuario.nome},
        Endereço: ${endereco.rua}, ${endereco.numero}, ${endereco.complemento},
        Telefone: (${telefone.ddd})${telefone.telefone}
      `)
    })
  })
})
*/