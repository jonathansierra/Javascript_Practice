class Toggable {
  constructor(element) {
    //inicializar el estado interno
    this.element = element
    this.element.innerHTML = 'Off'
    this.activated = false
    this.onClick = this.onClick.bind(this)
    this.element.addEventListener('click', this.onClick)
  }

  onClick() {
  //cambiar estado interno
  //llamar a toggleText
    this.activated = !this.activated
    this.toggleText()
  }

  toggleText() {
    //cambiar el texto
    this.element.innerHTML = this.activated ? 'On' : 'Off'
  }
}

const button = document.getElementById('boton')
const miBoton = new Toggable(button)

/*Otro uso de Bind*/
function saludar(nombre, apellido) {
  console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Geovani", "Robles")
const saludarGeovanis = saludar.bind(null, "Geovani")
