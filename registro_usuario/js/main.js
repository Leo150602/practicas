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
lista = document.getElementById("lista"),
registro_p = document.getElementById("registro_p"),
cam_contra = document.getElementById("cam_contra"),
cambio = document.getElementById("cambio")

let perfil
let datos =[{nombre: 'kevin', email: 'kevingamboamosquera@gmail.com', numero: '3215851276', contraseña: 'cualquiercosa' }]

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
    let v2 = false
    let algo = JSON.parse(localStorage.getItem('datos')) || [];
    
    
    algo.forEach(dato => {
        
        if(dato.nombre == usuario.value){

            usuario.classList.remove("alerta")
            v2 = true

            if (dato.contraseña == contra.value){

                perfil = dato
                localStorage.setItem('perfil', JSON.stringify(perfil.nombre))
                window.location.href = "/registro_usuario/paginas/usuario.html"

            }else{
                alert("contrasela incorrecta")
                contra.setAttribute("class", "alerta")
            }

        }else{
            
        }
        
        
    })
    if(!v2){
            usuario.value =""
            alert("usuario no encontrado")
            usuario.setAttribute("class", "alerta")
        }

}

function usuario_p(){
    
    let perfil = JSON.parse(localStorage.getItem('perfil'))
    datos = JSON.parse(localStorage.getItem('datos')) || []
    console.log('Datos cargados:', datos);

    datos.forEach(algo => {

        if(algo.nombre == perfil){

            lista.innerHTML = `
            <label>nombre</label>
            <h1>${algo.nombre}</h1>
            <label>numero</label>
            <h1>${algo.numero}</h1>
            <label>correo electronico</label>
            <h1>${algo.email}</h1>
            <label>contraseña</label>
            <h1>${String(algo.contraseña)}</h1>`
        }

    });
}

function cambiar_contraseña(){

    cambio.innerHTML = `
    <hr>
    <h2>cambio de contraseña</h2>
    <label>nueva contraseña:</label>
    <input type="text" id="nueva_contra">
    <br>
    <label>confirmar contraseña:</label>
    <input type="text" id="confirmado">
    <br>
    <button id="aceptar">cambiar</button>`

    const aceptar = document.getElementById("aceptar");
    aceptar.addEventListener("click", aceptar_cambio);

    
}

function aceptar_cambio() {
    let datos = JSON.parse(localStorage.getItem('datos')) || [];
    let perfil = JSON.parse(localStorage.getItem('perfil'));
    let nueva_contra = document.getElementById("nueva_contra");
    let confirmado = document.getElementById("confirmado");

    if (nueva_contra.value.trim() === '') {
        nueva_contra.value = '';
        nueva_contra.setAttribute("placeholder", "contraseña no valida");
        nueva_contra.classList.add("alerta");
        confirmado.classList.add("alerta");
        return;
    } else {
        nueva_contra.classList.remove("alerta");
    }

    if (nueva_contra.value !== confirmado.value) {
        confirmado.value = '';
        confirmado.setAttribute("placeholder", "la contraseña no es la misma");
        confirmado.classList.add("alerta");
        return;
    } else {
        confirmado.classList.remove("alerta");
    }

    let cambioRealizado = false;

    datos.forEach(e => {
        if (e.nombre === perfil) {
            e.contraseña = nueva_contra.value;
            cambioRealizado = true;
        }
    });

    if (cambioRealizado) {
        localStorage.setItem('datos', JSON.stringify(datos));
        usuario_p();
        cambio.innerHTML = ``;
        alert("contraseña cambiada");
    }
}



if(registro) registro.addEventListener("click", verificacion)
if(inicio) inicio.addEventListener("click", function () {
    window.location.href = "/registro_usuario/paginas/inicio.html"
})
if(registro_p) registro_p.addEventListener("click", function (){window.location.href = "/registro_usuario/index.html"})
if(inicio_s) inicio_s.addEventListener("click", iniciar_secion)
if (lista) usuario_p()

if(cam_contra) cam_contra.addEventListener("click", cambiar_contraseña)
