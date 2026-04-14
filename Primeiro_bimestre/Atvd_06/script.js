const input = document.getElementById("tarefaInput");
const botao = document.getElementById("adicionarBtn");
const lista = document.getElementById("listaTarefa");

botao.addEventListener("click", function(){
    const textoTarefa = input.value.trim();

    if(textoTarefa!==""){
        const novoItem = document.createElement("li");
        novoItem.textContent = textoTarefa;
        lista.appendChild(novoItem);

        input.value = "";
    }
});

lista.addEventListener("click", function(event) {
    if(event.target.tagName === "LI"){
        event.target.remove();
    }
});