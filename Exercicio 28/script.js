var n1HTML = document.getElementById('n1')
var n2HTML = document.getElementById('n2')
var n3HTML = document.getElementById('n3')
var n4HTML = document.getElementById('n4')
var n5HTML = document.getElementById('n5')

let numero = []

function calcular() {
  numero.push(
    n1HTML.value,
    n2HTML.value,
    n3HTML.value,
    n4HTML.value,
    n5HTML.value
  )

  var maior = Math.max(...numero)
  var menor = Math.min(...numero)
  document.getElementById('numeros').innerHTML = menor + ' e ' + maior
}
