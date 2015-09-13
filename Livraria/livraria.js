$(document).ready(function(){

	$("img").on("click", function(){
		var preco = $(this).parent(".livro").find(".informacoes").data("price");
		$(this).parent(".livro").find(".informacoes").find("span").html(preco);
		$(this).parent(".livro").find(".informacoes").slideToggle();
		if($(this).parent(".livro").find(".informacoes").css("display") != "none")
			$(this).parent(".livro").find(".informacoes").css("display","inline-block");
	});

});