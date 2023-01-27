const entrada = document.querySelector("#entrada");
const btnVerificar = document.getElementById("btnVerificar");
const impressao = document.querySelector("#impressao");
const blocoErros = document.querySelector("#erros");
const digitosErros = document.querySelector("#digitos");
const check = document.getElementById("mostrarDigitos");
const btnComecar = document.getElementById("comecar");
const dificuldade = document.getElementById("dificuldade");
const mostrar = document.getElementById("mostrar");
const tempo = document.getElementById("timer");
const crono = document.getElementById("cronometro");
const bntResetar = document.getElementById("resetar");



function validarDificuldade(){
    if(dificuldade.selectedIndex == "0"){
        impressao.innerHTML="Selecione a Dificuldade primeiro!"
        impressao.style.color = "red";
        dificuldade.focus();
        setTimeout(limpaImpressao, 2000);
    }

    else if (dificuldade.selectedIndex =="1"){
        numeroSecreto = Math.round(Math.random()*50);
        comecarJogo()

    }

    else if(dificuldade.selectedIndex =="2"){
        numeroSecreto  = Math.round(Math.random()*100);
        comecarJogo()
    }

    else if (dificuldade.selectedIndex =="3"){
        numeroSecreto = Math.round(Math.random()*1000);
        comecarJogo()
    }

    else if (dificuldade.selectedIndex =="4"){
        numeroSecreto = Math.round(Math.random()*5000);
        comecarJogo()
    }

}


btnComecar.addEventListener("click", validarDificuldade);
bntResetar.addEventListener("click" ,reset)
check.addEventListener("change", mostrarDigitos)
btnVerificar.addEventListener("click", validarCampo1);
