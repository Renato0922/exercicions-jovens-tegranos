var glicoseHTML = document.getElementById('glicose')

function calcular() {
  var glicose = parseFloat(glicoseHTML.value)

  if (glicose > 0) {
    if (glicose <= 99) {
      document.getElementById('medida').innerHTML =
        'Medida da glicose: ' + glicose.toFixed(1)
      document.getElementById('resultado').innerHTML = 'Classificação: Normal'
    }
    if (glicose >= 100 && glicose <= 139) {
      document.getElementById('medida').innerHTML =
        'Medida da glicose: ' + glicose.toFixed(1)
      document.getElementById('resultado').innerHTML = 'Classificação: Elevado'
    }
    if (glicose >= 140) {
      document.getElementById('medida').innerHTML =
        'Medida da glicose: ' + glicose.toFixed(1)
      document.getElementById('resultado').innerHTML = 'Classificação: Diabetes'
    }
  } else {
    alert('Digite a medida corretamente.')
  }
}
