class Punto {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  moveX(x) {
    this.x += x
  }

  moveY(y) {
    this.y += y
  }

  distances(p) {
    const x = this.x - p.x
    const y = this.y - p.y
    return Math.sqrt(x * x + y * y)
  }
}

const p1 = new Punto(0, 4)
const p2 = new Punto(3, 0)

console.log(p1.distances(p2).toFixed(2))
console.log(p2.distances(p1).toFixed(2))
p1.moveX(10)
console.log(p1.distances(p2).toFixed(2))
p2.moveY(-4)
console.log(p1.distances(p2).toFixed(2))
