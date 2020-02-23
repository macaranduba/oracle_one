console.log("main.js carregado");

// assim que toda a página terminar de ser carregada
$( function () {
// linha anterior = a "$(document).ready(function () {"
	atualizaTamanhoFrase();
	inicializaContadores();
	inicializaCronometro();
	inicializaMarcadores();
  $("#botao-reiniciar").click(reiniciaJogo);
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

var frase = $(".frase").text();
campo.on("input", function () {
	inicializaMarcadores();
});


// sempre que o campo for selecionado
function inicializaCronometro() {
	var tempoRestanteSPAN = $("#tempo-digitacao");
	var tempoRestante = tempoRestanteSPAN.text();
	// a função one descarta eventos iguais seguintes
	campo.one("focus", function () {
//campo.on("focus", function () { // a função on capta o 1º e todos os eventos posteriores
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

$( ".botao-remover" ).click( function (event) {
	event.preventDefault(); // não executa o href do <a> ou o submit do form

	// quem foi clicado (this) foi a <td>
	console.log(this); // this = tag HTML
	console.log($(this)); // $(this) = Objeto jQuery
	
	$(this).parent().parent().remove(); // $() torna o "this" num objeto jQuery
});

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

function inserePlacar() {
	var tbody = $(".placar > table > tbody");
	//var tabela = $(".placar").find("tbody");
	//console.log("Tabela com css: ");
	//console.log(tabela);
	var usuario = "Zecas";
	var numPalavras = $("#contador-palavras").text();

	var linha = novaLinha();

	tbody.append(linha);
	//tbody.prepend() adiciona antes

	console.log("Inserido no Placar...");
}

function novaLinha(usuario, numPalavras) {
	// criando a tag como string
	/*var linha = "<tr>"	+
								"<td>" + usuario + "</td>" +
								"<td>" + numPalavras + "</td>" +
								"<td>" + botaoRemover + "</td>" +
							"</tr>";*/
	// criando a tag como objeto							
	var linha	= $("<tr>");
	var colunaUsuario = $("<td>").text(usuario);
	var colunaNumPalavras = $("<td>").text(numPalavras);
	var colunaRemover = $("<td>");
	
/*
  var botaoRemover = 	"<a href='#'>" +
	    									"<i class='small material-icons'>delete</i>" +
				    					"</a>";
*/
	var link = $("<a>").addClass("botao-remover").attr("href", "#");
	var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

	link.append(icone);
	colunaRemover.append(link);
	linha.append(colunaUsuario);
	linha.append(colunaNumPalavras);
	linha.append(colunaRemover);

	console.log(linha);
}

console.log("Ei!");

