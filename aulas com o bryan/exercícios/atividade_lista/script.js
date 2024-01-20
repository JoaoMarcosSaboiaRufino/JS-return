const cardsArray = [
    { titulo: "Arroz", type: "alimenticio" },
    { titulo: "Bateria", type: "eletronico" },
    { titulo: "Livro", type: "literatura" },
    { titulo: "Notebook", type: "eletronico" },
    { titulo: "Maçã", type: "alimenticio" },
    { titulo: "Fone de Ouvido", type: "eletronico" },
    { titulo: "Cadeira", type: "moveis" },
    { titulo: "Laranja", type: "alimenticio" },
    { titulo: "Relógio", type: "acessorio" },
    { titulo: "Sapato", type: "vestuario" },
    { titulo: "Televisão", type: "eletronico" },
    { titulo: "Mesa", type: "moveis" },
    { titulo: "Banana", type: "alimenticio" },
    { titulo: "Caneta", type: "papelaria" },
];

let inputTexto = window.document.getElementById('texto')
let butao = window.document.getElementById('butec');
let div = window.document.getElementById('SegundaPrincipal');
let eletronicos = window.document.getElementById('eletro');
let alimentos = window.document.getElementById('alimentos');
let moveis = window.document.getElementById('moveis');



butao.addEventListener('click', clickar);
eletronicos.addEventListener('click', geral1);
alimentos.addEventListener('click', geral2);
moveis.addEventListener('click', geral3);

function clickar() {
    div.innerHTML = ''
    let item = inputTexto.value;

    for(let i = 0; i <= cardsArray.length-1; i++) {
        console.log(cardsArray[i].titulo)
        if(cardsArray[i].titulo === item) {
            let divfilha = document.createElement('div');
            divfilha.classList.add('gDiv');
            div.appendChild(divfilha);
            let outraDiv = document.createElement('div');
            outraDiv.classList.add('types');
            divfilha.appendChild(outraDiv);
            let paragrafo = document.createElement('p');
            paragrafo.innerText = cardsArray[i].type;
            outraDiv.appendChild(paragrafo);
            let slaDiv = document.createElement('div');
            slaDiv.classList.add('alet');
            slaDiv.appendChild(outraDiv);
            divfilha.appendChild(slaDiv);
            console.log('certo');
            let slaDiv2 = document.createElement('div');
            slaDiv2.classList.add('nume');
            divfilha.appendChild(slaDiv2);
            let item2 = document.createElement('p');
            item2.classList.add('nameItem');
            item2.innerText = item;
            slaDiv2.appendChild(item2);
        } 
    }
    inputTexto.value = ''
}

function geral1() {
    geral('eletronico');
}

function geral2() {
    geral('alimenticio');
}

function geral3() {
    geral('moveis');
}

function geral(tipo) {
    inputTexto.value = ''
    div.innerHTML = ''
    for(let i = 0; i <= cardsArray.length-1; i++) {
        let item = cardsArray[i].titulo;
        if(cardsArray[i].type == tipo) {
            let divfilha = document.createElement('div');
            divfilha.classList.add('gDiv');
            div.appendChild(divfilha);
            let outraDiv = document.createElement('div');
            outraDiv.classList.add('types');
            divfilha.appendChild(outraDiv);
            let paragrafo = document.createElement('p');
            paragrafo.innerText = cardsArray[i].type;
            outraDiv.appendChild(paragrafo);
            let slaDiv = document.createElement('div');
            slaDiv.classList.add('alet');
            slaDiv.appendChild(outraDiv);
            divfilha.appendChild(slaDiv);
            console.log('certo');
            let slaDiv2 = document.createElement('div');
            slaDiv2.classList.add('nume');
            divfilha.appendChild(slaDiv2);
            let item2 = document.createElement('p');
            item2.classList.add('nameItem');
            item2.innerText = item;
            slaDiv2.appendChild(item2);
        } 
    }
}
