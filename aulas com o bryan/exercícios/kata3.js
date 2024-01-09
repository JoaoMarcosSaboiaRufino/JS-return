/* Pergunta: Implemente uma função que verifique se um jogador tem mana suficiente para usar suas habilidades. Se a mana for igual ou superior a 30, exiba uma mensagem indicando que o jogador tem mana suficiente; caso contrário, informe que o jogador não tem mana suficiente. Utilize o objeto player1 para testar a função. */

const player1 = {
    nome: "kirito",
    mana: 30,
    stamina: 100,
    vida: 100,
    habilidade: 'ataque'
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

function testmana() {
    if(player1.mana < 30) {
        return 'Não foi possivel utilizar a habilidade ' + player1.habilidade + '. Mana insuficiente!'
    }
    else if(player1.mana >= 30) {
        player1.mana -= 30;
        return "Você utilizou a habilidade de " + player1.habilidade + ". Sua mana foi reduzida em 30 pontos. \
        (Mana: " + player1.mana + ')';
    }
}

console.log(testmana());