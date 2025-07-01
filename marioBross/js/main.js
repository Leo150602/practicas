const jugador = document.getElementById("mario")
let activo = false

document.addEventListener("keydown", (tecla)=>{

    activo=true
    let rect = jugador.getBoundingClientRect()
    posx = rect.left
    posy = rect.top

    
        if (tecla.key == "ArrowLeft"){
            jugador.style.left = (posx-2)+"px"
            console.log(posy)
        }
        if (tecla.key == "ArrowRight"){
            jugador.style.left = (posx+2)+"px"
            console.log(posx)
        }
        if (tecla.key == "ArrowUp"){
            jugador.style.tpo = (posy-2)+"px"
        }
        if (tecla.key == "ArrowDown"){
            jugador.style.top= (posx+2)+"px"
        }
        setTimeout(10)
    
})
document.addEventListener("keyup", (tecla)=>{

    activo=false
})
