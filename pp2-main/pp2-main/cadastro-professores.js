const form = document.getElementById("form-professor");

let idEditando = null;

async function carregarProfessores() {
  const resposta = await fetch("/professores");

  const professores = await resposta.json();

  const lista = document.getElementById("lista-professores");

  lista.innerHTML = "";

  professores.forEach((professor) => {
    lista.innerHTML += `
            <tr>

                <td>${professor.nome}</td>

                <td>${professor.cpf}</td>

                <td>${professor.disciplina}</td>

                <td>

                    <button
                        class="btn-editar"
                        onclick="editarProfessor(${professor.id},'${professor.nome}','${professor.cpf}','${professor.disciplina}')">

                        Editar

                    </button>

                    <button
                        class="btn-excluir"
                        onclick="excluirProfessor(${professor.id})">

                        Excluir

                    </button>

                </td>

            </tr>
        `;
  });
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value;

  const cpf = document.getElementById("cpf").value;

  const disciplina = document.getElementById("disciplina").value;

  let url = "/professores";

  let metodo = "POST";

  if (idEditando) {
    url = "/professores/" + idEditando;

    metodo = "PUT";
  }

  const resposta = await fetch(url, {
    method: metodo,

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      nome,
      cpf,
      disciplina,
    }),
  });

  const dados = await resposta.json();

  if (dados.sucesso) {
    alert("Professor salvo!");

    form.reset();

    idEditando = null;

    carregarProfessores();
  } else {
    alert("Erro!");
  }
});

function editarProfessor(id, nome, cpf, disciplina) {
  idEditando = id;

  document.getElementById("nome").value = nome;

  document.getElementById("cpf").value = cpf;

  document.getElementById("disciplina").value = disciplina;
}

async function excluirProfessor(id) {
  if (!confirm("Deseja excluir?")) return;

  const resposta = await fetch("/professores/" + id, {
    method: "DELETE",
  });

  const dados = await resposta.json();

  if (dados.sucesso) {
    carregarProfessores();
  }
}

carregarProfessores();
