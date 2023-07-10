let header=document.getElementsByTagName ("header") [0];
//<img id="logo" class="img-fluid" src="./imgs/Logo_CC.png" alt="logo corporação capsula"  width="400">
let logo_farm = document.createElement("img");
logo_farm.id = "logo";
logo_farm.className = "img-fluid";
logo_farm.src = "./imgs/Logo_CC.png"; 
logo_farm.alt = "logo corporação capsula"; 
logo_farm.width = 400;
header.appendChild(logo_farm);