const texto = document.getElementById('caixa_texto'); 
const butaozinhoadd = document.getElementById('butaoadd');
const butaozinhorem = document.getElementById('butaorem');
const Lista = document.getElementById('lista');
const contagem = document.getElementById('contador');
const remover = document.getElementById('removertodos')

remover.addEventListener('click', removendoTudo);


let contador = document.createElement('p');
contagem.appendChild(contador)
let contando = 1;

function adicionar(){
    let p = document.createElement('p');
    p.innerText = texto.value;
    Lista.appendChild(p)
    contando += 1;
    atualizar('adicionando');
}

function atualizar(acao){
    if(acao === 'adicionando'){
        contador.innerText = contando;
    }
    else if(acao === 'removendo'){
        contador.innerText = contando;
    }
}

function deletar(){
    let ultimoItem = Lista.lastChild;
    Lista.removeChild(ultimoItem);
    atualizar('removendo');
    contando -= 1;
}

butaozinhoadd.addEventListener('click', adicionar);
butaozinhorem.addEventListener('click', deletar);

function removendoTudo() {
    Lista.innerHTML = ''
    contando = 0
    contador.innerText = contando
}