const contenedor_1 = document.getElementById("contenedor_1"),
btn_cambio = document.getElementById("btn_cambio")
const num = 0
const resultado = document.getElementById("resultado")
let posicionesx = [], posicionesy = []

const transicion =(hijos, inicio_x, inicio_y, posicion_final)=>{
    
    for(let i = 0; i<6; i++){

        const valor = posicion_final.indexOf(i)
        const ladox = inicio_x[valor]
        const ladoy = inicio_y[valor]

        const tras_x = ladox - inicio_x[i]
        const tras_y = ladoy - inicio_y[i]

        hijos[i].style.transicion = "all 1s ease"
        hijos[1].style.transform = `translate(${tras_y}px, ${tras_x}px)`
        

    }    
    
}

function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


for (let i=0;i<9;i++){

    var cuadrado = document.createElement("div")
    cuadrado.className ="cuadrado movimiento"


    contenedor_1.appendChild(cuadrado)

    if (i == 0){
        cuadrado.id="cuadrado_1"
    }
}

const rojo = document.getElementById("cuadrado_1")
rojo.setAttribute("style","background-color:red;")
const hijos = Array.from(contenedor_1.children)

for(let i=0;i<9;i++){
    
        let rect = hijos[i].getBoundingClientRect()
        posicionesx.push(rect.left)
        posicionesy.push(rect.top)

        
    }
    let borde = contenedor_1.getBoundingClientRect()
    let bordex = borde.left
    let bordey = borde.top
if (btn_cambio) btn_cambio.addEventListener("click",async function(){

    rojo.setAttribute("style","background-color:blue;")
for(let n=0;n<20;n++){
    
    let nuevas_posiciones = []
    const disponibles = [0,1,2,3,4,5,6,7,8]
    let i = 0
    while(disponibles.length>0){
        const valor = Math.floor(Math.random()*disponibles.length);
        const j = disponibles[valor]
        if(i!=j){

            nuevas_posiciones.push(j)
            i++
            disponibles.splice(valor,1)
        }else if(disponibles.length == 1){

            nuevas_posiciones.push(j)
            i++
            disponibles.splice(valor,1)
        }
          
    }
     

    for(let i=0;i<9;i++){
        
        let posx = posicionesx[nuevas_posiciones[i]]
        let posy = posicionesy[nuevas_posiciones[i]]
        
        hijos[i].style.position = "absolute";

        hijos[i].style.left = posx-bordex+"px"
        hijos[i].style.top = posy-bordey+"px"
        
    }

    console.log(nuevas_posiciones)
    await esperar(800)
}
})
if(btn_cambio) rojo.addEventListener("click", function(){
    rojo.style.backgroundColor ="red"
    
})


