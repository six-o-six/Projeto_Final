const usuario = JSON.parse(localStorage.getItem("usuario"));
const lista = document.getElementById("lista-atividades");

if (!usuario) {
  alert("Sessão expirada. Faça login novamente.");
  window.location.href = "login.html";
} else {
  const perfilMenu = document.getElementById("user-info");
  if (perfilMenu) {
    perfilMenu.textContent = `${usuario.perfil.toUpperCase()} - ${usuario.nome}`;
  }

  const aulas = 5;
  for (let i = 1; i <= aulas; i++) {
    const item = document.createElement("a");
    item.href = `atividade${i}.html`;
    item.className = "atividade-item";
    item.innerHTML = `
      Aula ${i}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42L17.59 5H14V3z"/>
        <path d="M5 5h4V3H3v6h2V5zm0 14v-4H3v6h6v-2H5zm14 0h-4v2h6v-6h-2v4z"/>
      </svg>
    `;
    lista.appendChild(item);
  }
}

function logout() {
  localStorage.removeItem("usuario");
  window.location.href = "login.html";
}
