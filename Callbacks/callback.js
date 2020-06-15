const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL= 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    // Encadenamos otro llamado, el método fail([callback])
    $
        .get(URL, opts, callback)
        // Evalúa si existe un error al hacer el request, si hubiese un error se ejecuta la función
        .fail(() => {
            console.log(`Sucedio un error. No se pudo obtener el personaje ${id}`)
        })
}

obtenerPersonaje(1, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(2, function(personaje) {
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(3, function(personaje) {
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(4, function(personaje) {
                console.log(`Hola, yo soy ${personaje.name}`)

                obtenerPersonaje(5, function(personaje) {
                    console.log(`Hola, yo soy ${personaje.name}`)

                    obtenerPersonaje(6, function(personaje) {
                        console.log(`Hola, yo soy ${personaje.name}`)

                        obtenerPersonaje(7, function(personaje) {
                            console.log(`Hola, yo soy ${personaje.name}`)

                            obtenerPersonaje(8, function(personaje) {
                                console.log(`Hola, yo soy ${personaje.name}`)

                                obtenerPersonaje(9, function(personaje) {
                                    console.log(`Hola, yo soy ${personaje.name}`)

                                    obtenerPersonaje(10, function(personaje) {
                                        console.log(`Hola, yo soy ${personaje.name}`)

                                        obtenerPersonaje(11, function(personaje) {
                                            console.log(`Hola, yo soy ${personaje.name}`)

                                            obtenerPersonaje(12, function(personaje) {
                                                console.log(`Hola, yo soy ${personaje.name}`)
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

