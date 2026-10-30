const resposta = document.getElementById("resposta");
const botao = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

function verificar() {
    // Limpa a classe para a animação poder repetir
    resultado.className = "";

    if (resposta.value === "") {
        resultado.textContent = "Digite um número antes de verificar.";
        return;
    }

    // Força o navegador a reiniciar a animação
    void resultado.offsetWidth;

    if (Number(resposta.value) === 3) {
        resultado.textContent = "Parabéns! Resposta correta!";
        resultado.classList.add("certo");
    } else {
        resultado.textContent = "Tente novamente!";
        resultado.classList.add("errado");
    }
}

botao.addEventListener("click", verificar);

resposta.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
        verificar();
    }
});