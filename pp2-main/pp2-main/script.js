const form = document.getElementById("login-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const resposta = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      senha,
    }),
  });

  const dados = await resposta.json();

  if (!dados.sucesso) {
    alert("Email ou senha inválidos!");
    return;
  }

  if (dados.tipo === "admin") {
    window.location.href = "admin.html";
  }

  if (dados.tipo === "professor") {
    window.location.href = "professor.html";
  }

  if (dados.tipo === "aluno") {
    window.location.href = "aluno.html";
  }
});
