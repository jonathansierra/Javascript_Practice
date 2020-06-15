const suma = (...numbers) => numbers.reduce((acum, number) => acum += number, 0)
const dobles = (...numbers) => numbers.map(number => number * 2)
const pares = (...numbers) => numbers.filter(number => number % 2 == 0)
/*New concepts*/
[
  "lunes",
  "maerte",
  "miércoles"
].forEach(function (dia){
  console.log(dia);
})
