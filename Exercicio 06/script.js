var nomeHTML = document.getElementById('nome')

var horaHTML = document.getElementById('horas')

function calcular() {
  var nome = nomeHTML.value
  var hora = horaHTML.value

  if (nome != '' && hora > 0) {
    var salario = hora * 50

    document.getElementById('nome1').innerHTML = nome
    document.getElementById('horas2').innerHTML = hora
    document.getElementById('salario').innerHTML =
      'O pagamento para ' + nome + ' deve ser de R$: ' + salario.toFixed(2)
  } else {
    alert('Digite os dados corretamente.')
  }
}
