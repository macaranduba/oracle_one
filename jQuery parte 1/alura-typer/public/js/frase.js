$("#botao-frase").click( botaoBuscaFraseClick );

function botaoBuscaFraseClick () {
	console.log(arguments.callee.name + " foi clicada");

	$("#spinner").show();

	$.get("http://localhost:3000/frases", trocaFraseAleatoria)
	 .fail( function () {
	 		//$(".erro").css("display", "block");
 			$("#erro").toggle();
	 		setTimeout( function () { // passado 2s, limpa o erro
	 			$("#erro").toggle();
	 		},
	 		2000)
	 })
	 .always( function () {
		$("#spinner").toggle();
	 });

}

function trocaFraseAleatoria ( data ) {
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

$("#botao-frase-id").click( buscaFrase );
function buscaFrase() {
	console.log(arguments.callee.name + " foi clicada");

	var fraseId = $("#frase-id").val();
	var dados = { id: fraseId};
	$("#spinner").show();

	$.get("http://localhost:3000/frases", dados, trocaFrase)
	 .fail( function () {
	 		//$(".erro").css("display", "block");
 			$("#erro").toggle();
	 		setTimeout( function () { // passado 2s, limpa o erro
	 			$("#erro").toggle();
	 		},
	 		2000)
	 })
	 .always( function () {
		$("#spinner").toggle();
	 });

}

function trocaFrase ( data ) {
	console.log(arguments.callee.name + " executada");
	console.log(data);
	var fraseP = $(".frase");
	var novaFrase = data.texto;
	console.log("Frase = >" + novaFrase + "<");
	fraseP.text( novaFrase );
	atualizaTamanhoFrase();
	atualizaTempoInicial( data.tempo );
}

