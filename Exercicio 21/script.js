var numero1HTML = document.getElementById('numero')

function calcular(numero1) {
  var numero1 = numero1HTML.value
  document.getElementById('resultado').innerHTML = ''
  for (let i = 0; i <= numero1; i += 2) {
    if (i != 0) {
      document.getElementById('resultado').innerHTML += i + '<br />'
    }
  }
}
