var numeroHTML = document.getElementById('numero')

let unidades = [
  'Zero',
  'Um',
  'Dois',
  'Três',
  'Quatro',
  'Cinco',
  'Seis',
  'Sete',
  'Oito',
  'Nove',
  'Dez',
  'Onze',
  'Doze',
  'Treze',
  'Quatorze',
  'Quinze',
  'Dezesseis',
  'Dezessete',
  'Dezoito',
  'Dezenove'
]

let dezenas = [
  'Onze',
  'Vinte',
  'Trinta',
  'Quarenta',
  'Cinquenta',
  'Sessenta',
  'Setenta',
  'Oitenta',
  'Noventa'
]

function verificar() {
  var numeros = numeroHTML.value

  var numextens

  if (numeros != '') {
    if (numeros == 100) {
      numextens = 'Cem'
    } else {
      if (numeros > 100) {
        alert('Digite um número de 0 à 100 sem (0) à esquerda.')
        document.getElementById('extenso').innerHTML = ''
      }
    }
    if (numeros <= 99 && numeros >= 20) {
      var extenso = numeros.toString().split('')

      var n1 = extenso[0]
      var n2 = extenso[1]

      var numextens = dezenas[n1 - 1]

      if (n2 > 0) {
        numextens += ' ' + 'e' + ' ' + unidades[n2]
      }
    } else {
      if (numeros >= 0 && numeros <= 19) {
        numextens = unidades[numeros]
      }
    }
    document.getElementById('extenso').innerHTML = numextens
  } else {
    document.getElementById('extenso').innerHTML = ''
    alert('Digite algum número de 0 à 100 sem (0) à esquerda.')
  }
}
