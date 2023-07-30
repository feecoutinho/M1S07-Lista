/*<div class="card"  style="width: 10rem;">
    <img class="prod_img" src="./imgs/Card_1.png"> 
    <h5 class="card-title text-primary">SUPER POTION</h5>
    <p class="card-text">R$ 99,00</p>
    <a href="#" class="btn btn-primary">Adicionar</a>
</div>*/

favorite_sim = '<path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>';
favorite_nao = '<path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>';
fav_base = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-heart" viewBox="0 0 16 16">~ALT~</svg>';


function criar_card(nome_Med, preco_Med){
	//nome_Med = "SUPER POTION";
	//preco_Med = 99;
	let img_card = document.createElement("img");
	img_card.className = "prod_img";
	img_card.src = "./imgs/Card_1.png"; 
	img_card.alt = "Frasco de remédio";

	let ico_fav = document.createElement("span");
	ico_fav.className = "btn-fav d-flex justify-content-end";
	ico_fav.width = '16px';
	ico_fav.height = '16px';
	ico_fav.style = "position: left;";
	ico_fav.innerHTML = fav_base.replace('~ALT~', favorite_nao);


	let titulo = document.createElement("h5");
	titulo.className = "card-title text-primary";
	titulo.innerText = nome_Med;
	
	let preco = document.createElement("p");
	preco.className = "card-text";
	preco.innerText = "R$ "
	// "toLocaleString" transforma um numero em texto
	// seguindo as regras do local escolhido (PT-BR)
	preco.innerText+= preco_Med.toLocaleString("PT-BR", {minimumFractionDigits: 2});
	
	let botao_add = document.createElement("a");
	botao_add.className = "btn btn-primary";
	botao_add.innerText = "Adicionar";
	
	let card = document.createElement("div");
	card.className = "card";
	card.style.width = "10em";
	
	//append os elementos filhos do card na ordem desejada
	card.appendChild(ico_fav);
	card.appendChild(img_card);
	card.appendChild(titulo);
	card.appendChild(preco);
	card.appendChild(botao_add);
	
	//append o card no elemento desejado
	lista_cards = document.getElementById("container-cards");
	lista_cards.appendChild(card);
// fim da funcao criar_card(nome_Med, preco_Med)
}

// lista a ser criada:
lista = [{nome_Med: "SUPER POTION",
		  preco_Med: 50},
		 {nome_Med: "HYPER POTION",
		  preco_Med: 100},
		 {nome_Med: "MAX POTION",
		  preco_Med: 200},
		 {nome_Med: "FULL RESTORE",
		  preco_Med: 150}];

lista.forEach(med => criar_card(med.nome_Med, med.preco_Med));