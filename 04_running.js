const nombre = 'Sasha';
const days = [
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
  'domingo'
];

function correr () {
  const min = 5;
  const max = 15;
  return Math.round(Math.random() * (max - min)) + min;
}

let totalKms = 0;

const length = days.length;
for(let i = 0; i < length; i++) {
  const kms = correr();
  totalKms += kms;
  console.log(`El día ${i + 1} ${nombre} ran ${kms}kms`)
}

const average = (totalKms / length).toFixed(2);
console.log(`On average, ${nombre} ran ${average} kms`);
