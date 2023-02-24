var numeroHTML = document.getElementById('numero')

function calcular() {
  var n = parseInt(numeroHTML.value)
  var i

  document.getElementById('tabuada').innerHTML = 'Tabuada do ' + n

  if (resultado != null) {
    document.getElementById('resultado').innerHTML = ''
  }
  for (i = 1; i <= 10; i++) {
    document.getElementById('resultado').innerHTML +=
      n + 'x' + i + '=' + n * i + '<br />'
  }
}
