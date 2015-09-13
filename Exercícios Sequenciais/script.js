//document.getElementById("descricao").style.visibility="hidden";

function fonte(tamanho){
	document.getElementById("tamFonte").innerHTML=tamanho;
	var texto = document.getElementById("texto");
	texto.style.fontSize = parseInt(tamanho) + "px";
	var texto2 = document.getElementById("texto2");
	texto2.style.fontSize = parseInt(tamanho) + "px";
	var texto3 = document.getElementById("texto3");
	texto3.style.fontSize = parseInt(tamanho) + "px";
	var texto4 = document.getElementById("texto4");
	texto4.style.fontSize = parseInt(tamanho) + "px";
}

function corfonte(cor){
	document.getElementById("secao").style.color = cor;
}

function corfundo(cor){
	document.getElementById("corpo").style.background = cor;
}

function invisivel(){
	//document.getElementById("divPaisagem").style.visibility="hidden";
	document.getElementById("divPaisagem").style.display="none";
	document.getElementById("divFoto").style.display="none";
	document.getElementById("divDesenho").style.display="none";
	document.getElementById("divGif").style.display="none";
}

function funcao(){
	var qlr = document.getElementById("tipoImagem");
	var a = document.getElementById("divPaisagem");
	var b = document.getElementById("divFoto");
	var c = document.getElementById("divDesenho");
	var d = document.getElementById("divGif");
	if (qlr.value == "paisagem"){
		//a.style.visibility="visible";
		a.style.display="inline-block";
		//console.log(a);
		b.style.display="none";
		c.style.display="none";
		d.style.display="none";
	}
	if (qlr.value == "foto"){
		b.style.display="inline-block";
		a.style.display="none";
		c.style.display="none";
		d.style.display="none";
	}
	if (qlr.value == "desenho"){
		c.style.display="inline-block";
		a.style.display="none";
		b.style.display="none";
		d.style.display="none";
	}
	if (qlr.value == "gif"){
		a.style.display="none";
		b.style.display="none";
		c.style.display="none";
		d.style.display="inline-block";
	}
		if (qlr.value == "selecione"){
		a.style.display="none";
		b.style.display="none";
		c.style.display="none";
		d.style.display="none";
	}	
}

function validaForm(){
	var n = document.formCadastro.nome.value;
	var sn = document.formCadastro.sobrenome.value;
	var e = document.formCadastro.email.value;
	var atpos = e.indexOf("@");
	var dotpos = e.lastIndexOf(".");

	if ((n == null || n == "") && (sn == null || sn == "") && (e == null || e == "")){
		alert("Nome, sobrenome e e-mail são campos obrigatorios!");
		document.formCadastro.nome.style.borderColor="red";
		document.formCadastro.sobrenome.style.borderColor="red";
		document.formCadastro.email.style.borderColor="red";
		return false;
	} else{
		if ((n == null || n == "") && (sn == null || sn == "")){
			alert("Nome e sobrenome são campos obrigatorios!");
			document.formCadastro.nome.style.borderColor="red";
			document.formCadastro.sobrenome.style.borderColor="red";
			document.formCadastro.email.style.borderColor="initial";
			return false;
		}
		if ((n == null || n == "") && (e == null || e == "")){
			alert("Nome e e-mail devem ser preenchidos!");
			document.formCadastro.nome.style.borderColor="red";
			document.formCadastro.sobrenome.style.borderColor="initial";
			document.formCadastro.email.style.borderColor="red";
			return false;
		}
		if ((n == null || n == "") && (sn == null || sn == "")){
			alert("Nome e sobrenome são campos obrigatorios!");
			document.formCadastro.nome.style.borderColor="red";
			document.formCadastro.sobrenome.style.borderColor="red";
			document.formCadastro.email.style.borderColor="initial";
			return false;
		}
		if ((sn == null || sn == "") && (e == null || e == "")){
			alert("Sobrenome e e-mail devem ser preenchidos!");
			document.formCadastro.nome.style.borderColor="initial";
			document.formCadastro.sobrenome.style.borderColor="red";
			document.formCadastro.email.style.borderColor="red";
			return false;
		}
		if (n == null || n == ""){
			alert("O nome deve ser preenchido!");
			//document.formCadastro.nome.focus();
			//document.formCadastro.nome.style.backgroundColor="blue";
			document.formCadastro.nome.style.borderColor="red";	
			document.formCadastro.sobrenome.style.borderColor="initial";
			document.formCadastro.email.style.borderColor="initial";
		return false;
		}
		if (sn == null || sn == ""){
			alert("O sobrenome deve ser preenchido!");
			document.formCadastro.sobrenome.style.borderColor="red";
			document.formCadastro.nome.style.borderColor="initial";
			document.formCadastro.email.style.borderColor="initial";
			return false;
		}
		if (e == null || e == ""){
			alert("E-mail deve ser preenchido!");
			document.formCadastro.nome.style.borderColor="initial";
			document.formCadastro.sobrenome.style.borderColor="initial";
			document.formCadastro.email.style.borderColor="red";
			return false;
		}
		else {
			if (atpos<1 || dotpos < atpos+2 || dotpos+2 >= e.length){
				alert("Não é um endereço de e-mail válido");
				document.formCadastro.nome.style.borderColor="initial";
				document.formCadastro.sobrenome.style.borderColor="initial";
				document.formCadastro.email.style.borderColor="red";
				return false;
			}
			document.formCadastro.nome.style.borderColor="initial";
			document.formCadastro.sobrenome.style.borderColor="initial";
			document.formCadastro.email.style.borderColor="initial";
			return true;
		}
	}
}



function oi(){
	document.write("oi tchau");
}
