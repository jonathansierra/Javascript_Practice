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

let personas = [sacha, alan, martin, dario, vicky, paula]

let esAlta = ({ altura }) => altura > 1.80 // Función separada

//let personasAltas = personas.filter(esAlta) //Esto es lo mismo que la línea siguiente, pero se recomienda tener la función por separado
let personasAltas = personas.filter(function ({ altura }){
    return altura > 1.8
})


console.log(personasAltas)