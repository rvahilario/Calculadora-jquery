$( function(){

	var v1, v2, opera;

	$("input[name=botao]").click( function(){
		$("#resultado").val($("#resultado").val() + $(this).val());
	});

/// LIMPAR DADOS
	$("input[name=c]").click( function(){
		$("#resultado").val('');
		$("#opera").text('');
	});

/// ADIÇÃO
	$("input[name=soma]").click( function(){
		if($("#resultado").val() != ''){
			v1 = parseFloat($("#resultado").val());
			$("#resultado").val('');
			opera = "soma";
			$("#opera").text($(this).val())

		} else {
			alert('Insira um valor para efetuar a operação!');
		}
	});

/// SUBTRAÇÃO
	$("input[name=sub]").click( function(){
		if($("#resultado").val() != ''){
			v1 = parseFloat($("#resultado").val());
			$("#resultado").val('');
			opera = "sub";
			$("#opera").text($(this).val())

		} else {
			alert('Insira um valor para efetuar a operação!');
		}
	});

/// MULTIPLICAÇÃO
	$("input[name=mult]").click( function(){
		if($("#resultado").val() != ''){
			v1 = parseFloat($("#resultado").val());
			$("#resultado").val('');
			opera = "mult";
			$("#opera").text($(this).val())

		} else {
			alert('Insira um valor para efetuar a operação!');
		}
	});

/// DIVISÃO
	$("input[name=div]").click( function(){
		if($("#resultado").val() != ''){
			v1 = parseFloat($("#resultado").val());
			$("#resultado").val('');
			opera = "div";
			$("#opera").text($(this).val())

		} else {
			alert('Insira um valor para efetuar a operação!');
		}
	});



	$("input[name=igual]").click( function(){
		if($("#resultado").val() != ''){
			v2 = parseFloat($("#resultado").val());

			if(opera == "soma"){
				$("#resultado").val(v1 + v2);
			}

			else if(opera == "sub"){
				$("#resultado").val(v1 - v2);
			}

			else if(opera == "mult"){
				$("#resultado").val(v1 * v2);
			}

			else{
				$("#resultado").val(v1 / v2);
			}
		} else {
			alert('Insira um valor para efetuar a operação!');
		}
	})


/// APAGAR
	$("input[name=apaga]").click( function(){
		var len = $("#resultado").val().length;
		var valor = $("#resultado").val();
		valor = valor.replace(valor.charAt(len - 1), "");
		$("#resultado").val(valor);
	});

});