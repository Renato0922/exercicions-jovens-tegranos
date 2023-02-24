var idadeHTML1 = document.getElementById('idade1')
var idadeHTML2 = document.getElementById('idade2')

var nomeHTML1 = document.getElementById('nome1')
var nomeHTML2 = document.getElementById('nome2')

function calcular() {
  //Idades
  var idade1 = parseInt(idadeHTML1.value)
  var idade2 = parseInt(idadeHTML2.value)

  //Nomes
  var nome1 = nomeHTML1.value
  var nome2 = nomeHTML2.value

  if (idade1 && idade2 != 0) {
    if (nome1 && nome2 != null) {
      var soma = idade1 + idade2

      var media = soma / 2

      //Mostrar resultado, nomes e idades
      document.getElementById('idad1').innerHTML = idade1.toFixed(1)
      document.getElementById('idad2').innerHTML = idade2.toFixed(1)
      document.getElementById('nom1').innerHTML = nome1
      document.getElementById('nom2').innerHTML = nome2
      document.getElementById('resultado').innerHTML = media.toFixed(1)
    } else {
      alert('Preencha os nomes corretamente.')
    }
  } else {
    alert('Preencha as idades corretamente.')
  }
}
