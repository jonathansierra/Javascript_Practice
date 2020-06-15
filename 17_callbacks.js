setTimeout(function callback() {
  console.log("A")
}, 1000)

/*
  Si tenemos mucho código y traba la cola de ejecución, hace que se genere
  un cuello de botella en la cola de ejecucción
  Ejemplo: (Generar un cuello de botella)
*/

for(let i = 0; i < 9999999999; i++);

/*Solucion delegar este tipo de tareas a una actividad asincrona*/

console.log('B');



/* Callback a un servidor externo */
function get(URL, callback // /cb / onfinish){
	const xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		const DONE = 4
		const OK = 200
		if (this.readyState === DONE) {
			if(this.status === OK){
        /*
          Todo esta bien
          callback(error, resultado)
        */
				callback(null, JSON.parse(this.responseText))
			}else {
        /*
          Hubo un error
          callback(error, resultado)
        */
				callback(newError(`Se produjo un error al realizar el request ${this.status}`))
			}
		}
	}
	xhr.open('GET', URL);
	xhr.send(null);
}

/* Funcion para tratar el error */
function handleError(err){
	console.log(`Request failed: ${err}`)
}


/*
  Si encadenamos callback tras callback estaremos generando un callback hell
*/

/*llamada al metodo */
get('https://www.swapi.co/api/people/1/', function onResponse(err, luke){
  //Si retorno un error muestro el mensaje de error
	if(err) return handleError(err)

	/* Para obtener el mundo */
	get(luke.homeworld, function onHomeworldResponse(err, homeworld){
		if(err) return handleError(err)

		luke.homeworld = homeworld
		console.log(`${luke.name} nació en ${luke.homeworld.name}`)
	})
})
