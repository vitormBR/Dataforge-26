async function carregarNotas() {
  const resposta = await fetch("/notas");

  const notas = await resposta.json();

  const lista = document.getElementById("lista-notas");

  lista.innerHTML = "";

  notas.forEach((n) => {
    lista.innerHTML += `
            <tr>

                <td>${n.nome}</td>

                <td>${n.matricula}</td>

                <td>${n.disciplina}</td>

                <td>${n.nota}</td>

            </tr>
        `;
  });
}

carregarNotas();
