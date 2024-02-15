function mostrarInstrucciones() 
{
    document.querySelectorAll('.contenedor button, .contenedor select').forEach(element => {
        element.style.display = 'none';});

    document.getElementById('instrucciones').style.display = 'block';
    document.getElementById('instruccionesVolver').style.display = 'block';
}

function ocultarInstrucciones() 
{
    puntuacion = 0;
    document.querySelector('.contenedor').style.display = 'grid';
    document.querySelector('.contenedor h1').style.display = 'block';
    document.querySelectorAll('.contenedor button, .contenedor select').forEach(element => {
        element.style.display = 'block';});

    document.getElementById('pantallafinal').style.display = 'none';
    document.getElementById('instrucciones').style.display = 'none';
    document.getElementById('instruccionesVolver').style.display = 'none';
    document.getElementById('pantallafinal').removeChild(document.getElementById("puntos"));
}

//////////////////////////////////////////////////////////////////////////////////////////

var intervalodesaparecer;
var target = document.getElementById("target");
var fondo = document.getElementById("fondo");
var juegoIniciado = false;
var puntuacion = 0;
let clicks = 0;

function Empezarjuego(dificultad)
{
    document.querySelector('.contenedor').style.display = 'none';
    
    target.style.display = 'block';
    reposicionar();
    
    
    if (!juegoIniciado) {
        juegoIniciado = true;
        setTimeout(function () {
            
            document.getElementById('pantallafinal').style.display = 'grid';

            puntos = document.createElement("p");
            puntos.textContent= "Puntos: "+puntuacion;
            puntos.style.grid_row= "1/2"; 
            puntos.id="puntos";
            botonvolver = document.getElementById("pantallafinalvolver");
            document.getElementById("pantallafinal").insertBefore(puntos, botonvolver);

            target.style.display = 'none';
            juegoIniciado = false; 
            clearTimeout(intervalodesaparecer);
        }, 5000); 
    }
    
}

function reposicionar() 
{
    let posicionx = Math.round(Math.random() * 95);
    let posiciony = Math.round(Math.random() * 95);
    let tamaño = randomIntFromInterval(12, 40);

    // Mostrar el target y establecer su posición y tamaño
    target.style.display = 'block';
    target.style.left = posicionx + "%";
    target.style.top = posiciony + "%";
    target.style.width = tamaño + "px";
    target.style.height = tamaño + "px";

    // Limpiar el temporizador anterior (si existe)
    clearTimeout(intervalodesaparecer);

    // Configurar el nuevo temporizador para reposicionar el target después de 2 segundos si no es pulsado
    intervalodesaparecer = setTimeout(function () {
        reposicionar();
    }, 2000);
   
}
function randomIntFromInterval(min,max)
{
    return Math.floor( Math.random()*  ( max - min + 1 ) + min );
}

target.onmousedown = function() 
{
    aciertoclick();
}

fondo.onmousedown = function() 
{
    falloclick();
}

function aciertoclick()
{
    if (juegoIniciado)
    {
        puntuacion +=1;
        clicks +=1;
        reposicionar();  
    }        
}

function falloclick()
{
    if (juegoIniciado)
    {
        clicks +=1;     
    }        
}