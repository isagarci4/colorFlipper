var button = document.getElementById("botao")
var input = document.getElementById('input-cor')
var span = document.getElementById('texto-cor')
const listaCores = [ 'green', '#F09324','#FFF098','#AFAFAF', 'blue', '#545653'] 

function numeroRadomico() {
    return Math.floor(Math.random() * listaCores.length)
}

function quandoClicar(){
    var cor 
    if(input.value){
        cor = input.value

   }else{
        var randomico = numeroRadomico()
        cor = listaCores[randomico]
   }

   document.body.style.backgroundColor = cor 
   span.textContent = cor


}


button.addEventListener("click", quandoClicar)