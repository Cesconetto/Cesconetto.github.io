$(document).ready(function(){
	

	$("img").on("click", function(){
		$(this).parent(".livro").find(".informacoes").slideToggle();
		if($(this).parent(".livro").find(".informacoes").css("display") != "none")
			$(this).parent(".livro").find(".informacoes").css("display","inline-block");
	});

});

/*		$("button").after(preco);
		$("button").remove();
	});

	$(".categorias").on("mouseover",function(){
		$(this).parent().find(".categorias").removeClass("selecionado");
		$(this).addClass("selecionado");
	});

	// closest + data
	$(".livro").on("click",function(){
		$(this).closest(".categorias").find(".livro").removeClass("livro-sel");
		$(this).addClass(".livro-sel");

		var visual = $(this).data("visual");
		$(this).data("visual",++visual);

		$(this).find("[name=clicks]").text(visual);
	});

	//uso de filtros
	$(".categorias").on('click',function(){
		console.log($(this).find.('.livro').filter("[href='#']"));
		$(this).find('.livro').filter("[href='#']").css("color","red");

	});

});*/
