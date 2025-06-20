const contenedor_1 = document.getElementById("contenedor_1"),
btn_cambio = document.getElementById("btn_cambio")
const num = 0
const resultado = document.getElementById("resultado")

const transicion =(hijos, inicio_x, inicio_y, posicion_final)=>{
    
    for(let i = 0; i<6; i++){

        const valor = posicion_final.indexOf(i)
        const ladox = inicio_x[valor]
        const ladoy = inicio_y[valor]

        const tras_x = ladox - inicio_x[i]
        const tras_y = ladoy - inicio_y[i]

        hijos[i].style.transicion = "all 2s ease"
        hijos[1].style.transform = `translate(${tras_y}px, ${tras_x}px)`
        

    }    
    
}


for (let i=0;i<6;i++){

    var cuadrado = document.createElement("div")
    cuadrado.className ="cuadrado movimiento"


    contenedor_1.appendChild(cuadrado)

    if (i == 0){
        cuadrado.id="cuadrado_1"
    }
}

const rojo = document.getElementById("cuadrado_1")
rojo.setAttribute("style","background-color:red;")

if (btn_cambio) btn_cambio.addEventListener("click",function(){

    let posiciones_iniciales_x = []
    let posiciones_iniciales_y = []
    let nuevas_posiciones = []
    const disponibles = [0,1,2,3,4,5]
    const hijos = Array.from(contenedor_1.children)
    hijos.forEach(hijo => {
        let cons = hijo.getBoundingClientRect()
        posiciones_iniciales_x.push(cons.left)
        posiciones_iniciales_y.push(cons.top)
        
    });
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
    [hijos[0],hijos[1],hijos[2],hijos[3],hijos[4],hijos[5]] = [hijos[nuevas_posiciones[0]],hijos[nuevas_posiciones[1]],hijos[nuevas_posiciones[2]],hijos[nuevas_posiciones[3]],hijos[nuevas_posiciones[4]],hijos[nuevas_posiciones[5]]]
    
    transicion(hijos,posiciones_iniciales_x,posiciones_iniciales_y,nuevas_posiciones)
    console.log(nuevas_posiciones)
    
   

})
if(btn_cambio) rojo.addEventListener("click", function(){
    rojo.setAttribute("style","background-color:red;")
    resultado.innerHTML ="<h1>ganaste</h1>"
})


