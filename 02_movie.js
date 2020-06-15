const starWars7 = 'Star Wars: The Force Awakening';
const pgStarWars7 = 13;

const nameGeo = 'Geovani';
const ageGeo = 26;

const nameEdu = 'Eduardo';
const ageEdu = 2;

const canWatchStarWars7 = (name, age, isWithAdult = false) => {
  if(age >= pgStarWars7) {
    alert(`${name} puede pasar a ver ${starWars7}`);
  } else if(isWithAdult) {
    alert(`${name} puede pasar a ver ${starWars7}.
    Aunque su edad es ${age}, viene acopañado de un adulto`)
  } else {
    alert(`${name} no puede pasar a ver ${starWars7}.
    Tiene ${age} años y necesita tener ${pgStarWars7}`)
  }
}

canWatchStarWars7(nameGeo, ageGeo);
canWatchStarWars7(nameEdu, ageEdu, true);
