var adPacienteBtn = document.querySelector("#adicionar-paciente");
adPacienteBtn.addEventListener("click", function (event) {
	// evitar o comportamento padrão: enviar o form, refrescar a tela e limpar os campos!
	event.preventDefault();
	console.log("Preparando para adicionar paciente...");

	// Extrair dados do form do paciente
	var form = document.querySelector("#form-adiciona");
	var paciente = obtemPacienteDoFormulario(form);

	// limpa erros anteriores
	var errosUL = document.querySelector("#mensagens-erro");
	errosUL.innerHTML = "";
	var erros = validaPaciente(paciente);
	if ( erros.length > 0 ) {
		mostraErros(erros);
		return;
	}

	adicionaPacienteNaTabela(paciente);
	
	form.reset(); // limpa os campos do formulário

});

function adicionaPacienteNaTabela(paciente) {
	// Criar a TR e a TD do paciente
	var pacienteTR = montaTR(paciente);

	// Adicionar o paciente na tabela
	var pacientesTABLE = document.querySelector("#tabela-pacientes");
	pacientesTABLE.appendChild(pacienteTR);
}

function obtemPacienteDoFormulario(form) {
	// input de form podem ser acessado via propriedade "name"
	// a propriedade "name" é usada pelo POST para definir os argumentos do URL destino!
	// Exemplo: form.altura

	/* 
	var paciente = {
		nome: form.nome.value,
		peso:  form.peso.value ,
		altura: form.altura.value ,
		gordura: form.gordura.value,
		imc: calcIMC(form.peso.value, form.altura.value)
	};
	return paciente;
	*/

	return {
		nome: form.nome.value,
		peso: parseFloat( form.peso.value ),
		altura: parseFloat( form.altura.value ),
		gordura: form.gordura.value,
		imc: calcIMC(form.peso.value, form.altura.value)
	}; 

}

function montaTR(paciente) {
	// criar HTML
	var pacienteTR = document.createElement("tr");
	pacienteTR.classList.add("paciente");

	var nomeTD = montaTD(paciente.nome, "info-nome");
	var pesoTD = montaTD(paciente.peso, "info-peso");
	var alturaTD = montaTD(paciente.altura, "info-altura");
	var gorduraTD = montaTD(paciente.gordura, "info-gordura");
	var imcTD = montaTD(paciente.imc, "info-imc");

	pacienteTR.appendChild(nomeTD);
	pacienteTR.appendChild(pesoTD);
	pacienteTR.appendChild(alturaTD);
	pacienteTR.appendChild(gorduraTD);
	pacienteTR.appendChild(imcTD);

	return pacienteTR;
}

function montaTD(dado, classe) {
	var td = document.createElement("td");

	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function validaPaciente(paciente) {
	var erros = [];
	var erro = "";

	if (paciente.nome.length == 0) {
		erros.push("O nome tem de ser preenchido.");
	}

	if ( (erro = validaPeso(paciente.peso) ) != "" ) {
		erros.push(erro);
	}

	if ( (erro = validaAltura(paciente.altura) ) != "" ) {
		erros.push(erro);
	}

	if (paciente.gordura == 0) {
		erros.push("Gordura não pode ser em branco!");
	}

	return erros;
}

function mostraErros(erros) {
	var errosUL = document.querySelector("#mensagens-erro");

	/*for(var i = 0; i < erros.length; i++) {
		var li = document.createElement("li");
		li.textContent = erros[i];
		errosUL.appendChild(li);
	}*/


	erros.forEach( function (erro) {
		var li = document.createElement("li");
		li.textContent = erro;
		errosUL.appendChild(li);
	});
}