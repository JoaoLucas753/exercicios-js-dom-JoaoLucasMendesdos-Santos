function cadastrarUsuario() {
    let nome = document.getElementById("nome").value;
    let dataNasc = document.getElementById("dataNasc").value;
    let rua = document.getElementById("rua").value;
    let numero = document.getElementById("numero").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("uf").value;

    let texto = `${nome} nasceu no dia ${dataNasc} e mora na rua ${rua}, número ${numero}, na cidade ${cidade} do estado ${estado}.`;

    let resultado = document.getElementById("resultado");
    resultado.innerText = texto;

    resultado.style.color = "green";
    resultado.style.fontSize = "24px";
}
