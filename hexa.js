var button = document.getElementById("botao");
var input = document.getElementById('input-cor');
var span = document.getElementById('texto-cor');
const numerosHexadecimais = [0, 1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9, "A", "B", "C", "D", "E", "F"]; 

function numeroRadomico() {
    var hastag = "#";
    while(hastag.length < 7){
       hastag += numerosHexadecimais[Math.floor(Math.random() * 16) ] ;
    }
    return hastag
    
}

function quandoClicar(){
    var cor = numeroRadomico();
    
   
   document.body.style.backgroundColor = cor;
   span.textContent = cor; 

}
 

button.addEventListener("click", quandoClicar)