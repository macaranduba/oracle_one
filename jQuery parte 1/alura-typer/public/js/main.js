console.log("main.js carregado");

/*
	AJAX Same Origin Policy (SOP)
	pedidos HTTP tem de ser para:
	 - o mesmo host de origem,
	 - a mesma porta lógica,
	 - usando o mesmo protocolo (http, https, ...)

	CORS - Cross Origin Resource Sharing
	Header de requisição HTTP:
	Access-Control-Allow-Origin: lista de endereços http/s
*/


// assim que toda a página terminar de ser carregada
// linha seguinte é = a "$(document).ready(function () {"
$( function () {
	atualizaTamanhoFrase();
	inicializaContadores();
	inicializaCronometro();
	inicializaMarcadores();
  $("#botao-reiniciar").click(reiniciaJogo);
  atualizaPlacar();

  $( '#usuarios' ).selectize( {
    create: true,
    sortField: 'text',
  });
  //$( '#usuarios' ).css("witdh", "150px");

  $('.tooltip').tooltipster({
  	trigger: "custom"
  });
});

var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");


function atualizaTamanhoFrase() {
	// jQuery = $
	var frase = jQuery(".frase").text();
	var fraseNumPalavras = frase.split(" ").length;
	//console.log("A frase >" + frase + "< tem " + fraseNumPalavras + " palavras.");

	// jQuery = $
	var tamanhoFraseSPAN = $("#tamanho-frase");
	//console.log(tamanhoFraseSPAN);
	//console.log(tamanhoFraseSPAN.text());

	tamanhoFraseSPAN.text(fraseNumPalavras);
}

function atualizaTempoInicial(tempo) {
	$("#tempo-digitacao").text( tempo );
	tempoInicial = tempo;
}

function inicializaContadores() {
	// sempre que o valor do campo for alterado
	campo.on("input", function () {
		var conteudo = campo.val();
		//console.log("digitado: " + conteudo);
		$("#contador-caracteres").text(conteudo.length);
	// https://www.w3schools.com/jsref/jsref_obj_regexp.asp	
		$("#contador-palavras").text(conteudo.split(/\S+/).length -1);
	});
}

function inicializaMarcadores() {
	var frase = $(".frase").text();

	//console.log(frase);
  var digitado = campo.val();
  var comparavel = frase.substring(0, digitado.length);

  /*if ( digitado == comparavel ) {
  	campo.addClass("borda-verde");
  	campo.removeClass("borda-vermelha");
  } else {
  	campo.removeClass("borda-verde");
  	campo.addClass("borda-vermelha");
  }*/
  var correto = (digitado == comparavel);
 	campo.toggleClass("borda-verde", correto);
	campo.toggleClass("borda-vermelha", ! correto);
}

campo.on("input", function () {
	inicializaMarcadores();
});


// sempre que o campo for selecionado
function inicializaCronometro() {
	
	campo.one("focus", function () { // a função one descarta eventos iguais seguintes
//campo.on("focus", function () { // a função on capta o 1º e todos os eventos posteriores
		var tempoRestanteSPAN = $("#tempo-digitacao");
		var tempoRestante = tempoRestanteSPAN.text();

		desabilitaIcon("#botao-reiniciar");
			/*$("#botao-reiniciar").attr("disabled",true);
			$("#botao-reiniciar").addClass("disabled");*/
		var cronometroID = setInterval(function () {
			tempoRestanteSPAN.text(--tempoRestante);
			// .attr("atributo da tag", ?) devolve e define, como a .text(?).
			if( tempoRestante < 1 ) {
				clearInterval(cronometroID);
				finalizaJogo();
			}

		}, 1000);
	});
}

function finalizaJogo() {
	campo.attr("disabled", true);
	habilitaIcon("#botao-reiniciar");
		//$("#botao-reiniciar").attr("disabled", false);
	campo.addClass("campo-desativado");
	inserePlacar();
}

function habilitaIcon(id) {
	//$(id).attr("disabled",true);
	$(id).removeClass("disabled");
}

function desabilitaIcon(id) {
	//$(id).attr("disabled",true);
	$(id).addClass("disabled");
}

function reiniciaJogo() {
	console.log("Reiniciando");
	campo.attr("disabled", false);
	campo.removeClass("campo-desativado");
  // .toogleClass adiciona ou remove a classe, conforme o estado atual.
	//campo.toggleClass("campo-desativado");
	campo.val("");
	$("#contador-caracteres").text("0");
	$("#contador-palavras").text("0");
	$("#tempo-digitacao").text(tempoInicial);
	inicializaCronometro();
	campo.removeClass("borda-vermelha");
	campo.removeClass("borda-verde");
}
