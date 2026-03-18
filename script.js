

var botaoAdicionar = document.querySelector('#botaoAdicionar')
var digitarTarefas 
var mostrarTarefas = document.querySelector('.mostrarTarefas')
var imagem

var spanImg = document.querySelector('.spanImg')

function adicionar() {
    
    digitarTarefas = document.querySelector('#digitarTarefas')
     
    var criarTarefa = document.createElement('p')
    criarTarefa.setAttribute('id', 'paragrafo-tarefa')

    var botaoExcluir = document.createElement('img')
    botaoExcluir.setAttribute('src', 'imagens/icons8-lixeira-24.png')

    criarTarefa.innerHTML = `${digitarTarefas.value}`


    mostrarTarefas.append(criarTarefa)
    criarTarefa.append(botaoExcluir)

    botaoExcluir.onclick = function(){
    criarTarefa.remove()
}

digitarTarefas.focus()
digitarTarefas.value = ''

}

