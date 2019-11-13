var count = new Number()

var count = 90 // começa no 90

function start() {
 if((count - 1) >= 0) { // para no 0, se for maior ou igual a 0
   count = count - 1 // 30 tira 1 
   teste.innerText = count
   setTimeout('start();',1000)
 }
}




