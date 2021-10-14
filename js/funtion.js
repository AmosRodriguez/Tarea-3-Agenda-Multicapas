const guardarInfo = (db, info) =>{
    db.setItem(info.id, JSON.stringify(info))
    window.location.href = '/'
}

const cargarInfo = (db, parentNode) =>{
    let claves = Object.keys(db)

    for(clave of claves){
        let info = JSON.parse(db.getItem(clave))
        crearInfo(parentNode, info, db)
    }
}

const crearInfo = (parentNode, info, db) =>{
    let divInfo = document.createElement('div')
    let nombreinfo = document.createElement('h3')
    let numeroInfo = document.createElement('p')
    let direccionInfo = document.createElement('p')
    let iconoBorrar = document.createElement('span')

    nombreinfo.innerHTML = info.nombre
    numeroInfo.innerHTML = info.numero
    direccionInfo.innerHTML = info.direccion
    iconoBorrar.innerHTML = 'delete_forever'

    divInfo.classList.add('tarea')
    iconoBorrar.classList.add('material-icons', 'icono')

    iconoBorrar.onclick = () =>{
        db.removeItem(info.id)
        window.location.href = '/'
    }

    divInfo.appendChild(nombreinfo)
    divInfo.appendChild(numeroInfo)
    divInfo.appendChild(direccionInfo)
    divInfo.appendChild(iconoBorrar)

    parentNode.appendChild(divInfo)
}