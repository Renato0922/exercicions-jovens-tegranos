var medidaaHTML = document.getElementById('medidaa')
var medidabHTML = document.getElementById('medidab')
var medidacHTML = document.getElementById('medidac')

function calcular() {
  var medidaA = parseFloat(medidaaHTML.value)
  var medidaB = parseFloat(medidabHTML.value)
  var medidaC = parseFloat(medidacHTML.value)

  if (medidaA && medidaB && medidaC > 0) {
    //Calcular área quadrado
    var areaquad = medidaA * medidaA

    //Calcular área triângulo
    var areatrian = (medidaA * medidaB) / 2

    //Calcular área trapézio
    var bases = medidaA + medidaB
    var basealtura = bases * medidaC
    var areatrape = basealtura / 2

    //Mostrar na tela
    //Área quadrado
    document.getElementById('areaquad').innerHTML =
      'ÁREA DO QUADRADO = ' + areaquad.toFixed(4)

    //Área triângulo
    document.getElementById('areatrian').innerHTML =
      'ÁREA DO TRIÂNGULO = ' + areatrian.toFixed(4)

    //Área trapézio
    document.getElementById('areatrape').innerHTML =
      'ÁREA DO TRAPÉZIO = ' + areatrape.toFixed(4)
  } else {
    alert('Dados iválidos')
  }
}
