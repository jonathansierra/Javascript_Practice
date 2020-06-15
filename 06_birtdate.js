const BIRTHDATE = new Date(1995, 7, 31);
const TODAY = new Date();
const TIME = TODAY - BIRTHDATE;
const TIME_SECONDS = TIME / 1000;
const TIME_MINUTES = TIME_SECONDS / 60;
const TIME_HOURS = TIME_MINUTES / 60;
const NEXT_BIRTHDATE = new Date(TODAY.getFullYear(), BIRTHDATE.getMonth(), BIRTHDATE.getDate());

const days = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado'
]

console.log(days[NEXT_BIRTHDATE.getDay()]);
