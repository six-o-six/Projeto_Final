const usuario = JSON.parse(localStorage.getItem("usuario"));

if (!usuario) {
  alert("Sessão expirada. Faça login novamente.");
  window.location.href = "login.html";
} else {
  const perfilMenu = document.getElementById("user-info");
  if (perfilMenu) {
    perfilMenu.textContent = `${usuario.perfil.toUpperCase()} - ${usuario.nome}`;
  }

  const conteudo = document.getElementById("conteudo");
  if (conteudo) {
    conteudo.innerHTML = `
      <h1>Curso de Introdução à Programação I com Scratch</h1>
      <p>Bem-vindo, ${usuario.nome}!</p>
    `;
  }
}

function logout() {
  localStorage.removeItem("usuario");
  window.location.href = "login.html";
}

function navigate(pagina) {
  const conteudo = document.getElementById("conteudo");

  if (pagina === "inicio") {
    conteudo.innerHTML = `
      <h1>Curso de Introdução à Programação I com Scratch</h1>
      <p>Bem-vindo, ${usuario.nome}!</p>
    `;
  }

  if (pagina === "diario") {
    if (usuario.perfil === "aluno") {
      if (usuario.faltasConsecutivas >= 2) {
        conteudo.innerHTML = `<p style="color:red">Seu acesso foi bloqueado devido a 2 faltas consecutivas.</p>`;
      } else {
        conteudo.innerHTML = `<p>Sua presença: <br>Faltas consecutivas: ${usuario.faltasConsecutivas}</p>`;
      }
    } else if (usuario.perfil === "professor") {
      conteudo.innerHTML = `<p>Lista de alunos com controle de presença (simulado).</p>`;
    }
  }

  if (pagina === "materiais") {
    conteudo.innerHTML = `<p>Materiais disponíveis para download.</p>`;
  }

  if (pagina === "atividades") {
    conteudo.innerHTML = usuario.perfil === "professor"
      ? `<p>Você pode criar e acompanhar atividades dos alunos.</p>`
      : `<p>Você pode preencher formulários e visualizar feedbacks.</p>`;
  }
}

const perfilIcon = document.getElementById("perfil-icon");
const perfilMenu = document.getElementById("perfil-menu");

if (perfilIcon && perfilMenu) {
  perfilIcon.addEventListener("click", (e) => {
    e.stopPropagation(); // Evita fechar ao clicar no ícone
    perfilMenu.style.display = perfilMenu.style.display === "block" ? "none" : "block";
  });

  // Fecha o menu se clicar fora
  document.addEventListener("click", () => {
    perfilMenu.style.display = "none";
  });
}