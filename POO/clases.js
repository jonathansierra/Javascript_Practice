/* Funciones como parámetros */
class Persona {
	constructor(nombre, apellido, altura) {
		this.nombre = nombre
		this.apellido = apellido
		this.altura = altura
    }
    
    // Pasamos una función como parámetro
	saludar(fn) {
		let {nombre, apellido } = this // Esto es igual a las líneas comentadas abajo
		//let nombre = this.nombre
		//let apellido = this.apellido
		console.log(`Hola, me llamo ${nombre} ${apellido}`)
		if(fn) {
			// Podemos omitir el false ya que al momento de evaluar y no pasarle ningun valor este será undefined -> (false)
			fn(nombre, apellido, false)
		}
	}
	
	soyAlto() {
		return this.altura > 1.8
	}
}

class Desarrollador extends Persona {
	constructor(nombre, apellido, altura) {
		//llamar al constructor padre
		super(nombre, apellido, altura)
	}
	
	saludar(fn) {
		let {nombre, apellido } = this
		console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`)
		if(fn) {
			fn(nombre, apellido, true)
		}
	}
}

function responderSaludo(nombre, apellido, esDev) {
	console.log(`Buen día ${nombre} ${apellido}`)
	if(esDev) {
		console.log(`Ah mira, no sabia que eras dev`)
	}
}

let geovani = new Persona('Geovani', 'Robles', 1.85)
let jonatha = new Desarrollador('Jonathan', 'Sierra', 1.75)
let pedro = new Persona('Pedro', 'Perez', 1.50)

pedro.saludar()
geovani.saludar(responderSaludo)
jonatha.saludar(responderSaludo)