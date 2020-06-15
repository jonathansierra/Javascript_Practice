class Persona {
  constructor(nombre, amigos = []) {
    this.nombre = nombre
    this.amigos = amigos
  }

  listarAmigos() {
    this.amigos.forEach((amigo) =>
    console.log(`Hola mi nombre es ${this.nombre} y soy amigo de ${amigo}`))
  }
}

const geovani = new Persona("Geovani", ["Pedro", "Juan", "Pepe"])
