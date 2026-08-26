async function carregarFrequencia() {
  const resposta = await fetch("/frequencia");

  const frequencias = await resposta.json();

  const lista = document.getElementById("lista-frequencia");

  lista.innerHTML = "";

  frequencias.forEach((item) => {
    lista.innerHTML += `
            <tr>
                <td>${item.nome}</td>
                <td>${item.matricula}</td>
                <td>${item.turma}</td>
                <td>${item.data}</td>
                <td>${item.presente == 1 ? "Presente" : "Falta"}</td>
            </tr>
        `;
  });
}

carregarFrequencia();
