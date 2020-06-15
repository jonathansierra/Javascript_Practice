function Point(x, y) {
  this.x = x
  this.y = y
}

Point.prototype.moveX = function moveX(x) {
  this.x += x
};

Point.prototype.moveY = function moveY(y) {
  this.y += y
};

Point.prototype.distances = function distances(p) {
  const x = this.x - p.x
  const y = this.y - p.y
  return Math.sqrt(x * x + y * y)
};

const p1 = new Point(0, 4)

const p2 = new Point(3, 0)

console.log(p1.distances(p2).toFixed(2))
console.log(p2.distances(p1).toFixed(2))
p1.moveX(10)
console.log(p1.distances(p2).toFixed(2))
p2.moveY(-4)
console.log(p1.distances(p2).toFixed(2))
console.log(p1.__proto__)
//We modificated the prototype of Point
p1.__proto__.moveX = function() { alert('hola') }
//This changes will be modificated in all objects
console.log(p2.moveX(200))
