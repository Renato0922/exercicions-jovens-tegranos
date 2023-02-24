var numeroHTML = document.getElementById('numero')

function verificar() {
  var numero = String(numeroHTML.value)

  var cpfDV1 = numero[9]
  var cpfDV2 = numero[10]

  var soma = 0

  for (i = 0; i <= 8; i++) {
    soma += numero[i] * (10 - i)
  }

  var calcDV1 = 11 - (soma % 11)

  soma = 0

  for (i = 0; i <= 9; i++) {
    soma += numero[i] * (11 - i)
  }

  var calcDV2 = 11 - (soma % 11)

  if (cpfDV1 == calcDV1 && cpfDV2 == calcDV2) {
    document.getElementById('resultado').innerHTML = 'O CPF é válido.'
  } else {
    document.getElementById('resultado').innerHTML = 'O CPF não é válido.'
  }
}
