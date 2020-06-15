function fibonacci(num, memoria = {}) {
  if(memoria[num]) return memoria[num]
  if(num == 0) return 0
  if(num == 1) return 1
  //Guardamos en el objeto memoria en la propiedad num
  return memoria[num] = fibonacci(num - 1, memoria) + fibonacci(num - 2, memoria)
}
