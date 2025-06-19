const contenedor_1 = document.getElementById("contenedor_1"),
btn_cambio = document.getElementById("btn_cambio")
const num = 0
const resultado = document.getElementById("resultado")

const cambiar_posicion =(uno, dos)=>{
    
    const posicion = uno.getBoundingClientRect()
    const posicion_2 = dos.getBoundingClientRect()
    const ladox =posicion_2.left - posicion.left
    const ladoy = posicion_2.top - posicion.top
    uno.style.transform = `translate(${ladox}px, ${ladoy}px)`
    dos.style.transform = `translate(${-ladox}px, ${-ladoy}px)`
    
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
    const hijos = Array.from(contenedor_1.children)
    rojo.setAttribute("style", "")
    resultado.innerHTML =""
    const hs = []
    let contador = 0
    
    
    for (let i = hijos.length -1; i>0;i--){
        let v4 = true
        let j
        while(v4){

            v4 = false
           const k = Math.floor(Math.random() * (i + 1))
            for (let u = 0; u < 6 ; u++){

                if(k == hs[u]){

                    v4 = true

                }

            }
            j = k

        }
        
        console.log(j)
        hs.push(j)
        console.log(hs)

        
        

    }
    for (let i = hijos.length -1; i>0;i--){
        
        [hijos[i],hijos[hs[contador]]] = [hijos[hs[contador]],hijos[i]]
        contador++
    }
    hijos.forEach(hijo => {
        contenedor_1.appendChild(hijo)
    });

})
if(btn_cambio) rojo.addEventListener("click", function(){console.log("este es")
    rojo.setAttribute("style","background-color:red;")
    resultado.innerHTML ="<h1>ganaste</h1>"
})


