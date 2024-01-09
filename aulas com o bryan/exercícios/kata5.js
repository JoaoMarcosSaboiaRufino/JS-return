/* Pergunta: Desenvolva uma função que simule uma batalha entre dois jogadores, onde eles causam dano aleatório um ao outro até que a vida de um deles atinja zero ou menos. Exiba uma mensagem indicando o vencedor ou se houve empate. Utilize os objetos player1 e player2 para testar a função. */

const player1 = {
    nome: "kirito",
    mana: 20,
    stamina: 100,
    vida: 100,
    habilidade: 'cura'
}

const player2 = {
    nome: "Asuna",
    mana: 50,
    stamina: 100,
    vida: 100,
    habilidade: 'ataque'
}

const enemie = {
    nome: "homem das calça erguidas",
    mana: 20,
    stamina: 100,
    vida: 100,
    habilidade: 'ataque'
}

//Número aleatório entre 1 e 10
//console.log(Math.floor(Math.random() * 10) + 1);

 function simualacao() {
    while(player1.vida > 0 || player2.vida > 0) {
        let numaletario = Math.floor(Math.random() * 10) + 1;
        let numaletarioP1 = Math.floor(Math.random() * 10) + 1;
        let numaletarioP2 = Math.floor(Math.random() * 10) + 1;

        if(numaletario >= 1 && numaletario <= 5) {
            player2.vida -= numaletarioP1
            
        }
        else if(numaletario >= 6 && numaletario <= 10) {
            player1.vida -= numaletarioP2
        }
    }

    if(player1.vida > player2.vida) {
        return 'Player1 venceu a batalha!';
    }
    else {
        return 'Player2 venceu a batalha!';
    }
}

console.log(simualacao()) 