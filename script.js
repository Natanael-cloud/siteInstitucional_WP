const video = document.getElementById("meuVideo");
const mensagem = document.getElementById("mensagemFinal");

video.addEventListener("ended", () => {
  mensagem.style.display = "block";
});
