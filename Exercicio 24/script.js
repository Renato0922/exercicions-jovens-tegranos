var numero1HTML = document.getElementById('n1')
var numero2HTML = document.getElementById('n2')
var numero3HTML = document.getElementById('n3')
var numero4HTML = document.getElementById('n4')
var numero5HTML = document.getElementById('n5')

var numero1 = numero1HTML.value
var numero2 = numero2HTML.value
var numero3 = numero3HTML.value
var numero4 = numero4HTML.value
var numero5 = numero5HTML.value

let numeros = []

function calcular() {
  numeros.push(
    numero1HTML.value,
    numero2HTML.value,
    numero3HTML.value,
    numero4HTML.value,
    numero5HTML.value
  )
  numeros.sort((a, b) => a - b)

  document.getElementById('numeros').innerHTML =
    numero1 + ', ' + numero2 + ', ' + numero3 + ', ' + numero4 + ', ' + numero5
  document.getElementById('crescente').innerHTML = numeros
}
