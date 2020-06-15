const geovani = {
    nombre: 'Geovani',
    apellido: 'Robles'
}

const eduardo = {
    nombre: 'Eduardo',
    apellido: 'Sierra'
}

function saludar(saludo = 'Hola') {
    console.log(`${saludo} mi nombre es ${this.nombre}`)
}

//const saludarAGeovani = saludar.bind(geovani)
//const saludarAEduardo = saludar.bind(eduardo)

//setTimeout(saludar.bind(geovani, 'Hola che'), 1000)

//saludar.call(geovani) //La ejecuta inmediatamente

saludar.apply(geovani, ['Hola che'])