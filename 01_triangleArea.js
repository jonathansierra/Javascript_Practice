let base = 5;
let height = 7;

/*This is a typical function, but we can omit it by an arrow function*/
function triangleArea(base, height) {
  return base * height / 2
}

/*
  Arrow Function
  Define a variable = (paramenters) => code
*/
const triangleArea = (base, height) => base * height / 2;

console.log(`The result of the area of a triangle
of base ${base} and height ${height} is: ${triangleArea(base, height)}`);

/*************************************************************************/

let diamater = 10;

const circuleArea = (diamater) => Math.pow(diamater / 2, 2) * 3.1416;

console.log(`The result of the area of a circle that have
a diamater ${diamater} is: ${circuleArea(diamater)}`);
