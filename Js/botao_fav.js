favoritos = [];
favorite_sim = '<path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>';
favorite_nao = '<path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>';


function funcaoFav(ev) {
	el = ev.target;
	// el é um elemento dentro do "fav_ico"
	// el.parentElement(x) é o elemento pai(x), repete-se ate achar o "card"
    card = el;
    while(card.className != "card") {
        card = card.parentElement;
    }

	// o elemento dentro do card com class = "card-title" é o nome do medicamento
	titulo_el = card.querySelector(".card-title");
	titulo = titulo_el.innerText;

    // se titulo existe nos favoritos, entao desfavorita
	aux = favoritos.indexOf(titulo);
    if (aux != -1) {
        console.log(titulo + " foi desfavoritado.");

        favoritos.splice(aux, 1);
        console.log(favoritos);

        // selectiona o svg e altera o icone para nao favoritado
        svg = card.querySelector('svg');
        svg.innerHTML = favorite_nao;

        // alert("Produto desfavoritado.");
    } // senao, favorita 
    else {
        console.log(titulo + " foi favoritado.");

        favoritos.push(titulo);
        console.log(favoritos);

        // selectiona o svg e altera o icone para favoritado
        svg = card.querySelector('svg');
        svg.innerHTML = favorite_sim;

        // alert("Produto favoritado.");
    };


	
}

// usando o query selector all é possivel selecionar todos os elementos usando a sintaxe do css
// usando o .card > .a, pega todo elemento de classe "btn-primary" filho direto do elemento de classe "card"
botoes = document.querySelectorAll(".card > .btn-fav > svg");

botoes.forEach(el => el.addEventListener("click", funcaoFav));