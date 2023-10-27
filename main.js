// Texto que você deseja mostrar como se estivesse sendo digitado
const textoMaquinaEscrever = "Olá! Este é um teste, exercício Grunt da EBAC";

// Elemento HTML onde o texto será exibido
const elementoTexto = document.getElementById("escrever");

// Velocidade de digitação (em milissegundos por caractere)
const velocidadeDigitacao = 50;

let indiceCaractere = 0;

function mostrarCaractere() {
    if (indiceCaractere < textoMaquinaEscrever.length) {
        elementoTexto.innerHTML += textoMaquinaEscrever.charAt(indiceCaractere);
        indiceCaractere++;
        setTimeout(mostrarCaractere, velocidadeDigitacao);
    }
}

mostrarCaractere();