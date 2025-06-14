const btn_guardar = document.getElementById("btn_tarea"), lista = document.getElementById("lista"), input_tarea = document.getElementById("tarea"), input_dia = document.getElementById("dia"), input_hora = document.getElementById("hora")

let tareas =[{id:1, titulo:'primera tarea', dia:'lunes', hora:'12:00 a.m.'}]

const get_tarea=()=>{

    if(tareas.length){

        lista.innerHTML = ''
        tareas.forEach(el=>{
            const li = document.createElement("li")
            li.innerHTML = `<p>${el.titulo}</p> 
            <p>${el.dia} -> ${el.hora}</p>
            <button id="eliminar_tarea" data-id="${el.id}" class="eliminar_tarea">Eliminar</button>`
            li.classList.add("items")
            lista.appendChild(li)
        })


    }else {lista.innerHTML = `<h4> No hay tareas pendientes </h4>`}
    

}

const guardar_tarea = () =>{

    if (input_tarea.value.trim() != "" && input_dia.value != '' && input_hora.value != ''){
        const tarea = {
        id: new Date().getTime(),
        titulo: input_tarea.value,
        dia: input_dia.value,
        hora: input_hora.value
        }
    

        tareas.push(tarea)
        input_tarea.value = ''
        input_hora.value = ''
        input_dia.value = ''
        get_tarea()
    }else{
        alert("no se ha establecido una tarea")

    }

}

const eliminar_tarea=(id)=>{

    let nueva_tarea =[]
    nueva_tarea = tareas.filter(el=> parseInt(el.id) !== parseInt(id))
    tareas = nueva_tarea
    get_tarea()

}

document.addEventListener("DOMContentLoaded", (e)=> get_tarea())
document.addEventListener("click", (e)=> {
    if(e.target === btn_guardar) guardar_tarea()
    if(e.target.matches("#eliminar_tarea")) eliminar_tarea(e.target.dataset.id)})