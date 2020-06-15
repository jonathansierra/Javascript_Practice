function factorial(n) {
    if(!this.cache) { // Creamos un objeto vacío el cual nos servira para guardar el resultado
        this.cache = {}
    }

    if(this.cache[n]) { 
        // Es ejecutada solo si la cache tiene datos (después de más de 1 llamada a la función)
        // y retornamos el objeto cache
        // ya no es necesario realizar las operaciones,
        // puesto que ya tenemos guardada la información en la variable
        // La variable cache tiene los siguientes datos con el factorial 6
        // {2: 2, 3: 6, 4: 24, 5: 120, 6: 720}
        return this.cache[n]
    }

    if(n === 1) { // Preguntamos si llegó al caso base
        return 1
    }

    this.cache[n] =  n * factorial(n-1) 
    // Se ejecutará en la primera llamada a la función
    // y guardamos el resultado de cada una de las operaciones en el objeto cache
    return this.cache[n] // Retornamos el resultado
}