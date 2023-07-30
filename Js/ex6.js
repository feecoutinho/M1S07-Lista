/* html sem os <br> e <label>
<form class="form" action="enviar-contato" method="post">
		<input class="form-input" autofocus type="text" id="nome" name="nome" placeholder="Digite seu nome" required>
		<input class="form-input"  type="tel" id="telefone" name="Telefone" placeholder="0000-0000" required>
		<input class="form-input" type="email" id="email" name="email">
 		<label for="contato">Motivo do contato:</label><br>
			<select id="contato" name="Motivo do contato">
			</select>
		<textarea id="mensagem" name="mensagem"></textarea>
		<input type="submit">
		<div>
			<input type="checkbox" id="opcao1" name="opcao" value="Sim">
			<input type="checkbox" id="opcao2" name="opcao" value="Não" checked>
		</div>
    </form>
*/

// cria a funcao durante envio
function enviando(ev) {
    // a funcao recebe infos do evento quando tem function nomeFuncao( var )
    // o "target" do evento eh o proprio formulario
    form = ev.target;
    // o formulario possue atributos baseado nos "name"s dados para cada elemento dentro de si
    // olhando o codigo a cima, pode ser (em ordem) nome, Telefone, email, Motivo do contato(nao sei como funciona os espacos aqui), ou opcao
    // para acessar o valor do elemento de name="nome", usa-se o .value
    console.log(form.nome.value);
    alert("A mensagem foi enviada com sucesso.");
}

// pega o elemento do formulario e adiciona o listener para o evento submit
elemento_form = document.querySelector('form');
elemento_form.addEventListener("submit", enviando);