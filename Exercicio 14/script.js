var nomeproHTML = document.getElementById('nomepro')
var quantidadeHTML = document.getElementById('quantidade')
var dinheiroHTML = document.getElementById('dinheiro')
var precouHTML = document.getElementById('precou')

function pagar() {
  var nomepro = nomeproHTML.value
  var quantidade = quantidadeHTML.value
  var dinheiro = parseFloat(dinheiroHTML.value)
  var precou = parseFloat(precouHTML.value)

  if (nomepro && quantidade && dinheiro > 0) {
    var total = precou * quantidade

    if (dinheiro > total) {
      var troco = dinheiro - total

      document.getElementById('troco').innerHTML = 'TROCO = ' + troco.toFixed(2)
      document.getElementById('dinheironecessario').innerHTML = ''
    } else {
      var restanten = dinheiro - total
      var restante = restanten * -1

      document.getElementById('dinheironecessario').innerHTML =
        'DINHEIRO INSUFICIENTE. FALTAM ' + restante.toFixed(2) + ' REAIS.'
      document.getElementById('troco').innerHTML = ''
    }

    document.getElementById('exibirnome').innerHTML =
      'Nome do produto: ' + nomepro
    document.getElementById('quantidadecompr').innerHTML =
      'Quantidade comprada: ' + quantidade
    document.getElementById('exibirpreco').innerHTML =
      'Preço unitário do produto: ' + precou.toFixed(2)
    document.getElementById('exibirdinheiro').innerHTML =
      'Dinheiro recebido: ' + dinheiro.toFixed(2)
    document.getElementById('total').innerHTML = 'Total = ' + total.toFixed(2)
  } else {
    alert('Digite os dados corretamente.')
  }
}
