/*
	Em menos de 600px de tela, ativa ou desativa o menu flutuante.
*/
document.querySelector('.menu-abrir').onclick = function() {
	document.documentElement.classList.add('menu-ativo');
};

document.querySelector('.menu-fechar').onclick = function() {
	document.documentElement.classList.remove('menu-ativo');
};

/*
	Clicando fora do menu flutante (parte cinza), fecha-o.
*/
document.documentElement.onclick = function(event) {
	/* 
		É importante lembrar dos mecanismos de propagação de eventos do JS. Escutar cliques no <html> vai pegar todos os cliques na página, 
		mesmo os do menu e outros elementos (afinal tudo é descendente de <html>). Para evitar isso, adicionamos o if que filtra a ação para 
		executar apenas se o elemento clicado (target) for exatamente o <html> e não algum filho interno, como menu
	*/	
	if (event.target === document.documentElement) {
		document.documentElement.classList.remove('menu-ativo');
	}
};