/*<div class="card"  style="width: 10rem;">
    <img class="prod_img" src="./imgs/Card_1.png"> 
    <h5 class="card-title text-primary">SUPER POTION</h5>
    <p class="card-text">R$ 99,00</p>
    <a href="#" class="btn btn-primary">Adicionar</a>
</div>*/

function criar_card(nome_Med);
let img_card = document.createElement("img");
img_card.className = "prod_img";
img_card.src = "./imgs/Card_1.png"; 
img_card.alt = "Frasco de remédio"; 

let titulo = document.createElement("h5")
titulo.className = "card-title text-primary"
titulo.innerText = ("nome_a")

let card = document.createElement("div")
card.className = "card";
card.style =


