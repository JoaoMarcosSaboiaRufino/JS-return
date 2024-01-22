let adicionar = document.getElementById('acrescentar');
let resetar = document.getElementById('resetar');
let diminuir = document.getElementById('diminuir');
let numero = document.getElementById('numero');

let valor = 0;

adicionar.addEventListener('click', adicao);
diminuir.addEventListener('click', subtracao);
resetar.addEventListener('click', reset);

function adicao() {
    valor += 1;
    numero.innerText = valor;
    if(valor > 0) {
       numero.style.color = 'green';
    }
}
function subtracao() {
    valor -= 1;
    numero.innerText = valor;
    if(valor > 0) {
        numero.style.color = 'green';
    }
    else if(valor === 0) {
        numero.style.color = 'gray';
    }
    else if(valor < 0) {
        numero.style.color = 'red';
    }
}
function reset() {
    valor = 0;
    numero.innerText = valor;
    if(valor === 0) {
        numero.style.color = 'gray';
    }
}

