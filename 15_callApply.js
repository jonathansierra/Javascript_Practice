const geovani = {
  nombre: "Geovani",
  apellido: "Robles"
}

function saludar(veces, uppercase) {
  let str = `Hola ${this.nombre} ${this.apellido}`
  str = uppercase ? str.toUpperCase() : str
  for(let i = 0; i < veces; i++) {
    console.log(str)
  }
}

const params = [3, true]
saludar.call(geovani, ...params)
saludar.apply(geovani, [3, true])
