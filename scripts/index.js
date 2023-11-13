// Creo un archivo index.js en la carpeta scripts para poder agrupar el código JavaScript

// Función para obtener personajes
async function obtenerPersonajes() {
    try {
        const respuestaAPI = await fetch('https://rickandmortyapi.com/api/character/')
        const data = await respuestaAPI.json()
        return data.results
    }catch(error) {
        console.error(error)
    }
}

// Defino otra función para Pintar los personajes
function pintarPersonajes(personajes) {
    const listaPersonajes = document.getElementById('lista-personajes')
        personajes.forEach((personaje) => {
            const li = document.createElement('LI')
            li.innerHTML = `
                <img src="${personaje.image}" alt="${personaje.name}" />
                <p>${personaje.name}</p>
            `
            // li.textContent = personaje.name
            listaPersonajes.appendChild(li)
        })
}

async function obtenerYPintarPersonajes() {
    const personajes = await obtenerPersonajes()
    pintarPersonajes(personajes)
}

// Defino un oyente de eventos al botón
const botonPersonajes = document.getElementById('boton-personajes')
botonPersonajes.addEventListener('click', obtenerYPintarPersonajes)