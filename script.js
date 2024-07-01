const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: 1) Qual é um das principais fontes de poluição do ar ?
        alternativas: (A) Fabrica (B) Oceano 
        ]
    },
    {
        enunciado: 2) Qual é uma consequência comum da poluição da água ?
        alternativas: (A) Redução das chuvas ácidas . (B)diminuição da disponibilidade de água potavel .
            
        ]
    },
    {
        enunciado:: 3) O que contrubuiu para a poluiçâo do solo? 
        alternativas: (A) Rciclagem adequada de risiduos. (B) Desflorestaçâo .
            
        ]
    },
   
let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();


