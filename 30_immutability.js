//Las dos variables apuntan (o hacen referencia) al mismo objeto en memoria
//Por ello si modificamos otroGeovani, tambien se verá modificado geovani
let geovani = {name: 'Geovani', apellido: 'Robles', edad: 26}
let otroGeovani = geovani
otroGeovani.edad = 27
//Ahora las dos variables tiene 28
function cumpleanos(persona) {
  //debemos evitar el side defect
  persona.edad++
}
cumpleanos(geovani)

//rescribimos la funcion pero ahora de manera inmutable
cumpleanos = function(persona) {
  const clone = Object.assign({}, persona)
  clone.edad++
  return clone
}

const geovaniViejo = cumpleanos(geovani)
