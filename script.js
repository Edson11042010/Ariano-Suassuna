const perguntas = [
    {
        texto: "Qual ano Arinao Suassuna nasceu?",
        opcoes: ["1925", "1926", "1927", "1928"],
        respostaCorreta: 2
    },
    {
        texto: "Qual e a sua obra mais famosa?",
        opcoes: ["O Auto da Compadecida", "O Auto da Montanha", "O Auto da Casa", "O Auto da Comparecida"],
        respostaCorreta: 0
    },
    {
        texto: "'Outra obra importante é “Romance d'A Pedra do Reino”, que apresenta elementos'. Quais elementos a obra apresenta?",
        opcoes: ["Cultara brasileira, Folclore e da História do Nordeste", "Cultura Popular, Folclore e da História do Sul", "Cultura brasileira, História dos Índios e da História do Nordeste", "Cultura Popular, Folclore e da História do Nordeste"],
        respostaCorreta: 3
    },
    {
        texto: "Ariano Suassuana foi um dos principais responsáveis pelo Movimento:",
        opcoes: ["Cultural", "Armorial", "Político", "Histórico"],
        respostaCorreta: 1
    },
    {
        texto: "DESAFIO - Suas obras são marcadas pelo humor, pela cultura nordestina, pela religiosidade, pelas tradições populares e pelas histórias do sertão. Suassuna buscava valorizar a cultura brasileira e defendia a importância das manifestações artísticas do Nordeste. Uma de suas obras mais famosas é “O Auto da Compadecida”, uma peça teatral que mistura humor, crítica social e elementos religiosos. A histótia acompanha quais personagens?",
        opcoes: ["João Grilo e Chico", "João Grilo e Gabriel", "João Grilo e Maria", "João Grilo e Grilo"],
        respostaCorreta: 0
    }
]

const quiz = document.getElementById("quiz");

quiz.innerHTML = perguntas.map((pergunta, indice) => `
    <div class="questao">
        <h3>Pergunta ${indice + 1}: ${pergunta.texto}</h3>
        <form>
            ${pergunta.opcoes.map((opcao, opcaoIndex) => `
                <input type="radio" name="pergunta${indice}" value="${opcaoIndex}" id="pergunta${indice}-opcao${opcaoIndex}">
                <label for="pergunta${indice}-opcao${opcaoIndex}">${opcao}</label><br>
            `).join('')}
        </form>
    </div>
`).join('') + `
    <button id="ver-pontuacao" type="button">Ver pontuação</button>
    <p id="resultado" aria-live="polite"></p>
`;

document.getElementById("ver-pontuacao").addEventListener("click", () => {
    let pontuacao = 0;

    perguntas.forEach((pergunta, indice) => {
        const respostaSelecionada = document.querySelector(
            `input[name="pergunta${indice}"]:checked`
        );

        if (respostaSelecionada && Number(respostaSelecionada.value) === pergunta.respostaCorreta) {
            pontuacao++;
        }
    });

    document.getElementById("resultado").textContent =
        `Você fez ${pontuacao} de ${perguntas.length} pontos!`;
});