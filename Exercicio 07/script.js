var quilometrosHTML = document.getElementById('quilometros')
var combustivelHTML = document.getElementById('combustivel')

function calcular() {
  var quilometros = parseInt(quilometrosHTML.value)
  var combustivel = parseInt(combustivelHTML.value)

  if (quilometros > 0 && combustivel > 0) {
    var resultadomedia = quilometros / combustivel

    document.getElementById('distanciapercorrida').innerHTML =
      'Distância percorrida: ' + quilometros
    document.getElementById('combustivelgasto').innerHTML =
      'Combustível gasto: ' + combustivel.toFixed(1)
    document.getElementById('resultadomedia').innerHTML =
      'Consumo médio: ' + resultadomedia.toFixed(3)
  } else {
    alert('Dados inválidos.')
  }
}
