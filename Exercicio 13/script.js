var minutosHTML = document.getElementById('minutos')

function calcular() {
  var minutos = parseInt(minutosHTML.value)

  var preco = 50.0
  if (minutos >= 0 && minutos <= 100) {
    preco = 50.0
  }
  if (minutos > 100) {
    preco = preco + (minutos - 100) * 2
  }
  document.getElementById('minuto').innerHTML = 'Minutos usados: ' + minutos
  document.getElementById('preco').innerHTML =
    'Valor a pagar: R$ ' + preco.toFixed(2)
}
