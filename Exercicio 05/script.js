var raioHTML = document.getElementById('raio')

function calcular() {
  var raio = raioHTML.value

  var pi = 3.14159

  if (raio > 0) {
    var raio2 = raio * raio

    var resultado = raio2 * pi

    document.getElementById('resultado').innerHTML =
      'ÁREA: ' + resultado.toFixed(3)
  } else {
    alert('Digite o valor corretamente.')
  }
}
