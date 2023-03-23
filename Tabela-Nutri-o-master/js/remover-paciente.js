
//seleciona todos os elementeos HTML que possuem a classe paciente e 
//armazena em uma variavel chamada pacientes. 
//QUERYSELECTORALL - Seleciona varios elementos de uma vez, com base 
//em um seletor(PACIENTE) CSS.
//  
var pacientes = document.querySelectorAll(".paciente");




var tabela = document.querySelector("#tabela-pacientes");


//Events Listener  - função que aguarda um determinado evento ocorrer em um 
//elemento HTML, para entao executar um codigo. 
tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});
