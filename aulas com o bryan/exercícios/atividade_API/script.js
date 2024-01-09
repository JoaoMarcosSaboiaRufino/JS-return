//"https://rickandmortyapi.com//api.character"
let lista = document.getElementById('vivosLista')

async function dados() {
    let pegar = await fetch('https://rickandmortyapi.com/api/character');
    let json = await pegar.json();
    console.log(json);
    json.results.forEach(cada => {
        console.log(cada.image);
        console.log(cada.name);
        gerarImagem(cada.image);
        gerarNome(cada.name);
        gerarStatus(cada.status);
        let separador = document.createElement('p');
        separador.innerText = '===================================';
        window.document.body.appendChild(separador);
    });
    let butao = document.createElement('button');
    butao.innerText = 'Personagens vivos';
    window.document.body.appendChild(butao);
    butao.addEventListener('click', vivos);

    function vivos() {
        json.results.forEach(cada => {
            if(cada.status === 'Alive') {
                gerarImagem2(cada.image);
                gerarNome2(cada.name);
                let separador = document.createElement('p');
                
                
            }
        });
    }
}

dados()

function gerarImagem(link) {
    let imagem = document.createElement("img");
    imagem.src = link;
    window.document.body.appendChild(imagem);
}

function gerarNome(nome) {
    let Nome = document.createElement('p');
    Nome.innerText = nome;
    window.document.body.appendChild(Nome);
}
function gerarStatus(status) {
    let stats = document.createElement('p');
    stats.innerText = status;
    window.document.body.appendChild(stats);
}

function gerarImagem2(link) {
    let imagem = document.createElement("img");
    imagem.src = link;
    lista.appendChild(imagem);
}
function gerarNome2(nome) {
    let Nome = document.createElement('p');
    Nome.innerText = nome;
    lista.appendChild(Nome);
}