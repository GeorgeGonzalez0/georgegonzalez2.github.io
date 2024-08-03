const API = 'https://rickandmortyapi.com/api/character/'

var xhttp = null

function personaje(objeto) {
    let div = document.createElement('div')
    let h1_texto = document.createTextNode(objeto.name)
    let h1 = document.createElement('h1')
    h1.appendChild(h1_texto)
    div.appendChild(h1)
    let img = document.createElement('img')
    img.src = objeto.image
    div.appendChild(img)

    let contenedor = document.getElementById('container')
    contenedor.appendChild( div )
}

async function obtener_personaje(id) {
   try {
      let response = await fetch( `${URL}${id}` )
      return personaje( await response.json() )
   } catch(mensaje) {
      console.error( `[error]: ${mensaje}` )
   }
}

for (let i=1; i<=10; i++) {
   obtener_personaje(i)
}
