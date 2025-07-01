const jugador = document.getElementById("mario")
let activo = false
const cuerpo = document.getElementById("cuerpo")
let teclas = [], speed =5

jugador.style.top = cuerpo.getBoundingClientRect().bottom-100+"px"

function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("keydown", async (tecla)=>{

    teclas[tecla.key]=true
    
})
document.addEventListener("keyup", (tecla)=>{

    teclas[tecla.key]=false
})

const mover = () =>{

    const boxStyle = jugador.style;
    let top = parseInt(boxStyle.top);
    let left = parseInt(boxStyle.left);
    
    if (teclas['ArrowUp']){
        jugador.style.top = top-100+"px"
    }
    if (teclas['ArrowDown']) jugador.style.top = top+100+"px"
    if (teclas['ArrowLeft']) jugador.style.left = left-=speed+"px"
    if (teclas['ArrowRight']) jugador.style.left = left+=speed+"px"
    
    requestAnimationFrame(mover)

}

mover()