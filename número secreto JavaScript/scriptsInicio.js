let numeroSecreto;
let digitos ="";
let tentativas = 1;
let numeroDigitado;
let comecar;
let valorTempo = 61;
let cod;
let tempoGasto;
let controle = 0;

function atualizarTimer(){
    valorTempo--;
    crono.textContent = valorTempo;
    crono.style.color = "red";

    if(valorTempo == 0){
        clearInterval(cod);
        btnVerificar.disabled = true;
        entrada.disabled = true;
        impressao.textContent = "O tempo se esgotou.";
        impressao.style.color = "red";
        bntResetar.hidden = false;
    }
}


function comecarJogo(){

    btnComecar.hidden = true
    dificuldade.hidden = true
    entrada.hidden = false;
    btnVerificar.hidden = false;
    mostrar.hidden = false;
    tempo.hidden = false;
    cod = setInterval(atualizarTimer, 1000);
}

function validarCampo1(){
    if(entrada.value ==""){
        impressao.textContent="Digite um número!";
        impressao.style.color = "red";
        entrada.focus();
        
        setTimeout(limpaImpressao, 2000);
    }

    else{
        botaoAcionado();
    }

}

function limpaImpressao(){
    impressao.textContent="";
}


function mostrarDigitos(){
    if(check.checked == true){
        digitosErros.hidden = false;
        digitosErros.innerHTML="Números digitados: "+digitos
    }
    else{
        digitosErros.hidden = true;
    }
}

function botaoAcionado(){

   
    
    numeroDigitado = entrada.value;
    
    

    if(numeroDigitado == numeroSecreto){
        impressao.textContent="Parabens! você está correto.";
        impressao.style.color = "green";
        
        clearInterval(cod);
        crono.style.color = "green"
        
        btnVerificar.disabled = true;
        entrada.disabled = true;

        tempoGasto = 60 - valorTempo;
        
        digitosErros.innerHTML= numeroDigitado;
        blocoErros.innerHTML="<strong>Você precisou de "+tentativas+" tentativas e "+tempoGasto+" segundos para acertar.</strong>"

        bntResetar.hidden = false;


    }

    else if(numeroDigitado < numeroSecreto){
        impressao.textContent="Errado, o número secreto é MAIOR!";
        impressao.style.color = "red";
        entrada.focus();
        tentativas = ++tentativas;
        setTimeout(limpaImpressao, 2000);

        
    }

    else{
        impressao.textContent="Errado, o número secreto é MENOR!";
        impressao.style.color = "red";
        entrada.focus();
        tentativas = ++tentativas;
        setTimeout(limpaImpressao, 2000);
        

    }

    
    digitos += numeroDigitado+",";
    
    
   mostrarDigitos()
    //digitosErros.innerHTML="Números digitados: "+digitos
    
    
    
}

function reset(){
    window.location.reload(true);
}
