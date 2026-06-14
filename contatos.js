const pesquisa = document.getElementById("pesquisa");

pesquisa.addEventListener("keyup", () => {

    const texto = pesquisa.value.toLowerCase();

    const campi = document.querySelectorAll(".campus");

    campi.forEach(campus => {

        const nome = campus.querySelector("h2").textContent.toLowerCase();

        if (nome.includes(texto)) {
            campus.style.display = "block";
        } else {
            campus.style.display = "none";
        }

    });

});