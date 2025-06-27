const usuarios = [
  { nome: "joao", senha: "123", perfil: "aluno", faltasConsecutivas: 2 },
  { nome: "maria", senha: "456", perfil: "aluno", faltasConsecutivas: 0 },
  { nome: "jcbn", senha: "606", perfil: "professor" },
];

window.addEventListener("DOMContentLoaded", () => {
  const botao = document.querySelector("button");

  const tentativas = localStorage.getItem("tentativasLogin");
  if (tentativas && parseInt(tentativas) >= 5) {
    alert("Você excedeu o número de tentativas permitidas. Acesso bloqueado.");
    botao.disabled = true;
    return;
  }

  if (botao) botao.addEventListener("click", login);
});

function login() {
  const user = document.getElementById("usuario").value;
  const pass = document.getElementById("senha").value;

  const match = usuarios.find(u => u.nome === user && u.senha === pass);

  if (!match) {
    let tentativas = parseInt(localStorage.getItem("tentativasLogin")) || 0;
    tentativas++;
    localStorage.setItem("tentativasLogin", tentativas);

    if (tentativas >= 5) {
      alert("Você excedeu o número de tentativas. Acesso bloqueado.");
      document.querySelector("button").disabled = true;
    } else {
      alert(`Usuário ou senha incorretos! Tentativa ${tentativas} de 5.`);
    }
    return;
  }

  // Se login for bem-sucedido, limpa as tentativas
  localStorage.removeItem("tentativasLogin");

  if (match.perfil === "aluno" && match.faltasConsecutivas >= 2) {
    alert("Acesso bloqueado por 2 faltas consecutivas.");
    return;
  }

  localStorage.setItem("usuario", JSON.stringify(match));
  window.location.href = "index.html";
}