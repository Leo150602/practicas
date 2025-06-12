const nombre = document.getElementById("nombre"), 
email = document.getElementById("email"), 
numero = document.getElementById("numero"), 
contraseña = document.getElementById("contraseña"), confirmacion = document.getElementById("confirmacion"), 
registro = document.getElementById("btn_registro"),
inicio = document.getElementById("btn_inicio")

const usuario = document.getElementById("usuario"),
contra =document.getElementById("contra"),
inicio_s = document.getElementById("inicio_secion")

let datos =[{nombre: 'kevin', email: 'kevingamboamosquera@gmail.com', numero: '3215851276', contraseña: 'cualquiercosa', confirmacion:'cualquiercosa' }]

function verificacion(){

    let v1 = true
    if (nombre.value.trim() != ''){

    }else{
        v1=flase

        nombre.value = ''
        nombre.setAttribute("placeholder", "nombre faltante")
        nombre.setAttribute("class", "alerta")
    }

    if (email.value.trim() != ''){

    }else{
        v1=flase

        email.value =''
        email.setAttribute("placeholder", "email faltante")
        email.setAttribute("class", "alerta")
    }

    if (numero.value.trim() != ''){

    }else{
        v1=flase
        
        numero.value = ''
        numero.setAttribute("placeholder","numero faltante")
        numero.setAttribute("class","alerta")
    }

    if (contraseña.value.trim() != ''){

    }else{
        v1=flase

        contraseña.value = ''
        contraseña.setAttribute("placeholder","contraseña no valida")
        contraseña.setAttribute("class","alerta")
    }

    if (confirmacion.value == contraseña.value && confirmacion.value != ''){

    }else{
        v1=flase
        
        confirmacion.value = ''
        confirmacion.setAttribute("placeholder","la contraseña no es la misma")
        confirmacion.setAttribute("class","alerta")
    }

    if(v1){

        datos.push({
            nombre:nombre,
            email:email,
            numero:numero,
            contraseña:contraseña,
            confirmacion:confirmacion
        })

    }
}

function iniciar_secion(){
    let v2 = true
    datos.forEach(dato => {
        
        if(dato[0] == usuario){



            if (dato[3] == contra){



            }else{
                v2=false
            }

        }else{
            v2 = false
        }
        
    });

    if(v2){



    }

}


registro.addEventListener("click", verificacion)
inicio.addEventListener("click", function () {
    window.location.href = "inicio.html";
})
