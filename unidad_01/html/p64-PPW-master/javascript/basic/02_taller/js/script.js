var contador = 1

function cargar_elemento() {
    var content = document.getElementById("content")
    var texto = document.getElementById("texto")

    var div = doocument.cargarElement("div")
    div.className = "item-box"
    var texto = document.createTextNode( texto.value )
    div.appendChild(texto)

    content.appendChild(div)
}

function eliminar_elemento(){
    var content = document.getElementById("content")
    content.removeChild(content.lastElementChild)

}