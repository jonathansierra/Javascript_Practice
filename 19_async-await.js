function handleError(err){
	console.log(`Request failed: ${err}`)
}

async function getLuke() {
  try {
      	/*Esto nos retorna una promesa -> fetch(...), es una tarea 			asincrona*/
    	/*Lo que va hacer await es esperar a que la promesa se 				resuelva y 	el resultado se guardará en la variable response
        */
    const response = await fetch('https://www.swapi.co/api/people/1/')
    const luke = await response.json()
    const responseHomeWorld = await fetch(luke.homeworld)
    luke.homeworld = await responseHomeWorld.json()
    console.log(`${luke.name} nació en ${luke.homeworld.name}`)
  } catch(err) {
    handleError(err)
  }
}


/******************Código traspilado con Babel*********************/

/*Utilizamos la libreria babel-pollyfill y la agregamos dentro de la configuracion de CodePen*/

'use strict';

var getLuke = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response, luke, responseHomeWorld;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch('https://www.swapi.co/api/people/1/');

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            luke = _context.sent;
            _context.next = 9;
            return fetch(luke.homeworld);

          case 9:
            responseHomeWorld = _context.sent;
            _context.next = 12;
            return responseHomeWorld.json();

          case 12:
            luke.homeworld = _context.sent;

            console.log(luke.name + ' naci\xF3 en ' + luke.homeworld.name);
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context['catch'](0);

            handleError(_context.t0);

          case 19:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 16]]);
  }));

  return function getLuke() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function handleError(err) {
  console.log('Request failed: ' + err);
}

getLuke()
