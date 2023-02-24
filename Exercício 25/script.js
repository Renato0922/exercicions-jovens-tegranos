var dataHTML = document.getElementById('data')

function verificar() {
  var data = dataHTML.value

  var signo

  var dataextens = data.toString().split('')

  var dia = dataextens[0] + dataextens[1]
  var mes = dataextens[3] + dataextens[4]

  if (data != '' || dataextens.lenght == 4) {
    if (mes > 0 && mes <= 12) {
      if (dia > 0 && dia <= 31) {
        if ((dia >= 21 && mes == 03) || (dia <= 20 && mes == 04)) {
          signo = 'Áries'
        }
        if ((dia >= 21 && mes == 04) || (dia <= 20 && mes == 05)) {
          signo = 'Touro'
        }
        if ((dia >= 21 && mes == 05) || (dia <= 20 && mes == 06)) {
          signo = 'Gêmeos'
        }
        if ((dia >= 21 && mes == 06) || (dia <= 22 && mes == 07)) {
          signo = 'Câncer'
        }
        if ((dia >= 23 && mes == 07) || (dia <= 22 && mes == 08)) {
          signo = 'Leão'
        }
        if ((dia >= 23 && mes == 08) || (dia <= 22 && mes == 09)) {
          signo = 'Virgem'
        }
        if ((dia >= 23 && mes == 09) || (dia <= 22 && mes == 10)) {
          signo = 'Libra'
        }
        if ((dia >= 23 && mes == 10) || (dia <= 21 && mes == 11)) {
          signo = 'Escorpião'
        }
        if ((dia >= 22 && mes == 11) || (dia <= 21 && mes == 12)) {
          signo = 'Sagitário'
        }
        if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 01)) {
          signo = 'Capricórnio'
        }
        if ((dia >= 21 && mes == 01) || (dia <= 18 && mes == 02)) {
          signo = 'Aquário'
        }
        if ((dia >= 19 && mes == 02) || (dia <= 20 && mes == 03)) {
          signo = 'Peixes'
        }
        if (dia >= 30 && mes == 02) {
          alert('Digite um dia válido.')
          document.getElementById('verificacao').innerHTML = ''
        }
      } else {
        alert('Digite um dia válido.')
        document.getElementById('verificacao').innerHTML = ''
      }
    } else if (mes >= 13) {
      alert('Digite um mês válido.')
      document.getElementById('verificacao').innerHTML = ''
    }
  } else {
    alert('Digite uma data válida.')
    document.getElementById('verificacao').innerHTML = ''
  }
  document.getElementById('verificacao').innerHTML = 'Signo: ' + signo
}
