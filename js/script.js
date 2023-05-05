let jogador = "x";
let jogadas = 0;
let fimJogo = false;

console.log("carregou...");

function verificaVez(celula){

	if (jogador == "o"){
		var element = document.querySelector("#"+celula+"");
		var text = document.createTextNode(jogador);
		element.appendChild(text);


	} else {
		var element = document.querySelector("#"+celula+"");
		var text = document.createTextNode(jogador);
		element.appendChild(text);

	}

	verificaJogo();

	if (jogador == "x"){
		jogador = "o";
	} else {
		jogador = "x";
	}
}


function jogada(celula){

	if (fimJogo == false){
		let texto = document.getElementById(celula).innerText;

		console.log(texto);

		if (texto != 'x' && texto != 'o'){
			console.log(celula);
			verificaVez(celula);
		}
	}
}

function verificaJogo(){
	let a1 = document.getElementById('a1').innerText;
	let b1 = document.getElementById('b1').innerText;
	let c1 = document.getElementById('c1').innerText;
	let a2 = document.getElementById('a2').innerText;
	let b2 = document.getElementById('b2').innerText;
	let c2 = document.getElementById('c2').innerText;
	let a3 = document.getElementById('a3').innerText;
	let b3 = document.getElementById('b3').innerText;
	let c3 = document.getElementById('c3').innerText;

	var cor = "#1b2f46";

	if (a1 == b1 && a1 == c1 && a1 != ""){
		document.getElementById('a1').style.backgroundColor = cor;
		document.getElementById('b1').style.backgroundColor = cor;
		document.getElementById('c1').style.backgroundColor = cor;

      	document.getElementById('vez-jogador').style.backgroundColor = "#623f59";
		var lblVez = document.getElementById('lblVez');
      	lblVez.innerHTML  = "Venceu o jogador: ";
      	fimJogo = true;
	} else if (a2 == b2 && a2== c2 && a2 != ""){
		document.getElementById('a2').style.backgroundColor = cor;
		document.getElementById('b2').style.backgroundColor = cor;
		document.getElementById('c2').style.backgroundColor = cor;

		document.getElementById('vez-jogador').style.backgroundColor = "#623f59";
		var lblVez = document.getElementById('lblVez');
      	lblVez.innerHTML  = "Venceu o jogador: ";
      	fimJogo = true;
	} else if (a3 == b3 && a3== c3 && a3 != ""){
		document.getElementById('a3').style.backgroundColor = cor;
		document.getElementById('b3').style.backgroundColor = cor;
		document.getElementById('c3').style.backgroundColor = cor;

		var lblVez = document.getElementById('lblVez');
      	document.getElementById('vez-jogador').style.backgroundColor = "#623f59";
      	lblVez.innerHTML  = "Venceu o jogador: ";
      	fimJogo = true;
	}

	else if (a1 == a2 && a1== a3 && a1 != ""){
		document.getElementById('a1').style.backgroundColor = cor;
		document.getElementById('a2').style.backgroundColor = cor;
		document.getElementById('a3').style.backgroundColor = cor;

		var lblVez = document.getElementById('lblVez');
      	document.getElementById('vez-jogador').style.backgroundColor = "#623f59";
      	lblVez.innerHTML  = "Venceu o jogador: ";
      	fimJogo = true;
	} else if (b1 == b2 && b1== b3 && b1 != ""){
		document.getElementById('b1').style.backgroundColor = cor;
		document.getElementById('b2').style.backgroundColor = cor;
		document.getElementById('b3').style.backgroundColor = cor;

		var lblVez = document.getElementById('lblVez');
      	document.getElementById('vez-jogador').style.backgroundColor = "#623f59";
      	lblVez.innerHTML  = "Venceu o jogador: ";
      	fimJogo = true;
	} else if (c1 == c2 && c1== c3 && c1 != ""){
		document.getElementById('c1').style.backgroundColor = cor;
		document.getElementById('c2').style.backgroundColor = cor;
		document.getElementById('c3').style.backgroundColor = cor;

		var lblVez = document.getElementById('lblVez');
      	document.getElementById('vez-jogador').style.backgroundColor = "#623f59";
      	lblVez.innerHTML  = "Venceu o jogador: ";
      	fimJogo = true;
	}

	else if (a1 == b2 && a1== c3 && a1 != ""){
		document.getElementById('a1').style.backgroundColor = cor;
		document.getElementById('b2').style.backgroundColor = cor;
		document.getElementById('c3').style.backgroundColor = cor;

		var lblVez = document.getElementById('lblVez');
      	lblVez.innerHTML  = "Venceu o jogador: ";
      	document.getElementById('vez-jogador').style.backgroundColor = "#623f59";
      	fimJogo = true;
	} else if (c1 == b2 && c1== a3 && c1 != ""){
		document.getElementById('c1').style.backgroundColor = cor;
		document.getElementById('b2').style.backgroundColor = cor;
		document.getElementById('a3').style.backgroundColor = cor;

		var lblVez = document.getElementById('lblVez');
      	lblVez.innerHTML  = "Venceu o jogador: ";
      	document.getElementById('vez-jogador').style.backgroundColor = "#623f59";
      	fimJogo = true;
	} else {

		if (jogador == "x"){
			lblJogador = "O";
		} else {
			lblJogador = "X";
		}

		var label= document.getElementById('lblJogador');
      	label.innerHTML  = lblJogador;

      	if (jogadas == 8){
      		empate();
      	} else {
      		jogadas ++;
      	}
	}
}


function reiniciar(){
	let a1 = document.getElementById("a1");
	let a2 = document.getElementById("a2");
	let a3 = document.getElementById("a3");
	let b1 = document.getElementById("b1");
	let b2 = document.getElementById("b2");
	let b3 = document.getElementById("b3");
	let c1 = document.getElementById("c1");
	let c2 = document.getElementById("c2");
	let c3 = document.getElementById("c3");

	a1.innerText = "";
	a2.innerText = "";
	a3.innerText = "";
	b1.innerText = "";
	b2.innerText = "";
	b3.innerText = "";
	c1.innerText = "";
	c2.innerText = "";
	c3.innerText = "";

	var label= document.getElementById('lblJogador');
  	label.innerHTML  = "X";

	var lblVez = document.getElementById('lblVez');
  	lblVez.innerHTML  = "Vez do jogador:";
  	document.getElementById('vez-jogador').style.backgroundColor = "#37756c";

	let corCelulaInicial = "#37756c";
	document.getElementById('a1').style.backgroundColor = corCelulaInicial;
	document.getElementById('b1').style.backgroundColor = corCelulaInicial;
	document.getElementById('c1').style.backgroundColor = corCelulaInicial;
	document.getElementById('a2').style.backgroundColor = corCelulaInicial;
	document.getElementById('b2').style.backgroundColor = corCelulaInicial;
	document.getElementById('c2').style.backgroundColor = corCelulaInicial;
	document.getElementById('a3').style.backgroundColor = corCelulaInicial;
	document.getElementById('b3').style.backgroundColor = corCelulaInicial;
	document.getElementById('c3').style.backgroundColor = corCelulaInicial;

  	document.getElementById('jogador').style.display = "block";

	jogador = "x";
	jogadas = 0;

	fimJogo = false;
}

function empate(){
	var lblVez = document.getElementById('lblVez');
  	lblVez.innerHTML  = "JOGO EMPATADO!";

  	document.getElementById('vez-jogador').style.backgroundColor = "#623f59";
  	document.getElementById('jogador').style.display = "none";
}
