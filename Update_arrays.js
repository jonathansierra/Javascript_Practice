let sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

let alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

let martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

let dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

let vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

let paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

// Declaración del arreglo
let personas = [sacha, alan, martin, dario, vicky, paula]

console.log(personas)

// Acceder a los elementos de un arreglo de objetos:
console.log(personas[0])

// Acceder a los atributos de un elemento (objeto) en un arreglo:
// Opción 1
console.log(personas[0].altura)

// Opción 2
console.log(personas[0]['altura'])

// Recorrer el arreglo, utilizando arrow function
let imprimir = () => personas.forEach(({nombre}) => {
    console.log(`Nombre: ${nombre}`)
});

imprimir()