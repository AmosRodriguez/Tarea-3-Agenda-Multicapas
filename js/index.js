const nombre = document.querySelector('.nombre')
const numero = document.querySelector('.numero')
const direccion = document.querySelector('.direccion')
const Agregar = document.querySelector('.btn-agregar')

const listadoTareas = document.querySelector('.listado-tarea')

const db = window.localStorage

Agregar.onclick = () =>{
    let info = {
        id: Math.random(1,100),
        nombre: nombre.value,
        numero: numero.value,
        direccion: direccion.value,
    }
    guardarInfo(db, info)
}

cargarInfo(db, listadoTareas)
