
var numeroAdivinhado = 0;
var  tentativa = 0;


function aleatorio(){
    numeroAdivinhado = parseInt(Math.random() * 100);
    console.log(numeroAdivinhado)
}


function verificarNumero(){

    var aposta = document.getElementById("aposta").value;

    
        
    if(aposta > 100 || aposta < 1){

        alert("aposta inválida");
    
    
    }
    
    if(aposta > numeroAdivinhado){
        tentativa++;
        alert("O número para ser encontrado e menor");

    
    }
    else if(aposta < numeroAdivinhado){
        tentativa++;
        alert("O número para ser encontrado e maior ");

        
    }
    else {
        alert("Parabéns você acertou com  : " +tentativa+ " erros");
        aleatorio();
        
    
    }

}
 
 aleatorio();
