const casas = document.getElementsByTagName('input')
const b_reiniciar = document.getElementById('reiniciar');
const label_jogador = document.getElementById('jogador');
const joga_um = document.getElementById('jogador1');
const joga_dois = document.getElementById('jogador2');

var jogador = '_'; //Define o jogador atual (_ = jogador indefinido; X = jogador X, O = jogador O) 
var vencedor = '_'; //Define se há um vencedor ou não (_ = indefinido; X = jogador X, O = jogador O) 
var finish;

//Define a resposta ao evento de clique nas casas do "tabuleiro"
for(var i=0;i<9;i++) {
	casas[i].addEventListener('click', (event) => {
		//se a casa estiver vazia e ninguém tiver vencido a partida
		if( (event.target.value=='_') && (vencedor=='_')) {
			event.target.value=jogador; //preenche a casa com X ou O

			event.target.style.backgroundImage= jogador === "H" ? "url('./imagens/harry.jpg')" : "url('./imagens/voldemort.jpg')";
			event.target.style.backgroundSize='cover';
			
			trocarJogador(); //função que troca a vez do jogador, a ser definida depois

			vencedor = vitoria(); //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.

			//se o vencedor existe, imprime
		}
	});
}


//Define a resposta ao evento de clique no botão Reiniciar
b_reiniciar.addEventListener('click', (event) => {
	for(var i=0;i<9;i++) {
		casas[i].value='_'; //Limpa todas as casas
		casas[i].style.color='#F7FE2E'; //Torna o valor _ invisível
		casas[i].style.backgroundColor='#F7FE2E'; //Torna o fundo branco
	}

	vencedor = '_'; //Reseta o vencedor

	sortearJogador(); //Escolhe aleatoriamente qual jogador irá começar
});

//Usa uma função que decide aleatoriamente o jogar a fazer a primeira jogada
var sortearJogador = function() {
	if(Math.floor(Math.random() * 2)==0) {
		jogador = "H"; //define o jogador O como atual
		label_jogador.innerHTML="Harry"; //exibe na página qual é o jogador atual
		label_jogador.style.color='red'; //deixa o texto na cor vermelha
	}else{
		jogador = "V";//define o jogador X como atual
		label_jogador.innerHTML="Voldemort"; //exibe na página qual é o jogador atual
		label_jogador.style.color='green'; //deixa o texto na cor azul
	}
}

sortearJogador(); //Escolhe aleatoriamento o jogador inicial

//Alterna a vez entre os jogadores X e Y
var trocarJogador = function() {
	if(jogador=='V') {
		jogador='H';
		label_jogador.innerHTML='H';
		label_jogador.style.color='red';
		
	}else{
		jogador='V';
		label_jogador.innerHTML='V';
		label_jogador.style.color='green';
	}
}

//Verifica se uma condição de vitória foi atingida e colore a linha da vitória
var vitoria = function() {
	if((casas[0].value==casas[1].value) && (casas[1].value==casas[2].value) && casas[0].value!='_' ) {
		casas[0].style.backgroundColor='#0F0';
		casas[1].style.backgroundColor='#0F0';
		casas[2].style.backgroundColor='#0F0';

		return casas[0].value;

	}else if((casas[3].value==casas[4].value) && (casas[4].value==casas[5].value) && casas[3].value!='_' ) {
		casas[3].style.backgroundColor='#0F0';
		casas[4].style.backgroundColor='#0F0';
		casas[5].style.backgroundColor='#0F0';

		return casas[3].value;

	}else if((casas[6].value==casas[7].value) && (casas[7].value==casas[8].value) && casas[6].value!='_' ) {
		casas[6].style.backgroundColor='#0F0';
		casas[7].style.backgroundColor='#0F0';
		casas[8].style.backgroundColor='#0F0';

		return casas[6].value;

	}else if((casas[0].value==casas[3].value) && (casas[3].value==casas[6].value) && casas[0].value!='_' ) {
		casas[0].style.backgroundColor='#0F0';
		casas[3].style.backgroundColor='#0F0';
		casas[6].style.backgroundColor='#0F0';

		return casas[0].value;

	}else if((casas[1].value==casas[4].value) && (casas[4].value==casas[7].value) && casas[1].value!='_' ) {
		casas[1].style.backgroundColor='#0F0';
		casas[4].style.backgroundColor='#0F0';
		casas[7].style.backgroundColor='#0F0';

		return casas[1].value;

	}else if((casas[2].value==casas[5].value) && (casas[5].value==casas[8].value) && casas[2].value!='_' ) {
		casas[2].style.backgroundColor='#0F0';
		casas[5].style.backgroundColor='#0F0';
		casas[8].style.backgroundColor='#0F0';

		return casas[2].value;
	}else if((casas[0].value==casas[4].value) && (casas[4].value==casas[8].value) && casas[0].value!='_' ) {
		casas[0].style.backgroundColor='#0F0';
		casas[4].style.backgroundColor='#0F0';
		casas[8].style.backgroundColor='#0F0';

		return casas[0].value;

	}else if((casas[2].value==casas[4].value) && (casas[4].value==casas[6].value) && casas[2].value!='_' ) {
		casas[2].style.backgroundColor='#0F0';
		casas[4].style.backgroundColor='#0F0';
		casas[6].style.backgroundColor='#0F0';

		return casas[2].value;
	}
	
								
    return '_';
}