let stress = 0;
let contador = 0;

const pedidos = [

"Quero um app tipo iFood com IA por R$150",

"Faz um Netflix mas para delivery",

"Quero um Uber + WhatsApp + Instagram no mesmo app",

"Preciso de um sistema igual Amazon",

"Faz um app igual Nubank mas melhor"

];

function gerarPedido(){

let pedido = pedidos[Math.floor(Math.random()*pedidos.length)];

document.getElementById("pedidoTexto").innerText = pedido;

contador++;

document.getElementById("contador").innerText = contador;

aumentarStress(20);

adicionarMensagem("Cliente: " + pedido);

}

function responder(){

let input = document.getElementById("mensagem");

let texto = input.value;

if(texto === "") return;

adicionarMensagem("Você: " + texto);

input.value = "";

}

function adicionarMensagem(msg){

let chat = document.getElementById("chatbox");

chat.innerHTML += "<p>"+msg+"</p>";

chat.scrollTop = chat.scrollHeight;

}

function calcular(){

let valor = Math.floor(Math.random()*20000) + 5000;

document.getElementById("valor").innerText =
"Valor real do projeto: R$ " + valor;

aumentarStress(-30);

}

function aumentarStress(valor){

stress += valor;

if(stress < 0) stress = 0;

if(stress > 100) stress = 100;

document.getElementById("stressBar").style.width = stress + "%";

}