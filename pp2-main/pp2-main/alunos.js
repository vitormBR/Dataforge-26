console.log("JS carregou!");

async function carregarAlunos() {

    console.log("Entrou na função");

    const resposta = await fetch("/alunos");

    console.log(resposta);

    const alunos = await resposta.json();

    console.log(alunos);

    const lista = document.getElementById("lista-alunos");

    alunos.forEach(aluno => {

        lista.innerHTML += `
        <tr>
            <td>${aluno.nome}</td>
            <td>${aluno.matricula}</td>
            <td>${aluno.turma}</td>
        </tr>
        `;

    });

}

carregarAlunos();