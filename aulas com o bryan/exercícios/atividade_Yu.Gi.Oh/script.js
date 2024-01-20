let butao1 = window.document.getElementById('butao1');
let butao2 = window.document.getElementById('butao2');
let caixatexto1 = window.document.getElementById('caixa1');
let caixatexto2 = window.document.getElementById('caixa2');
let butaoduelo = window.document.getElementById('butaoduelo');
let imagem1 = window.document.getElementById('imagem1');
let imagem2 = window.document.getElementById('imagem2');
let butaolimpar = window.document.getElementById('butaolimpar');
let titulo = window.document.getElementById('titulo');

let player1
let player1_dano = 0
let player2 
let player2_dano = 0

butao1.addEventListener('click', converter1);
butao2.addEventListener('click', converter2);
butaolimpar.addEventListener('click', limpando);
butaoduelo.addEventListener('click', duelar);

function converter1() {
    if(caixatexto1.value === '') {
        window.alert('Invalido!');
    } else {
        player1 = caixatexto1.value;
        let player1_mod = player1.replace(/ /g, "%20");
        pesquisar(player1_mod, 'player1_dano');
        caixatexto1.value = ''
    }
}
function converter2() {
    if(caixatexto2.value === '') {
        window.alert('Invalido!');
    } else {
        player2 = caixatexto2.value;
        let player2_mod = player2.replace(/ /g, "%20");
        pesquisar(player2_mod, 'player2_dano');
        caixatexto2.value = ''
    }
}

async function pesquisar(card, player) {
    let api = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=' + card);
    let api_mod = await api.json();
    if(api_mod.data[0].atk === undefined){
        window.alert('Este card é uma carta armadilha!')
    } else {
        if(player === 'player1_dano') {
            player1_dano = api_mod.data[0].atk;
            console.log(player1_dano);
            imagem1.src = api_mod.data[0].card_images[0].image_url;
        }
        else if(player === 'player2_dano') {
            player2_dano = api_mod.data[0].atk;
            console.log(player2_dano);
            console.log(api_mod.data[0].card_images[0].image_url)
            imagem2.src = imagem2.src = api_mod.data[0].card_images[0].image_url;
        }
    }
}

function limpando() {
    imagem1.src = 'https://w7.pngwing.com/pngs/936/661/png-transparent-black-screen-of-death-desktop-computer-monitors-1080p-invisible-woman-miscellaneous-fictional-characters-text.png'
    imagem2.src = 'https://w7.pngwing.com/pngs/936/661/png-transparent-black-screen-of-death-desktop-computer-monitors-1080p-invisible-woman-miscellaneous-fictional-characters-text.png'
    caixatexto1.value = ''
    caixatexto2.value = ''
    titulo.innerText = '...'
}

function duelar(){
    if(player1_dano === player2_dano){
        titulo.innerText = 'Empate!';
    }
    else if(player1_dano > player2_dano){
        titulo.innerText = player1 + ' ganhou!';
    } 
    else if(player2_dano > player1_dano){
        titulo.innerText = player2 + ' ganhou!';
    }
}
