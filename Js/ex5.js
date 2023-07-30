/*<select id="contato" name="Motivo do contato">
<option value="">Orçamento</option>
<option value="Entrega">Entrega</option>
<option value="manipulacao">Manipulação</option>
<option value="informacoes">Informações</option>
</select>*/

// cria uma lista com as opcoes, conforme site anterior comentado a cima.
lista_opcoes = ["Orçamento", "Entrega", "Manipulação", "Informações"];

// guarda uma variavel identificando o elemento onde as opcoes serao inseridas.
select_motivos = document.querySelector("form #contato");

// para cada opcao, executa a arrow function usando "cada elemento" pelo nome "opcaoTexto".
lista_opcoes.forEach(opcaoTexto => {
        // cria um elemento novo com a tag option.
        opcao = document.createElement("option");
        // dentro da tag option, atribui a propriedade "value" o valor da lista de opcoes.
        opcao.value = opcaoTexto;
        // insere tambem no innerText, que aparece no site quando o dropDown eh selecionado.
        opcao.innerText = opcaoTexto;
        // adiciona o elemento option "opcao" no elemento "select_motivos", guardado antes do forEach.
        select_motivos.appendChild(opcao);
    });