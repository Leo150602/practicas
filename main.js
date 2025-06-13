const nombre = document.getElementById("nombre"), 
email = document.getElementById("email"), 
numero = document.getElementById("numero"), 
contraseña = document.getElementById("contraseña"), 
confirmacion = document.getElementById("confirmacion"), 
registro = document.getElementById("registro"),
inicio = document.getElementById("btn_inicio")

const usuario = document.getElementById("usuario"),
contra =document.getElementById("contra"),
inicio_s = document.getElementById("inicio_secion"),
lista = document.getElementById("lista")


let perfil
let datos =[{nombre: 'kevin', email: 'kevingamboamosquera@gmail.com', numero: '3215851276', contraseña: 'cualquiercosa', confirmacion:'cualquiercosa' }]

function verificacion(){

    let v1 = true
    if (nombre.value.trim() != ''){

      
        nombre.classList.remove("alerta")

       

    }else{
        v1=false

        nombre.value = ''
        nombre.setAttribute("placeholder", "nombre faltante")
        nombre.setAttribute("class", "alerta")
    }

    if (email.value.trim() != ''){

        email.classList.remove("alerta")

    }else{
        v1=false

        email.value =''
        email.setAttribute("placeholder", "email faltante")
        email.setAttribute("class", "alerta")
    }

    if (numero.value.trim() != ''){

        numero.classList.remove("alerta")

    }else{
        v1=false
        
        numero.value = ''
        numero.setAttribute("placeholder","numero faltante")
        numero.setAttribute("class","alerta")
    }

    if (contraseña.value.trim() != ''){

        contraseña.classList.remove("alerta")

    }else{
        v1=false

        contraseña.value = ''
        contraseña.setAttribute("placeholder","contraseña no valida")
        contraseña.setAttribute("class","alerta")
    }

    if (confirmacion.value == contraseña.value && confirmacion.value != ''){

        confirmacion.classList.remove("alerta")

    }else{
        v1=false
        
        confirmacion.value = ''
        confirmacion.setAttribute("placeholder","la contraseña no es la misma")
        confirmacion.setAttribute("class","alerta")
    }

    if(v1){

        alert("usuario registrado")
        
        datos.push({
            nombre:nombre.value,
            email:email.value,
            numero:numero.value,
            contraseña:contraseña.value,
            confirmacion:confirmacion.value
        })


        localStorage.setItem('datos', JSON.stringify(datos))

        nombre.value=""
        numero.value=""
        email.value=""
        contraseña.value=""
        confirmacion.value=""

    }
    return true
}

function iniciar_secion(){
    let v2 = true
    datos = JSON.parse(localStorage.getItem('datos'));

    
    datos.forEach(dato => {
        
        if(dato.nombre == usuario.value){

            usuario.classList.remove("alerta")

            if (dato.contraseña == contra.value){

                perfil = dato
                localStorage.setItem('perfilUsuario', JSON.stringify(perfil));
                
                
                window.location.href = "usuario.html"

            }else{
                alert("contrasela incorrecta")
                contra.setAttribute("class", "alerta")
            }

        }else{
            v2 = false
        }
        if(!v2){
            usuario.value =""
            alert("usuario no encontrado")
            usuario.setAttribute("class", "alerta")
        }
        
    });

}


if(registro) registro.addEventListener("click", verificacion)
if(inicio) inicio.addEventListener("click", function () {
    window.location.href = "inicio.html"
})
if(inicio_s) inicio_s.addEventListener("click", iniciar_secion)
if (lista){
    const perfil = JSON.parse(localStorage.getItem('perfilUsuario'));

    lista.innerHTML = `
        <li>
            <label>nombre</label>
            <h1>${perfil.nombre}</h1>
        </li>
        <li>
            <label>numero</label>
            <h1>${perfil.numero}</h1>
        </li>
        <li>
            <label>email</label>
            <h1>${perfil.email}</h1>
        </li>
    `
}