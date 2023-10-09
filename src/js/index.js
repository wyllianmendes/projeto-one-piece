const botoes = document.querySelectorAll('.botao');

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        removerBotaoSelecionado();
        removerPersonagemSelecionado();

        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
    })
})

function removerPersonagemSelecionado() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function removerBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

