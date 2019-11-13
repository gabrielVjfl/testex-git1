 let tmp // global

function mudaCor() {
        let obj = document.getElementById("dv1");
    
    let r = Math.floor(Math.random()*255) // floor = numero inteiroo, sorteia 
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)
    obj.style.backgroundColor="rgb("+r+","+g+","+b+")" // chama o background
}

// Parte dos botões

function iniciar() {
     tmp = setInterval(mudaCor,1000) // setTimeout passa 1 segundo e passa
}      // let tmp => escopo de função

function parar() {
    clearInterval(tmp) // global pega o tmp, clear inteval para
}
// adicionar evento no botão

function addEventos() {
    document.getElementById("bt1").addEventListener("click", iniciar) // evento click chama fun iniciar
    document.getElementById("bt2").addEventListener("click", parar) // evento click chama fun parar

}
window.addEventListener("load", addEventos); // renderiza os eventos dos botoes atraves da função

//window.addEventListener("load",mudaCor); // quando atualizar....