let butao = document.getElementById('butex');
let texto = document.getElementById('texto');
let buba = document.getElementById('buba');

const cores = ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Pink', 'Purple'];

butao.addEventListener('click', mudarCor);

function mudarCor() {
    let numeroale = Math.floor((Math.random(0, 1)) * 7);
    
    console.log(numeroale);
    console.log(cores[numeroale])
    window.document.body.style.backgroundColor = cores[numeroale];
    texto.innerText = 'Background Color : ' + cores[numeroale];
}
