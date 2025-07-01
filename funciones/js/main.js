const color = document.getElementById("color")
const texto = document.getElementById("texto")
const btn_crear = document.getElementById("btn_crear")
const div = document.getElementById("parte_2")
const cuadrados = document.getElementsByClassName("cuadrado")
let posx, posy, activo = null, posxPasada, posyPasada,contadorZ=0, elemento = null

const crear = () =>{

    const nuevo_div = document.createElement("div")
    nuevo_div.classList.add("cuadrado")
    nuevo_div.style.backgroundColor = color.value
    nuevo_div.textContent = texto.value

    const ancho = div.clientWidth
    const largo = div.clientHeight
    
    nuevo_div.style.left = Math.floor(Math.random() * (ancho - 100 + 1)) + "px"
    nuevo_div.style.top = Math.floor(Math.random() * (largo - 100 + 1)) + "px"

    nuevo_div.style.zIndex = ++contadorZ

    nuevo_div.addEventListener("mousedown", mover)
    div.appendChild(nuevo_div)

}

const mover = (e) =>{

    elemento = e.target
    activo = true
    posx = e.clientX
    posy = e.clientY
    posxPasada = e.clientX
    posyPasada = e.clientY
    elemento.style.cursor = 'grabbing';
    elemento.style.zIndex = ++contadorZ

}


div.addEventListener("mousemove", function(e){
    
    if(!activo || !elemento) return 

    let rect = div.getBoundingClientRect()
    bordeX = rect.left
    bordeY = rect.top
    limiteDerecho = rect.right
    limiteInferior = rect.bottom

    let rect2 = elemento.getBoundingClientRect()
    cajaX = rect2.left
    cajaY = rect2.top
    cajaInferior = rect2.bottom
    cajaDerecho = rect2.right

    let cambioX = posx-bordeX-(posx-cajaX)+(posx-posxPasada)
    let cambioY = posy-bordeY-(posy-cajaY)+(posy-posyPasada)

    if(cambioX > 0 && cambioX < (limiteDerecho-bordeX)-(cajaDerecho-cajaX)) elemento.style.left = cambioX+"px"
    if(cambioY > 0 && cambioY < (limiteInferior-bordeY)-(cajaInferior-cajaY)) elemento.style.top = cambioY+"px"

    posxPasada = posx
    posyPasada = posy

    posx = e.clientX
    posy = e.clientY  

})
document.addEventListener("mouseup", function(e){
    activo = false
    div.style.cursor = 'grab'
    if(elemento) elemento.style.cursor = 'grab'
    
})

btn_crear.addEventListener("click", crear)