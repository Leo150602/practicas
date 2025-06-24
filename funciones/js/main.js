const color = document.getElementById("color")
const texto = document.getElementById("texto")
const btn_crear = document.getElementById("btn_crear")
const div = document.getElementById("parte_2")
const cuadrados = document.getElementsByClassName("cuadrado")
let posx, posy, activo = null
let offsetX = 0;
let offsetY = 0;

const cosa = document.getElementById("cosa")

const crear = () =>{

    const nuevo_div = document.createElement("div")
    nuevo_div.classList.add("cuadrado")
    nuevo_div.style.backgroundColor = color.value
    nuevo_div.textContent = texto.value

    const ancho = div.clientWidth
    const largo = div.clientHeight
    
    nuevo_div.style.left = Math.floor(Math.random() * (ancho - 100 + 1)) + "px"
    nuevo_div.style.top = Math.floor(Math.random() * (largo - 100 + 1)) + "px"

    div.appendChild(nuevo_div)

}

const mover = (e) =>{

    activo = e.target

    offsetX = e.clientX - cosa.offsetLeft;
    offsetY = e.clientY - cosa.offsetTop;
    div.style.cursor = 'grabbing';

}

cosa.addEventListener("mousedown", mover)
cosa.addEventListener("mousemove", function(e){
    
    if(!activo) return 

    const rect = cosa.getBoundingClientRect()

    posx = e.clientX - rect.left - offsetX
    posy = e.clientY - rect.top - offsetY

    cosa.style.left = posx +"px"
    cosa.style.top =  posy +"px"
    console.log(posx,posy)

})
document.addEventListener("mouseup", function(){
    activo = false
    div.style.cursor = 'grab'
})

btn_crear.addEventListener("click", crear)