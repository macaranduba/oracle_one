$("#botao-frase").click( botaoFraseClick );

function botaoFraseClick () {
	console.log(arguments.callee.name + " foi clicada");

	$.get("http://localhost:3000/frases", trocaFraseAleatoria);

}

function trocaFraseAleatoria (data) {
	console.log(arguments.callee.name + " executada");
	console.log(data);
	var fraseP = $(".frase");
	var numAleatorio = Math.floor( Math.random() * data.length );
	var novaFrase = data[ numAleatorio ].texto;
	console.log("Frase = >" + novaFrase + "<");
	fraseP.text( novaFrase );
	atualizaTamanhoFrase();
	atualizaTempoInicial(data[ numAleatorio ].tempo );
}