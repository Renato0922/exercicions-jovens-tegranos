var nota1HTML = document.getElementById('nota1')
var nota2HTML = document.getElementById('nota2')

function calcular() {
  var nota1 = parseFloat(nota1HTML.value)
  var nota2 = parseFloat(nota2HTML.value)

  if (nota1 > 0 && nota2 > 0) {
    var soma = nota1 + nota2

    var notafinal = soma / 2

    if (notafinal > 60.0) {
      document.getElementById('resultado').innerHTML = 'APROVADO'
    } else {
      document.getElementById('resultado').innerHTML = 'REPROVADO'
    }
    document.getElementById('exibirnota1').innerHTML =
      'Nota primeiro semestre: ' + nota1.toFixed(1)
    document.getElementById('exibirnota2').innerHTML =
      'Nota segundo semestre: ' + nota2.toFixed(1)
    document.getElementById('media').innerHTML =
      'NOTA FINAL = ' + notafinal.toFixed(1)
  } else {
    alert('Digite os dados corretamente.')
  }
}
