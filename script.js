function gerarAssinatura() {
  const nome = document.getElementById("nome").value;
  const div = document.getElementById("assinatura");
  if (nome.trim() === "") {
    div.innerHTML = "Por favor, digite um nome.";
    return;
  }
  div.innerHTML = `Olá, ${nome}! Sua assinatura foi gerada com sucesso.`;
}
