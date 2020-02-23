console.log("Buscarei os pacientes");
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
	console.log("Buscando pacientes...");

	var xhr = new XMLHttpRequest();

	xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

	// dispara quando termina de carregar o GET
	xhr.addEventListener("load", function() {
		var erroAjax = document.querySelector("#erro-ajax");
		if(xhr.status == 200)	{
			erroAjax.classList.add("invisivel");

			var resposta = xhr.response;
			/*console.log(typeof resposta);
			console.log(resposta);*/

			var pacientes = JSON.parse(resposta);
			/*console.log(typeof pacientes);
			console.log(pacientes);*/

			pacientes.forEach(function (paciente) {
				adicionaPacienteNaTabela(paciente);
			});
		} else {
			console.log( xhr.status );
			console.log( xhr.responseText );
			erroAjax.classList.remove("invisivel");
		}
	});

	xhr.send();
});