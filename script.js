let pantalla = document.getElementById('pantalla')
let boton = document.querySelectorAll('.boton')
let resultadoVar = ''
for( let i = 0; i < boton.length; i++){
  boton[i].addEventListener('click', function(){

    switch (boton[i].textContent) {
      case "AC": pantalla.value = ''
                  resultadoVar = ''
                  break;
      case "←" :  error()
                  pantalla.value = pantalla.value.slice(0, pantalla.value.length -1)
                  resultadoVar = resultadoVar.slice(0, resultadoVar.length - 1)
                  break;
      case "•" :  error()
                  pantalla.value += '.'
                  resultadoVar += '.'
                  break;
      case "( )": error()
                  parentesis()
                  break;
      case "÷": error()
                pantalla.value += '÷'
                resultadoVar += '/'
                  break;
      case "x": error()
                pantalla.value += 'x'
                resultadoVar +='*'
                break;
      case "−": error()
                pantalla.value += '-'
                resultadoVar += '-'
                break;
      case "=" :  error()
                  resultado()
                  break;
      default: error()
                pantalla.value += boton[i].textContent
                resultadoVar += boton[i].textContent
                  break;
    }
    

  })
}
/*
function parentesis() {
  if(pantalla.value.indexOf('(') === -1){
    pantalla.value += '('
    resultadoVar += '('
  }
  else if(pantalla.value.slice(-1) ==='('){
    pantalla.value += '('
    resultadoVar += '('
  }
  else if(contarParentesis()){
    pantalla.value += ')'

  }
  else {
    pantalla.value +='('
    resultadoVar += '('
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
*/

function error(){
  if(pantalla.value == 'SyntaxError'){
    pantalla.value = ''
    resultadoVar = ''
  }
}

function resultado(){
  try {
    resultadoVar = eval(resultadoVar)
    if(resultadoVar !== undefined){
      pantalla.value = parseFloat(resultadoVar.toFixed(8))
    }
  } catch (error) {
    pantalla.style.fontSize = '5vw' 
    pantalla.value = 'SyntaxError'
    resultadoVar = ''
  }
}
