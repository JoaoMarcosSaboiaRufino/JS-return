let vitMaquina = 0;
let vitJogador = 0;

while (vitJogador + vitMaquina < 3) {
    const numeroAleatorio = Math.floor(Math.random() * 3) + 1;

    console.log(numeroAleatorio);

    let jogador = prompt('pedra, papel ou tesoura?');

    function jokempo(mao) {
        let maquina = '';

        if (numeroAleatorio === 1) {
            maquina = 'pedra';
        } else if (numeroAleatorio === 2) {
            maquina = 'papel';
        } else if (numeroAleatorio === 3) {
            maquina = 'tesoura';
        }

        if (mao === maquina) {
            return 'Empate!';
        } else {
            if ((mao === 'pedra' && maquina === 'papel') ||
                (mao === 'papel' && maquina === 'tesoura') ||
                (mao === 'tesoura' && maquina === 'pedra')) {
                vitMaquina += 1;
                return 'Máquina ganhou';
            } else {
                vitJogador += 1;
                return 'Você ganhou';
            }
        }
    }
    console.log(vitJogador + 'e' + vitMaquina)

    console.log(jokempo(jogador));
}

if (vitJogador > vitMaquina) {
    console.log('Em três partidas, o Jogador foi o melhor!');
} else {
    console.log('Em três partidas, a Máquina foi o melhor!');
}