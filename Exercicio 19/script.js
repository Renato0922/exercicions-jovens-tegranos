var salarioHTML = document.getElementById('salario')

function calcular() {
  var salario = parseFloat(salarioHTML.value)

  if (salario >= 0 && salario <= 999.0) {
    var porcentagem20 = 20 / 100
    var salariopor20 = salario * porcentagem20
    var novosalario20 = salario + salariopor20
    var aumentopor20 = novosalario20 - salario

    document.getElementById('novosalario').innerHTML =
      'Novo salário = R$ ' + novosalario20.toFixed(2)
    document.getElementById('aumento').innerHTML =
      'Aumento = R$ ' + aumentopor20.toFixed(2)
    document.getElementById('porcentagem').innerHTML = 'Porcentagem: 20%'
  }
  if (salario >= 1000.0 && salario <= 2999.0) {
    var porcentagem15 = 15 / 100
    var salariopor15 = salario * porcentagem15
    var novosalario15 = salario + salariopor15
    var aumentopor15 = novosalario15 - salario

    document.getElementById('novosalario').innerHTML =
      'Novo salário = R$ ' + novosalario15.toFixed(2)
    document.getElementById('aumento').innerHTML =
      'Aumento = R$ ' + aumentopor15.toFixed(2)
    document.getElementById('porcentagem').innerHTML = 'Porcentagem: 15 %'
  }
  if (salario >= 3000.0 && salario <= 7999.0) {
    var porcentagem10 = 10 / 100
    var salariopor10 = salario * porcentagem10
    var novosalario10 = salario + salariopor10
    var aumentopor10 = novosalario10 - salario

    document.getElementById('novosalario').innerHTML =
      'Novo salário = R$ ' + novosalario10.toFixed(2)
    document.getElementById('aumento').innerHTML =
      'Aumento = R$ ' + aumentopor10.toFixed(2)
    document.getElementById('porcentagem').innerHTML = 'Porcentagem: 10 %'
  }
  if (salario >= 8000) {
    var porcentagem5 = 5 / 100
    var salariopor5 = salario * porcentagem5
    var novosalario5 = salario + salariopor5
    var aumentopor5 = novosalario5 - salario

    document.getElementById('novosalario').innerHTML =
      'Novo salário = R$ ' + novosalario5.toFixed(2)
    document.getElementById('aumento').innerHTML =
      'Aumento = R$ ' + aumentopor5.toFixed(2)
    document.getElementById('porcentagem').innerHTML = 'Porcentagem: 5 %'
  }
}
