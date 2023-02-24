var numero1HTML = document.getElementById('numero1')
var numero2HTML = document.getElementById('numero2')

function calcular() {
  var numero1 = parseInt(numero1HTML.value)
  var numero2 = parseInt(numero2HTML.value)

  if (numero1 > 0 && numero2 > 0) {
    var multiplo = numero1 % numero2

    if (multiplo == 0) {
      document.getElementById('multiplos').innerHTML = 'São múltiplos.'
    } else {
      document.getElementById('multiplos').innerHTML = 'Não são múltiplos.'
    }
    document.getElementById('n1').innerHTML = numero1
    document.getElementById('n2').innerHTML = numero2
  } else {
    alert('Digite os dados corretamente.')
  }
}
