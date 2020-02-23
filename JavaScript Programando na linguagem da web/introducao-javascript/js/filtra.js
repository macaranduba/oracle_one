var campoFiltro = document.querySelector("#filtrar-tabela");
//console.log(campoFiltro);

campoFiltro.addEventListener("input", function () {
	var filtroValor = this.value.toLowerCase();
	console.log(filtroValor);

	var pacientes = document.querySelectorAll(".paciente");
	pacientes.forEach( function ( paciente ) {
		var nomeTD = paciente.querySelector(".info-nome");
		var nome = nomeTD.textContent;
		// console.log(nome);
		if( nome.toLowerCase().includes( filtroValor ) ) {
			paciente.classList.remove("invisivel");
		} else {
			paciente.classList.add("invisivel");
		}
	});
});

/*
	Expressões regulares
*/

	var isCaseInsensitive = "i";
	var expressao = new RegExp("o q procurar", isCaseInsensitive);
	expressao.test("onde procurar");