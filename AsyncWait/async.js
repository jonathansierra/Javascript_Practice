const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL= 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
        .get(URL, opts, function(data) {
            resolve(data)
        })
        .fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

// Debemos de poner la palabra reservada async antes de la palabra function
async function obtenerTodosPersonajes() {
    let ids = [1, 2, 3, 4, 5, 6, 7]
    let promesas = ids.map(id => obtenerPersonaje(id))

    // Debemos poner un bloque de try() catch()
    try {
        // A personajes le asignamos el valor de una tarea asincrona
        // Cuando todas las promesas se resuelvan, se guardarán en personajes
        // Con await la ejecución de la función se detendra hasta que todas las promesas sean resueltas,
        // pero podemos seguir ejecutando otras cosas
        let personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch(id) {
        onError(id)
    }
}

obtenerTodosPersonajes()