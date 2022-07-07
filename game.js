const casas = document.getElementsByTagName('input')
const b_reiniciar = document.getElementById('reiniciar');

var jogador = '_'; //Define o jogador atual (_ = jogador indefinido; H = jogador Harry, V = jogador Voldemort) 
var vencedor = '_'; //Define se há um vencedor ou não (_ = indefinido; H = jogador Harry, V = jogador Voldemort)
var finish;

//Define a resposta ao evento de clique nas casas do "tabuleiro"
for(var i=0;i<9;i++) {
	casas[i].addEventListener('click', (event) => {
		//se a casa estiver vazia e ninguém tiver vencido a partida
		if( (event.target.value=='_') && (vencedor=='_')) {
			event.target.value=jogador; //preenche a casa com H ou V
			event.target.style.backgroundImage= jogador === "Harry" ? "url('./imagens/harry.jpg')" : "url('./imagens/voldemort.jpg')";
			event.target.style.backgroundSize='100% 100%';
			event.target.style.backgroundRepeat='no-repeat';
			
			trocarJogador(); //função que troca a vez do jogador, a ser definida depois

			vencedor = document.getElementById("res").innerHTML = vitoria(); //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.

			//se o vencedor existe, imprime
		
}});
}


//Define a resposta ao evento de clique no botão Reiniciar
b_reiniciar.addEventListener('click', (event) => {
	for(var i=0;i<9;i++) {
		casas[i].value='_'; //Limpa todas as casas
		casas[i].style.color='#ffffff00'; //Torna o valor _ invisível
		casas[i].style.backgroundColor='#ffffff25'; //Torna o fundo branco
		casas[i].style.backgroundImage=null;
		casas[i].style.borderColor='#000';
		vencedor = document.getElementById("res").innerHTML=null;
	}

	vencedor = '_'; //Reseta o vencedor

});

//Usa uma função que decide aleatoriamente o jogar a fazer a primeira jogada
var sortearJogador = function() {
	if(Math.floor(Math.random() * 2)==0) {
		jogador = "Harry"; //define o jogador H como atual
		
		
	}else{
		jogador = "Voldemort";//define o jogador V como atual
		
	}
}

sortearJogador(); //Escolhe aleatoriamento o jogador inicial

//Alterna a vez entre os jogadores H e V
var trocarJogador = function() {
	if(jogador=='Voldemort') {
		jogador='Harry';
		
		
	}else{
		jogador='Voldemort';
		
	}
}

//Verifica se uma condição de vitória foi atingida e colore a borda da vitória
var vitoria = function () {
	if((casas[0].value==casas[1].value) && (casas[1].value==casas[2].value) && casas[0].value!='_' ) {
		casas[0].style.borderColor='#0F0';
		casas[1].style.borderColor='#0F0';
		casas[2].style.borderColor='#0F0';

		return casas[0].value;

	}else if((casas[3].value==casas[4].value) && (casas[4].value==casas[5].value) && casas[3].value!='_' ) {
		casas[3].style.borderColor='#0F0';
		casas[4].style.borderColor='#0F0';
		casas[5].style.borderColor='#0F0';

		return casas[3].value;

	}else if((casas[6].value==casas[7].value) && (casas[7].value==casas[8].value) && casas[6].value!='_' ) {
		casas[6].style.borderColor='#0F0';
		casas[7].style.borderColor='#0F0';
		casas[8].style.borderColor='#0F0';

		return casas[6].value;

	}else if((casas[0].value==casas[3].value) && (casas[3].value==casas[6].value) && casas[0].value!='_' ) {
		casas[0].style.borderColor='#0F0';
		casas[3].style.borderColor='#0F0';
		casas[6].style.borderColor='#0F0';

		return casas[0].value;

	}else if((casas[1].value==casas[4].value) && (casas[4].value==casas[7].value) && casas[1].value!='_' ) {
		casas[1].style.borderColor='#0F0';
		casas[4].style.borderColor='#0F0';
		casas[7].style.borderColor='#0F0';

		return casas[1].value;

	}else if((casas[2].value==casas[5].value) && (casas[5].value==casas[8].value) && casas[2].value!='_' ) {
		casas[2].style.borderColor='#0F0';
		casas[5].style.borderColor='#0F0';
		casas[8].style.borderColor='#0F0';

		return casas[2].value;

	}else if((casas[0].value==casas[4].value) && (casas[4].value==casas[8].value) && casas[0].value!='_' ) {
		casas[0].style.borderColor='#0F0';
		casas[4].style.borderColor='#0F0';
		casas[8].style.borderColor='#0F0';

		return casas[0].value;

	}else if((casas[2].value==casas[4].value) && (casas[4].value==casas[6].value) && casas[2].value!='_' ) {
		casas[2].style.borderColor='#0F0';
		casas[4].style.borderColor='#0F0';
		casas[6].style.borderColor='#0F0';

		return casas[2].value;
		
	}
	
    return '_';

	

}








