/*
  Closures
    Funciones que recuerdan el scope en el cual fueron creadas.
    La función externa (outer function) retorna la función interna
    (inner function) y al momento de llamar (no se sabe cuando)
    a la función interna, esta recuerda el valor de la función externa
*/

function SaludarFamilia(apellido) {
  return function (nombre) {
    console.log(`Hola ${nombre} ${apellido}`);
  }
}

const saludarGomez = SaludarFamilia("Gomez")
const saludarPerez = SaludarFamilia("Perez")

saludarGomez("Julian")
saludarGomez("Ernesto")
saludarGomez("Oscar")

saludarPerez("valeria")
saludarPerez("Fernanda")
saludarPerez("Andrea")

/*
  Reto de la clase
*/

/*
const makePrefixer = (prefijo) => (palabra) => console.log(`${prefijo}${palabra}`)

const prefijoRe = makePrefixer("re")
const prefijoIn = makePrefixer("in")
*/
