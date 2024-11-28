
alert("Bem-vindo ao aprendizado de JavaScript!");
console.log("Mensagem de alerta exibida com sucesso!");

console.log("Largura da janela:", window.innerWidth);
console.log("Altura da janela:", window.innerHeight);

localStorage.setItem("minhaChave", "Meu valor armazenado no Local Storage");
let valor = localStorage.getItem("minhaChave");
console.log("Valor recuperado do Local Storage:", valor);

let meuDiv = document.createElement("div");
meuDiv.id = "meuDiv";
document.body.appendChild(meuDiv);
console.log("Div criada e adicionada ao corpo do documento.");

meuDiv.textContent = "Este é o meu novo conteúdo no div!";
meuDiv.style.backgroundColor = "lightblue";
meuDiv.style.padding = "10px";
meuDiv.style.fontSize = "18px";
meuDiv.style.textAlign = "center";
console.log("Texto e estilo adicionados ao div.");

let paragrafo = document.querySelector("p"); 
if (paragrafo) {
    paragrafo.textContent = "Este parágrafo foi modificado via JavaScript!";
    paragrafo.style.backgroundColor = "yellow";
    console.log("Parágrafo modificado.");
} else {
    console.log("Nenhum parágrafo encontrado na página.");
}


let imagem = document.querySelector("img"); 
if (imagem) {
    imagem.setAttribute("title", "Imagem dinâmica");
    console.log("Atributo 'title' adicionado à imagem.");
} else {
    console.log("Nenhuma imagem encontrada na página.");
}

let botao = document.createElement("button");
botao.textContent = "Clique para alterar o conteúdo do div";
document.body.appendChild(botao);

botao.addEventListener("click", function() {
    meuDiv.textContent = "O conteúdo do div foi alterado após o clique!";
    meuDiv.style.backgroundColor = "lightgreen";
    console.log("Conteúdo do div alterado.");
});


document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        console.log("A tecla 'Enter' foi pressionada.");
    }
});


let lista = document.createElement("ul");
document.body.appendChild(lista);

function adicionarItem(texto) {
    let item = document.createElement("li");
    item.textContent = texto;

    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.style.marginLeft = "10px";

    botaoRemover.addEventListener("click", function() {
        lista.removeChild(item);
        console.log("Item removido.");
    });

    item.appendChild(botaoRemover);
    lista.appendChild(item);
}


adicionarItem("Item 1");
adicionarItem("Item 2");
adicionarItem("Item 3");
