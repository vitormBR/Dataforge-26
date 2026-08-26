const form = document.getElementById("form-aluno");
const botao = document.getElementById("btn-salvar");

let editando = false;
let idAluno = null;

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

                <td>${aluno.turma}</td>

                <td>

                    <button
                        class="btn-editar"
                        onclick="editarAluno(${aluno.id}, '${aluno.nome}', '${aluno.matricula}', '${aluno.turma}')">

                        Editar

                    </button>

                    <button
                        class="btn-excluir"
                        onclick="excluirAluno(${aluno.id})">

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
  const matricula = document.getElementById("matricula").value;
  const turma = document.getElementById("turma").value;

  let url = "/alunos";
  let metodo = "POST";

  if (editando) {
    url = "/alunos/" + idAluno;
    metodo = "PUT";
  }

  const resposta = await fetch(url, {
    method: metodo,

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      nome,
      matricula,
      turma,
    }),
  });

  const dados = await resposta.json();

  if (dados.sucesso) {
    alert(editando ? "Aluno atualizado!" : "Aluno cadastrado!");

    form.reset();

    editando = false;
    idAluno = null;

    botao.textContent = "Cadastrar";

    carregarAlunos();
  } else {
    alert("Erro!");
  }
});

function editarAluno(id, nome, matricula, turma) {
  document.getElementById("nome").value = nome;
  document.getElementById("matricula").value = matricula;
  document.getElementById("turma").value = turma;

  editando = true;
  idAluno = id;

  botao.textContent = "Salvar";
}

async function excluirAluno(id) {
  if (!confirm("Deseja excluir este aluno?")) {
    return;
  }

  const resposta = await fetch("/alunos/" + id, {
    method: "DELETE",
  });

  const dados = await resposta.json();

  if (dados.sucesso) {
    carregarAlunos();
  } else {
    alert("Erro ao excluir!");
  }
}

carregarAlunos();
