
// Developed by: Nicolás Cabrera Rodríguez

const CANVAS = document.getElementById('lienzo'); // Obtenemos el lienzo

const GENERADOR = document.getElementById('generador'); // Obtenemos el botón

CANVAS.width = window.innerWidth; // Obtenemos el ancho de la pantalla

CANVAS.height = window.innerHeight; // Obtenemos el alto de la pantalla

const CTX = CANVAS.getContext('2d'); // Obtenemos el contexto del lienzo

let curva = 10; // Variable que guarda el valor de la curva

let curva2 = 0; // Variable que guarda el valor de la curva2


// Funciones

// Funcion que dibuja el arbol
function dibujarArbol(inicioX, inicioY,linea, angulo, anchoRama, color1, color2 ){ 

  CTX.beginPath(); // Iniciamos el trazado
  CTX.save(); // Guardamos el estado del trazado
  CTX.shadowBlur = 15; // Añadimos una sombra
  CTX.shadowColor = '#000'; // Color de la sombra
  CTX.strokeStyle = color1; // Color del trazado
  CTX.fillStyle = color2; // Color de la relleno
  CTX.lineWidth = anchoRama; // Ancho de la linea
  CTX.translate(inicioX, inicioY); // Transladamos el punto de inicio
  CTX.rotate(angulo * Math.PI / 180); // Rotamos el punto de inicio
  CTX.moveTo(0,0); // Movemos el punto de inicio


  if(angulo > 0){ // Si el angulo es mayor que 0

    CTX.bezierCurveTo(curva, -linea/2, curva2, -linea/2, 0, -linea); // Dibujamos la curva

  }else{ // Si no...

    CTX.bezierCurveTo(curva, -linea/2, -curva2, -linea/2, 0, -linea); // Dibujamos la curva

  };

  CTX.stroke(); // Dibujamos la linea

  if(linea < 5){ // Si la linea es menor que 5...

    CTX.beginPath(); // Iniciamos el trazado

    CTX.arc(0, -linea, 10, 0, Math.PI/2); // Dibujamos el arco

    CTX.fill(); // Rellenamos el arco

    CTX.restore(); // Restauramos el estado del trazado

    return; // Terminamos la funcion

  };


  dibujarArbol(0, -linea, linea * 0.75, angulo + curva , anchoRama * 0.6); // Llamamos a la funcion

  dibujarArbol(0, -linea, linea * 0.75, angulo - curva , anchoRama * 0.6); // Llamamos a la funcion

  CTX.restore(); // Restauramos el estado del trazado

};

dibujarArbol(CANVAS.width / 2, CANVAS.height - 80, 120, 0, 25, '#458f', '#597'); // Llamamos a la funcion

 // Funcion que genera el arbol
function generarArbol(){

  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height); // Limpiamos el lienzo

  let centroPuntoX = CANVAS.width / 2; // Obtenemos el centro del punto X

  let linea = Math.floor((Math.random() * 20) + 100); // Obtenemos un valor aleatorio de la linea

  let angulo = 0; // Obtenemos un valor del angulo

  let anchoRama = (Math.random() * 140) + 1; // Obtenemos un valor aleatorio del ancho de la rama

  let color1 = '#' + Math.floor(Math.random() * 16777215).toString(16); // Obtenemos un valor aleatorio del color1

  let color2 = '#' + Math.floor(Math.random() * 16777215).toString(16); // Obtenemos un valor aleatorio del color2

  GENERADOR.style.background = color1; // Cambiamos el color del botón

  curva = (Math.random() * 20) + 2; // Obtenemos un valor aleatorio de la curva

  curva2 = Math.random() * 50; // Obtenemos un valor aleatorio de la curva2

  dibujarArbol(centroPuntoX, CANVAS.height - 80, linea,angulo, anchoRama, color1, color2); // Llamamos a la funcion
};



GENERADOR.addEventListener('click', generarArbol); // Añadimos un evento al botón


