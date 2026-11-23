const ano = document.getElementById("ano");
if (ano) {
  ano.textContent = new Date().getFullYear();
}

const botaoCopiar = document.getElementById("copiar-email");
const avisoCopia = document.getElementById("aviso-copia");

if (botaoCopiar && avisoCopia) {
  botaoCopiar.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(botaoCopiar.dataset.email);
      avisoCopia.textContent = "E-mail copiado!";
    } catch (erro) {
      avisoCopia.textContent = "Não consegui copiar. Selecione o e-mail acima e copie manualmente.";
    }
    setTimeout(() => {
      avisoCopia.textContent = "";
    }, 3000);
  });
}
