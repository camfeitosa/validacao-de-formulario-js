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


