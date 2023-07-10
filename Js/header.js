let header=document.getElementsByTagName ("header") [0];
//<img id="logo" class="img-fluid" src="./imgs/Logo_CC.png" alt="logo corporação capsula"  width="400">
let logo_farm = document.createElement("img");
logo_farm.id = "logo";
logo_farm.className = "img-fluid";
logo_farm.src = "./imgs/Logo_CC.png"; 
logo_farm.alt = "logo corporação capsula"; 
logo_farm.width = 400;
header.appendChild(logo_farm);

let botao_dark = document.createElement("button");
let mainHtml = document.getElementsByTagName("html") [0];
botao_dark.className = "btn";
botao_dark.innerText = "Modo Escuro";
botao_dark.addEventListener('click', () => {
    if(botao_dark.innerText === 'Modo Claro'){
        mainHtml.setAttribute("data-bs-theme", "light");
        botao_dark.innerText = 'Modo Escuro';
    } else {
        mainHtml.setAttribute("data-bs-theme", "dark");
        botao_dark.innerText = 'Modo Claro';
    }
})

header.appendChild(botao_dark);
