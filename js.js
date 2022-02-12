// outra forma de fazer

// data do lançamento: 02/03/2022
const dataDoLancamento = new Date(2022, 01, 02)

// Variáveis: ms = milissegundos
const segundoEmMs = 1000
const minutoEmMs = segundoEmMs * 60
const horaEmMs = minutoEmMs * 60
const diaEmMs = horaEmMs * 24

// Funcionalidade
function fazerContagemRegressiva() {
  const diaDeHoje = new Date()

  const tempoRestanteParaOLancamentoEmMs = dataDoLancamento - diaDeHoje

  // converter milissegundos para o seu respectivo tempo
  const dias = String(Math.floor(tempoRestanteParaOLancamentoEmMs / diaEmMs))
  const horas = String(
    Math.floor((tempoRestanteParaOLancamentoEmMs % diaEmMs) / horaEmMs)
  )
  const minutos = String(
    Math.floor((tempoRestanteParaOLancamentoEmMs % horaEmMs) / minutoEmMs)
  )
  const segundos = String(
    Math.floor((tempoRestanteParaOLancamentoEmMs % minutoEmMs) / segundoEmMs)
  )

  document.querySelector('div').textContent = `${dias} : ${horas.padStart(
    2,
    '0'
  )}: ${minutos.padStart(2, '0')} : ${segundos.padStart(2, '0')}`
  if (tempoRestanteParaOLancamentoEmMs < 0) {
    clearInterval(ana);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }

  }


 const ana = setInterval(fazerContagemRegressiva, 1000)
