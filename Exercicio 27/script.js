var palavraHTML = document.getElementById('palavra')

function verificar() {
  var palavra = palavraHTML.value
  var palindromo = palavra.split('').reverse().join('')

  if (palavra == palindromo) {
    document.getElementById('resultado').innerHTML = 'É um palíndromo.'
  } else {
    document.getElementById('resultado').innerHTML = 'Não é um palíndromo.'
  }
}
