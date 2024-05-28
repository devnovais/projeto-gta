const botao = document.querySelector(".btn-plataforma");

const logoDasPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    logoDasPlataformas.classList.toggle("ativo");
})