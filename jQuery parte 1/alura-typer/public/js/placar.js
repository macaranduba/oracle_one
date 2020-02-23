console.log("placar.js carregado");

$("#botao-placar").click( mostraPlacar );

function inserePlacar() {
	var tbody = $(".placar > table > tbody");
	//var tabela = $(".placar").find("tbody");
	//console.log("Tabela com css: ");
	//console.log(tabela);
	var usuario = "Zecas";
	var numPalavras = $("#contador-palavras").text();

	var linha = novaLinha(usuario, numPalavras);
	linha.find(".botao-remover").click(removeLinha);

	tbody.append(linha);
	//tbody.prepend() adiciona antes

	$(".placar").slideDown(500);

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
	return linha;
}

function removeLinha() {
	console.log("removeLinha chamada!");

	// no jQuery, $() torna o "this" num objeto jQuery
	console.log(this); // this = tag HTML
	console.log($(this)); // $(this) = Objeto jQuery

	// quem foi clicado (this) foi a <td>
	var linha = $(this).parent().parent();

	// fadeOut vai diminuindo a opacidade e coloca "display: none" ao final
	linha.fadeOut(1000); // tempo do fade out

	setTimeout(function () { // sem esta espera, o fade out não é observado
		// remove efetivamente do html
		linha.remove(); 
	}, 1000);
	
	//$(this).parent().parent().hide(); // apenas esconde!
}

// trata o evento para que já está no html inicial
$( ".botao-remover" ).click( removeLinha );

function mostraPlacar() {
	//$(".placar").css("display", "block");
	//$(".placar").show();
	//$(".placar").toggle(); // remove ou adiciona a class, conforme a situação atual.
	//$(".placar").slideDown(2000);

	$(".placar").stop(); // termina a animação atual antes de iniciar a próxima
	$(".placar").slideToggle(900);
	
	// $(".placar").stop().slideToggle(900);

	//console.log("togglando!");

}

