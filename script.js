let pantalla = document.getElementById('pantalla')
let boton = document.querySelectorAll('.boton')

for( let i = 0; i < boton.length; i++){
  boton[i].addEventListener('click', function(){

    switch (boton[i].textContent) {
      case "AC": pantalla.value = ""
                  break;
      case "←" : pantalla.value = pantalla.value.slice(0, pantalla.value.length -1);
                  break;
      case "•" :  pantalla.value += "."
                  break;
      case "( )": parentesis()
                  break;
      case "=" :  resultado()
                  break;
      default: pantalla.value += boton[i].textContent
                  break;
    }
    

  })
}

function parentesis() {
  if(pantalla.value.indexOf('(') === -1){
    pantalla.value += '('
    
  }
  else if(pantalla.value.slice(-1) ==='('){
    pantalla.value += '('
  }
  else if(contarParentesis()){
    pantalla.value += ')'
  }
  else {
    pantalla.value +='('
  }
}

function contarParentesis(){
  let abrirParentesis = 0
  let cerrarParentesis = 0
  for(let i = 0; i < pantalla.value.length; i++){
    if(pantalla.value[i]==='('){
      abrirParentesis++
    }
    else if(pantalla.value[i]===')'){
      cerrarParentesis++
    }
  }
  
  if(abrirParentesis === cerrarParentesis){
    return false
  } else {
    return true
  }
}
function resultado(){
  
}
