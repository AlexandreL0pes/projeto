function atual() {
    $('.dot').click(function(event){
        selecionado = document.body.querySelector(".selecionado");
        $(selecionado).removeClass("selecionado");
        $(event.target).addClass("selecionado");
        
        
        var a = $(event.target).attr("num");

        var usada = document.body.querySelector(".usada");
        
        var perguntas = document.body.querySelectorAll(".perguntas");
    
        $(usada).removeClass("usada");
        $(usada).addClass("hidden");
        
        $(perguntas[a]).addClass("usada");
        $(perguntas[a]).removeClass("hidden");
        if(a == perguntas.length - 1){
            $('.next').addClass("hidden");
        }else{
            $('.next').removeClass("hidden");
        }
        
        if (a == 0) {
            $('.prev').addClass("hidden");
        }else{
            $('.prev').removeClass("hidden");
        }
    });
}

function avancar() {
    $('.next').click(function () { // executa a função quando a seta é clicada
        var usada = document.body.querySelector(".usada"); // seleciona no HTML a pergunta que está mostrada
        var perguntas = document.body.querySelectorAll(".perguntas"); // Seleciona todas as perguntas
        var indice = document.body.querySelectorAll(".dot");
        if (usada.id != (perguntas.length - 1)) {
            var proxima = perguntas[parseInt(usada.id) + 1]; // Seleciona qual será a próxima pergunta
            $('.prev').removeClass("hidden");
            $(usada).removeClass("usada");// tira a classe usada
            $(usada).addClass("hidden");// esconde a pergunta antiga
            $(indice[parseInt(usada.id)]).removeClass("selecionado");// remove o indice destacado

            $(proxima).addClass("usada");// adiciona a classe usada
            $(proxima).removeClass("hidden");// apresenta a pergunta
            $(indice[parseInt(usada.id) + 1]).addClass("selecionado");// destaca o indice
            if (proxima.id == (perguntas.length - 1)) {
                $('.next').addClass("hidden");
            }else{
                $('.next').removeClass("hidden");
            }

        }
    });
}

function voltar() {
    $('.prev').click(function () {
        var usada = document.body.querySelector(".usada");
        var perguntas = document.body.querySelectorAll(".perguntas");
        var indice = document.body.querySelectorAll(".dot");

        if (usada.id != 0) {
            var anterior = perguntas[parseInt(usada.id) - 1];
            $(usada).removeClass("usada"); // tira a classe usada
            $(usada).addClass("hidden"); // esconde a pergunta antiga
            $(indice[parseInt(usada.id)]).removeClass("selecionado"); // remove o indice destacado
            $(".next").removeClass("hidden");

            $(anterior).addClass("usada");// adiciona a classe usada
            $(anterior).removeClass("hidden");// apresenta a pergunta
            $(indice[parseInt(usada.id) - 1]).addClass("selecionado"); // destaca o indice
            if (anterior.id == 0) {
                $('.prev').addClass("hidden");
            }
        }
    });
}
avancar();
voltar();
atual();