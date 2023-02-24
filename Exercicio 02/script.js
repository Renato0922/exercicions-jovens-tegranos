var alturaHTML = document.getElementById('altura')
var baseHTML = document.getElementById('base')

function calculoDiagonal() {
  var altura = alturaHTML.value
  var base = baseHTML.value

  if (altura && base > 0) {
    // Área
    var area = altura * base

    // Perímetro
    var perimetro1 = altura * 2
    var perimetro2 = base * 2
    var perimetro = perimetro1 + perimetro2

    // Diagonal
    var cateto1 = altura * altura
    var cateto2 = base * base

    var somac = cateto1 + cateto2

    var diagonal = Math.sqrt(somac) - 0.01

    document.getElementById('area').innerHTML = 'ÁREA: ' + area.toFixed(4)
    document.getElementById('perimetro').innerHTML =
      'PERÍMETRO: ' + perimetro.toFixed(4)
    document.getElementById('resultado').innerHTML =
      'DIAGONAL' + diagonal.toFixed(4)
  } else {
    alert('Dados inválidos!')
  }
}
