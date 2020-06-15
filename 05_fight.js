let lifeGoku = 100;
let lifeSuperman = 100;

const MIN_POWER = 5;
const MAX_POWER = 12;

let round = 1;

const stillAlive = () => lifeGoku > 0 && lifeSuperman > 0;
const calculateHit = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER)) + MIN_POWER;
const isGokuStillAlive = () => lifeGoku > 0;

while(stillAlive()) {
  console.log(`Round ${round}`);
  const knockGoku = calculateHit();
  const knockSuperman = calculateHit();
  if(knockGoku > knockSuperman) {
    console.log(`Goku ataca a Superman con un golpe de ${knockGoku}`);
    lifeSuperman -= knockGoku;
    console.log(`Superman queda en ${lifeSuperman} de vida`)
  } else {
    console.log(`Superman ataca a Goku con un golpe de ${knockSuperman}`);
    lifeGoku -= knockSuperman;
    console.log(`Goku queda en ${lifeGoku} de vida`)
  }
  round++;
}

if(isGokuStillAlive()) {
  console.log(`Goku gano la pelea - Su vida es de: ${lifeGoku}`);
} else {
  console.log(`Superman gano la pelea - Su vida es de: ${lifeSuperman}`);
}
