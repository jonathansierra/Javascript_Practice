/* definimos una variable = new Promise(funcion(resolve, reject)) */

function get(URL){
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      const DONE = 4
      const OK = 200
      if (this.readyState === DONE) {
        if(this.status === OK){
          resolve(JSON.parse(this.responseText))
        }else {
          reject(newError(`Se produjo un error al realizar el request ${this.status}`))
        }
      }
    }

    xhr.open('GET', URL);
    xhr.send(null);
  })
}

function handleError(err){
	console.log(`Request failed: ${err}`)
}

let luke

fetch('https://www.swapi.co/api/people/1/')
  .then(response => response.json())
  .then((json) => {
    luke = json
    return fetch(luke.homeworld)
  })
  .then(response => response.json())
  .then((json) => {
    luke.homeworld = json
	  console.log(`${luke.name} nació en ${luke.homeworld.name}`)
  })
  .catch(err => handleError(err))
