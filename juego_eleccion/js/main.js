const contenedor_1 = document.getElementById("contenedor_1"),
btn_cambio = document.getElementById("btn_cambio")
const num = 0
const resultado = document.getElementById("resultado")


for (let i=0;i<6;i++){

    var cuadrado = document.createElement("div")
    cuadrado.className ="cuadrado"


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
    for (let i = hijos.length -1; i>0;i--){

        const j = Math.floor(Math.random() * (i + 1));

        [hijos[i],hijos[j]] = [hijos[j],hijos[i]]

    }
    hijos.forEach(hijo => {
        contenedor_1.appendChild(hijo)
    });

})
if(btn_cambio) rojo.addEventListener("click", function(){console.log("este es")
    rojo.setAttribute("style","background-color:red;")
    resultado.innerHTML ="<h1>ganaste</h1>"
})


