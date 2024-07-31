const nascimento = document.querySelector('[type=date]')

document.querySelector('.data').addEventListener('click', ()=>{
  const dataDeNascimento = new Date(nascimento.value).getFullYear()

  const anoAtual = new Date().getFullYear()
  
  const calculaIdade = anoAtual - dataDeNascimento
  // console.log(`Voce tem ${calculaIdade} anos`)

  const div = document.querySelector('.container')

  div.innerHTML = `<h1>Você tem ${calculaIdade} anos</h1>
  <p>Nasceu em ${dataDeNascimento}</p>`

})

// function validaIdade(data){
//   const dataAtual = new Date()
//   const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

//   return dataAtual >= dataMais18
// }

