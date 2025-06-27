function mudarPagina(numero) {
  document.getElementById('pagina1').style.display = numero === 1 ? 'block' : 'none';
  document.getElementById('pagina2').style.display = numero === 2 ? 'block' : 'none';
}

document.getElementById("form-paginas").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Formulário enviado com sucesso!");
  // Aqui você pode adicionar lógica para salvar no backend ou localStorage
});

function logout() {
  localStorage.removeItem("usuario");
  window.location.href = "login.html";
}