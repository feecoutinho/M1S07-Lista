carrinho = [];

function funcaoDeClick(ev) {
	el = ev.target;
	// el é o proprio elemento/botao "Adicionar"
	// el.parentElement é o elemento pai, o "card"
	card = el.parentElement;
	// o elemento dentro do card com class = "card-title" é o nome do medicamento
	titulo_el = card.querySelector(".card-title");
	titulo = titulo_el.innerText;
	
	console.log(titulo + " foi adicionado ao carrinho.");


	carrinho.push(titulo);
	console.log(carrinho);

	alert("Produto adicionado com sucesso.");
}

// usando o query selector all é possivel selecionar todos os elementos usando a sintaxe do css
// usando o .card > .a, pega todo elemento de classe "btn-primary" filho direto do elemento de classe "card"
botoes = document.querySelectorAll(".card > .btn-primary");

botoes.forEach(el => el.addEventListener("click", funcaoDeClick));