var numero1HTML = document.getElementById('numero1')
var numero2HTML = document.getElementById('numero2')

function calcular() {
  var numero1 = parseInt(numero1HTML.value)
  var numero2 = parseInt(numero2HTML.value)

  let soma = 0
  for (let i = numero1; i < numero2; i++) {
    if (i % 2 === 1) {
      soma += i
      document.getElementById('resultado').innerHTML =
        'SOMA DOS ÍMPARES = ' + soma
    }
  }
}
