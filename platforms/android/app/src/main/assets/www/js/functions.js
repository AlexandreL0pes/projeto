function ativaPage() {
  $('.targetPage.btn').click(function () {

    if (validaForm()) {
      var target = $(this).attr('dt-page');
      $('.page').addClass('hidden');
      $(target).removeClass('hidden');
      $('.erro').addClass('hidden');
      var primeiraPergunta = document.body.querySelector(".perguntas");
      $('#0').addClass('usada');
    }else {
      $('.erro').removeClass('hidden');
    }

  });
}

function validaForm() {
  var nome = document.body.querySelector(".input-nome").value;
  var escola = document.body.querySelector(".select-escola").value ;
  if ( nome != "" && nome.length >= 10  && escola != "") {
      return true;
  }else {
    return false;
  }
}

function validaPerguntas(){
    $("ul").click(function(){
        if ($("input[type='radio'][name='respostas0']").is(':checked') &&
            $("input[type='radio'][name='respostas1']").is(':checked') &&
            $("input[type='radio'][name='respostas2']").is(':checked') &&
            $("input[type='radio'][name='respostas3']").is(':checked') &&
            $("input[type='radio'][name='respostas4']").is(':checked') &&
            $("input[type='radio'][name='respostas5']").is(':checked') &&
            $("input[type='radio'][name='respostas6']").is(':checked') &&
            $("input[type='radio'][name='respostas7']").is(':checked')
           ){
            $('.footer').removeClass('hidden');
        }
    });
}


function mostrarResultado(){
    $('div .btnFooter').click(function() {
      var target = $(this).attr('dt-page');
      $('.page').addClass('hidden');
      $('.footer').addClass('hidden');
       var resultado = pegarRespostas();
        if (resultado == "info"){
            $("#telaResultadoInfo").removeClass('hidden');  
            
        }else if (resultado == "agro"){
            $("#telaResultadoAgro").removeClass('hidden');  

        }else if (resultado == "meio"){
            $("#telaResultadoMeio").removeClass('hidden');  
        }else{
            console.log("nao foi possível calcular o curso!");
        }
    });
}


function pegarRespostas(){
 // 1 - Info
 // 2 - Agro
 // 3 - Meio Ambiente
var respostas = document.querySelectorAll("input[type='radio']:checked");
    var n = [];
    var agro=0, info=0, meio =0;
    for (i = 0; i < respostas.length; i++){   
        if (respostas[i].value == "1"){
            info++;
        }else if(respostas[i].value == "2"){
            agro++;
        }else if (respostas[i].value == "3"){
            meio++;
        }
    }
    
    console.log("info" + info);
    console.log("agro" + agro);
    console.log("meio" + meio);
    if ( info >= agro && info >= meio){
        return "info";
    }else if (agro > info && agro >= meio){
        return "agro";
    }else if (meio > agro && meio > info){
        return "meio";
    }else{
        return "erro";
    }

    
}


function criarArquivo(){
    
    
}

ativaPage();
validaPerguntas();
mostrarResultado();