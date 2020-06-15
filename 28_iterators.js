function fibonacci() {
  let a = 0, b = 1
  return {
    next: function() {
      let f = a
      a = b
      b = f + a //or b is the same
      return {value: f, done: false}
    }
  }
}

const fibo = {}
//hacemos referencia a alguna propiedad del objeto
fibo[Symbol.iterator] = fibonacci  

let i = 0
for(let value of fibo) {
  console.log(value)
  i++
  if(i > 20) break
}
