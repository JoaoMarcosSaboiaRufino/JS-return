/* Pergunta: Crie uma função que verifique se a stamina de um jogador é suficiente para executar ações. Se a stamina for igual ou superior a 50, exiba uma mensagem indicando que o jogador tem stamina suficiente; caso contrário, informe que o jogador está com pouca stamina. Teste a função utilizando o objeto player2. */

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

function teststamina() {
    if(player2.stamina >= 50) {
        player2.stamina -= 50;
        return "Você executou a habilidade Dash. A sua stamina foi reduzida em 50 pontos. \
        (Stamina: " + player2.stamina + ")";
    } 
    else if(player2.stamina < 50) {
        return "Stamina insuficiente!";
    }
} 

console.log(teststamina());