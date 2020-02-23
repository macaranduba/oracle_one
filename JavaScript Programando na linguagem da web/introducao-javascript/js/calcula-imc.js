var titulo = document.querySelector(".titulo");
titulo.textContent += " (adulterado a partir do JS)";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {
	var paciente = pacientes[i];
	var peso = parseFloat( paciente.querySelector(".info-peso").textContent );
	var altura = parseFloat( paciente.querySelector(".info-altura").textContent );
	var imcContent = "?";

	var erro = "";
	if ( (erro = validaPeso( peso )) != "" ) {
		imcContent = erro;
		// marca paciente
		paciente.classList.add("paciente-invalido");
	} else if ( (erro = validaAltura(altura)) != "" ) {
		imcContent = erro;
		// marca paciente
		paciente.classList.add("paciente-invalido");
	} else {
		imcContent = calcIMC( peso, altura );
	}
	paciente.querySelector(".info-imc").textContent = imcContent;
}

function calcIMC(peso, altura) {
	var imc = peso / (altura ** 2);
	return imc.toFixed(2); // com apenas 2 casas decimais
}

function validaAltura(altura) {
	return ( altura > 0 && altura <= 3 ) ? "" : "Altura inválida";
}

function validaPeso(peso) {
	return (peso > 0 && peso < 750) ? "" : "Peso inválido";
}