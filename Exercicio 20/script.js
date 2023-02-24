var numero1HTML = document.getElementById('numero1')
var numero2HTML = document.getElementById('numero2')

function calcular() {
  numero1 = parseInt(numero1HTML.value)
  numero2 = parseInt(numero2HTML.value)

  let soma = 0
  for (let i = numero1; i <= numero2; i++) {
    soma += i
    document.getElementById('resultado').innerHTML = 'Resultado: ' + soma
  }
}
