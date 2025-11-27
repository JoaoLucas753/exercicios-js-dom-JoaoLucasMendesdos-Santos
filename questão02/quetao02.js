function mudarForma() {
    let forma = document.getElementById("forma");
    let botao = document.getElementById("btn-forma");

    // Verifica se está como círculo (50%)
    if (forma.style.borderRadius === "50%" || forma.style.borderRadius === "") {
        // Muda para quadrado
        forma.style.borderRadius = "0%";
        botao.innerText = "Retornar forma original";
    } else {
        // Volta ao círculo
        forma.style.borderRadius = "50%";
        botao.innerText = "Mudar forma";
    }
}


