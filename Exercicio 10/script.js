var valor1HTML = document.getElementById('valor1')
var valor2HTML = document.getElementById('valor2')
var valor3HTML = document.getElementById('valor3')

var valores = []

function calcular() {
  valores.push(valor1HTML.value, valor2HTML.value, valor3HTML.value)

  var valorMinimo = Math.min(...valores)

  document.getElementById('primeirovalor').innerHTML =
    'Primeiro valor: ' + valores[0]
  document.getElementById('segundovalor').innerHTML =
    'Segundo valor: ' + valores[1]
  document.getElementById('terceirovalor').innerHTML =
    'Terceiro valor: ' + valores[2]
  document.getElementById('menorvalor').innerHTML =
    'Menor valor = ' + valorMinimo
  if (valores != null) {
    valores.length = 0
  }
}
