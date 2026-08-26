async function carregarAlunos() {
  const resposta = await fetch("/alunos");

  const alunos = await resposta.json();

  const lista = document.getElementById("lista-alunos");

  lista.innerHTML = "";

  alunos.forEach((aluno) => {
    lista.innerHTML += `
            <tr>
                <td>${aluno.nome}</td>
                <td>${aluno.matricula}</td>
                <td>
                    <input
                        type="text"
                        class="disciplina"
                        placeholder="Disciplina">
                </td>
                <td>
                    <input
                        type="number"
                        class="nota"
                        min="0"
                        max="10"
                        step="0.1"
                        data-id="${aluno.id}">
                </td>
            </tr>
        `;
  });
}

document.getElementById("salvar").addEventListener("click", async () => {
  const linhas = document.querySelectorAll("#lista-alunos tr");

  for (const linha of linhas) {
    const disciplina = linha.querySelector(".disciplina").value;
    const nota = linha.querySelector(".nota").value;
    const aluno_id = linha.querySelector(".nota").dataset.id;

    if (disciplina !== "" && nota !== "") {
      await fetch("/notas", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          aluno_id,
          disciplina,
          nota,
        }),
      });
    }
  }

  alert("Notas salvas com sucesso!");
});

carregarAlunos();
