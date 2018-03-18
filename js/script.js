$(document).ready(function() {

	var qtdexib = 4; //Numero de páginas por vez (pode alterar)
	var qtdnexib = 0; //Não alterar nada
	var box = ""; //Variavel que vai mostrar a div ativa
	var pag = $('.pag').length; //Variavel que conta quantos paginacao tem
	var depo = []; //Array para inserir os ids

	if (pag > 1) { // Se houver mais que 1 depoimento acrescente os botões de transição 

		$('.paginacao').append('<ul class="col s12 center pagination"></ul>');
		$('.pagination').append('<li class="prev disabled"><span class="fa fa-chevron-left">');

	}

	for (var i = 0; i < pag; i++) { //Inseri ids variaveis ate chegar o valor total de paginacao
		var valor = { //Armazena a quantidade de ids
			id: i
		}; 
		depo.push(valor); //Colocar valor na variavel depo
		inserir(); //Chama a função
	}

	function inserir() {

		var pag = document.getElementsByClassName("pag"); //Pega o elemento com a classe .pag
		var item = document.getElementsByClassName("item"); //Pega o elemento com a classe .item
		var link = document.getElementsByTagName('a');//Pega o elemento com a tag a

		$('.pagination').append('<li class="item"><a>');//Criar um botão para cada pagina
		$('.pagination').find('li.item').first().addClass('active');//Sempre começa pela primeira div ativada
		$('.paginacao').find('.pag').first().addClass('active');//Sempre começa pela primeira div ativada

		pag[i].setAttribute("id",depo[i].id); //Atribui um id unico em cada depoimento
		item[i].setAttribute("id",'pag-'+depo[i].id); //Atribui um id unico em cada botão
		link[i].innerHTML = depo[i].id + 1; //Atribui um id unico em cada Pagina
	}

	var contpag = qtdexib;
	while(contpag < pag){
	var iditem = '#pag-'+contpag;
	$(iditem).hide();
		contpag++;
	}

	if (pag > 1) { // Se houver mais que 1 depoimento acrescente os botões de transição 
		$('.pagination').append('<li class="next"><span class="fa fa-chevron-right">');
	}

	$('.item').click(function(event) { //Quando o Botoes for clicado

		var href = this.id;//Pega o id do elemento
		var id = href.split('-');//Filtra o id

		$('.active').removeClass('active'); //Ira remover a classe active da div atual
		$('.pag'+'#'+id[1]).addClass('active clean')//Adiciona a classe active na div selecionada
		$('.item'+'#pag'+href).addClass('active');//Adiciona a classe active na div selecionada
		$('.item.active').removeClass('active');//Remove a classe active do item atual
		$(this).addClass('active'); //Adiciona a classe active no item selecionado
		$('html, body').animate({
			scrollTop: $('#top').offset().top
		}, 1500); //Efeito para manter a visualização sempre no top a cada troca

		box = id[1];
		if (box == 0) {
			$('.prev').addClass('disabled');
		}else {
			$('.prev').removeClass('disabled');
		}
		
		if (box == (pag - 1)) {
			$('.next').addClass('disabled');
		}else {
			$('.next').removeClass('disabled');
		}

		var atualpag = parseInt(box)+1; //Não alterar nada

		if(atualpag == qtdexib && atualpag != pag){
		var iditem = '#pag-'+qtdexib;
		$(iditem).show();
		qtdexib++;

		var iditem = '#pag-'+qtdnexib;
		$(iditem).hide();
		qtdnexib++;
	
		}

		if(atualpag == qtdnexib+1 && atualpag != 1){
		var iditem = '#pag-'+(qtdexib-1);
		$(iditem).hide();

		qtdexib--;

		var iditem = '#pag-'+(qtdnexib-1);
		$(iditem).show();

		qtdnexib--;

		}

	});



	$('.next').click(function(event) { //Quando o Botão next for clicado

		if (box < (pag - 1)) { //Se o valor da box for menor a pag - 1 acrescente mais um
			box++;
		}else {
			return false;
		}

		if (box > 0 ) {
			$('.prev').removeClass('disabled');
		}else {
			$('.prev').addClass('disabled');
		}

		if (box == (pag - 1)) {
			$('.next').addClass('disabled');
		}else {
			$('.next').removeClass('disabled');
		}

		$('.active').removeClass('active'); //Ira remover a classe active da div atual
		$('.pag'+'#'+box).addClass('active clean'); //Adiciona a classe active e o efeito de transição na pdiv anterior
		$('.item'+'#pag-'+box).addClass('active');
		$('html, body').animate({
			scrollTop: $('#top').offset().top
		}, 1500); //Efeito para manter a visualização sempre no top a cada 

		var atualpag = parseInt(box)+1; //Não alterar nada

		if(atualpag == qtdexib && atualpag != pag){
		var iditem = '#pag-'+qtdexib;
		$(iditem).show();
		qtdexib++;

		var iditem = '#pag-'+qtdnexib;
		$(iditem).hide();
		qtdnexib++;
	
		}

		if(atualpag == qtdnexib+1 && atualpag != 1){
		var iditem = '#pag-'+(qtdexib-1);
		$(iditem).hide();

		qtdexib--;

		var iditem = '#pag-'+(qtdnexib-1);
		$(iditem).show();

		qtdnexib--;

		}

	});



	$('.prev').click(function(event) { //Quando o Botão prev for clicado

		if (box > 0) { //Se o valor for maior a 0 então tire um valor
			box--;
		}else { //Se o valor for igual a 0 vá para o ultimo valor
			return false;
		}

		if (box < (pag - 1)) {
			$('.next').removeClass('disabled');
		}else {
			$('.next').addClass('disabled');
		}

		if (box == 0) {
			$('.prev').addClass('disabled');
		}else {
			$('.prev').removeClass('disabled');
		}

		$('.active').removeClass('active'); //Ira remover a classe active da div atual
		$('.pag'+'#'+box).addClass('active clean'); //Adiciona a classe active e o efeito de transição na pdiv anterior
		$('.item'+'#pag-'+box).addClass('active');
		$('html, body').animate({
			scrollTop: $('#top').offset().top
		}, 1500); //Efeito para manter a visualização sempre no top a cada troca

		var atualpag = parseInt(box)+1; //Não alterar nada

		if(atualpag == qtdexib && atualpag != pag){
		var iditem = '#pag-'+qtdexib;
		$(iditem).show();
		qtdexib++;

		var iditem = '#pag-'+qtdnexib;
		$(iditem).hide();
		qtdnexib++;
	
		}

		if(atualpag == qtdnexib+1 && atualpag != 1){
		var iditem = '#pag-'+(qtdexib-1);
		$(iditem).hide();

		qtdexib--;

		var iditem = '#pag-'+(qtdnexib-1);
		$(iditem).show();

		qtdnexib--;

		}

	});

});

