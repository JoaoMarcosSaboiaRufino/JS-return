
function gerarMunicaoAleatoria() {
    return Math.random() < 0.5; // 
}


function jogarBatalha() {
    let playerPontos = 2; 
    let computadorPontos = 2; 

    
    while (playerPontos > 0 && computadorPontos > 0) {
        
        const municao1 = gerarMunicaoAleatoria();
        const municao2 = gerarMunicaoAleatoria();
        const municao3 = gerarMunicaoAleatoria();

        
        const pegarArma = prompt("Pegar a arma? Yes or No").toLowerCase();

        if (pegarArma === "yes") {
            
            const alvo = prompt("Você ou Ele? I or He").toLowerCase();

            
            if (alvo === "i") {
                if (municao1) {
                    alert("Poooowwww! Você acertou o computador.");
                    computadorPontos--;
                } else {
                    alert("Que sorte em... Você atirou em si mesmo, mas a munição falhou.");
                }
            } else if (alvo === "he") {
                if (municao2) {
                    alert("Poooowwww! Você acertou o jogador.");
                    playerPontos--;
                } else {
                    alert("Que sorte em... O jogador atirou em si mesmo, mas a munição falhou.");
                }
            }
        } else {
            alert("Você escolheu não pegar a arma.");
        }

        
        alert("Pontos de vida do jogador: " + playerPontos + "\nPontos de vida do computador: " + computadorPontos);

        
        if (playerPontos === 0) {
            alert("Você perdeu! Fim de jogo.");
            break;
        } else if (computadorPontos === 0) {
            alert("Você ganhou! Fim de jogo.");
            break;
        }

        
        if (!municao1 && !municao2 && !municao3) {
            alert("As munições acabaram! Novas munições foram geradas.");
            
            const novaMunicao1 = gerarMunicaoAleatoria();
            const novaMunicao2 = gerarMunicaoAleatoria();
            const novaMunicao3 = gerarMunicaoAleatoria();
            alert(`Novas munições: ${novaMunicao1}, ${novaMunicao2}, ${novaMunicao3}`);
        }
    }
}


jogarBatalha();
