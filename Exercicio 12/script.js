var coeficienteaHTML = document.getElementById('coeficientea')
var coeficientebHTML = document.getElementById('coeficienteb')
var coeficientecHTML = document.getElementById('coeficientec')

function calcular() {
  var coeficienteA = parseFloat(coeficienteaHTML.value)
  var coeficienteB = parseFloat(coeficientebHTML.value)
  var coeficienteC = parseFloat(coeficientecHTML.value)
  //Cálculo Delta
  var delta = coeficienteB * coeficienteB - 4 * coeficienteA * coeficienteC

  if (delta > 0) {
    var x1 = (-coeficienteB + Math.sqrt(delta)) / (2 * coeficienteA)
    var x2 = (-coeficienteB - Math.sqrt(delta)) / (2 * coeficienteA)
    document.getElementById('x1').innerHTML = 'X1 = ' + x1.toFixed(4)
    document.getElementById('x2').innerHTML = 'X2 = ' + x2.toFixed(4)
    document.getElementById('raizes').innerHTML = ''
  } else {
    document.getElementById('x1').innerHTML = ''
    document.getElementById('x2').innerHTML = ''
    document.getElementById('raizes').innerHTML =
      'Esta equação não possui raizes reais.'
  }
}
