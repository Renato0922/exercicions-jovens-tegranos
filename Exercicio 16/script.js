var medida1HTML = document.getElementById('medida1')
var medida2HTML = document.getElementById('medida2')
var medida3HTML = document.getElementById('medida3')

var medidas = []

function calcular() {
  medidas.push(medida1HTML.value, medida2HTML.value, medida3HTML.value)
  var maiormedida = Math.max(...medidas)

  document.getElementById('mostrarmedida1').innerHTML =
    'Primeira medida: ' + medidas[0]
  document.getElementById('mostrarmedida2').innerHTML =
    'Segunda medida: ' + medidas[1]
  document.getElementById('mostrarmedida3').innerHTML =
    'Terceira medida: ' + medidas[2]
  document.getElementById('maiormedida').innerHTML =
    'MAIOR DISTÂNCIA = ' + maiormedida

  if (medidas != null) {
    medidas.length = 0
  }
}
