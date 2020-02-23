var tabela =  document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function (event) {
	console.log(event.target.parentNode);
	
	event.target.parentNode.classList.add("fadeOut");

	/*console.log("h2 = " + event.target.style.height);
	event.target.style.height = "5px";*/

	// remove a linha instantanamente
	setTimeout(function () { event.target.parentNode.remove(); }, 600);


/*
	var pacientes = document.querySelectorAll(".paciente");
	console.log(pacientes);

	pacientes.forEach( function (paciente) {
		// outros tipos de eventos: https://developer.mozilla.org/en-US/docs/Web/Events
		paciente.addEventListener("dblclick", function () {
			//console.log("Fui clicado com um duplo click!");
			// "this" é a referência para o elemento do DOM que esta recebendo o evento
			this.remove(); // exclui o elemento da página
		});
	});
*/
});