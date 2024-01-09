/* Pergunta: Escreva uma função que compare a vida entre dois personagens e determine o vencedor, exibindo uma mensagem indicando o nome do vencedor. Considere os objetos player1 e enemie para testar a função.
*/

function kata1() {
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
        vida: 20,
        habilidade: 'ataque'
    }
    
    const enemie = {
        nome: "homem das calça erguidas",
        mana: 20,
        stamina: 100,
        vida: 100,
        habilidade: 'ataque'
    }

    if(player1.vida > enemie.vida) {
        return 'Player1 é o vencedor!';
    }
    else if(enemie.vida > player1.vida) {
        return 'Player2 é o vencedor!';
    } else {
        return 'Empate!'
    }
}

console.log(kata1());

