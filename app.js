let clique;
let cpuSorteio = document.querySelector(".cpu-sorteio");
let numeroEscolhido;
let resultado = document.querySelector(".resultado");

// neste passo o computador escolhe entre pedra, papel e tesoura e mostra o resultado
function sorteioCPU() {
    // computador sorteia pedra, papel ou tesoura
    const numeroAleatorio = Math.floor(Math.random() * 3) + 1;
    if (numeroAleatorio === 1) {
        cpuSorteio.innerHTML = `<h2> O computador escolheu PEDRA!</h2>`;
    } else if (numeroAleatorio === 2) {
        cpuSorteio.innerHTML = `<h2> O computador escolheu PAPEL!</h2>`;
    } else {
        cpuSorteio.innerHTML = `<h2> O computador escolheu TESOURA!</h2>`;
    }

    // exibe resultado do jogo
    if (numeroEscolhido === numeroAleatorio) {
        resultado.innerHTML = `Empatou!`;
    } else if (
        (numeroEscolhido === 1 && numeroAleatorio === 2) ||
        (numeroEscolhido === 2 && numeroAleatorio === 3) ||
        (numeroEscolhido === 3 && numeroAleatorio === 1)
    ) {
        resultado.innerHTML = `O computador venceu!`;
    } else if (
        (numeroEscolhido === 1 && numeroAleatorio === 3) ||
        (numeroEscolhido === 2 && numeroAleatorio === 1) ||
        (numeroEscolhido === 3 && numeroAleatorio === 2)
    ) {
        resultado.innerHTML = `Você venceu!`;
    }
}

// evento onde o jogador escolhe pedra
function clicaPedra() {
    clique = document.querySelector(".jogador-sorteio");
    clique.innerHTML = `<h2> Você escolheu PEDRA!</h2>`;
    numeroEscolhido = 1;

    sorteioCPU();
}

// evento onde o jogador escolhe papel
function clicaPapel() {
    clique = document.querySelector(".jogador-sorteio");
    clique.innerHTML = `<h2> Você escolheu PAPEL!</h2>`;
    numeroEscolhido = 2;

    sorteioCPU();
}

// evento onde o jogador escolhe tesoura
function clicaTesoura() {
    clique = document.querySelector(".jogador-sorteio");
    clique.innerHTML = `<h2> Você escolheu TESOURA!</h2>`;
    numeroEscolhido = 3;

    sorteioCPU();
}