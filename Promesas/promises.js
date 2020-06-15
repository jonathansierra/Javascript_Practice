const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL= 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
    // Retornamos una promesa
    return new Promise((resolve, reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
        // Resolve
        .get(URL, opts, function(data) {
            resolve(data)
        })
        // Reject
        .fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

let ids = [1, 2, 3, 4, 5, 6, 7]

/*
let promesas = ids.map(function(id) {
    return obtenerPersonaje(id)
})
Esta función es la misma que la de la línea siguiente, solamente que la de abajo esta escrita con arrow functions
*/

// Se recorre cada uno de los elementos del arreglo y retorna una promesa por cada uno.
// Las peticiones se realizan en paralelo y devuelve un array de promesas
let promesas = ids.map(id => obtenerPersonaje(id))

// Obtener el valor de las promesas cuando estas hayan sido resueltas
// Método all([arreglo de promesas])
// Imprimimos los valores o mostramos los errores si es que hubiera
Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)