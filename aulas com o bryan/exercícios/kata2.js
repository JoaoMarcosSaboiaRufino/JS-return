/* Pergunta: Crie uma função que, com base na habilidade do jogador, realize uma ação específica. Se a habilidade for 'cura', aumente a vida do jogador em 10; se for 'ataque', diminua a vida do inimigo em 10. Teste a função utilizando os objetos player1 e enemie. */

const player1 = {
    nome: "kirito",
    mana: 20,
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

function acao() {
    if(player1.habilidade == 'cura') {
        player1.vida += 10;
        return 'Você utiizou a habilidade de cura. Foram restaurados 10 pontos de vida.'
    }
    else if(player1.habilidade == 'ataque') {
        enemie.vida -= 10;
        return 'Você utilizou a habilidade ataque. O inimigo perdeu 10 pontos de vida.'
    }
}  

console.log(acao())