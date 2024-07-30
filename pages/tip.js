const botao = document.querySelector('[type=submit]')
let preco = document.querySelector('.preco')
let taxa = document.querySelector('.taxa')

botao.addEventListener('click', (e) => {
  e.preventDefault()

  preco = preco.value
  taxa = taxa.value

  const calculaTaxa = (preco * taxa) / 100
  const valorFinal = Number(preco) + calculaTaxa

  console.log(`${preco} -> ${taxa} = ${valorFinal}`)
})