function mostrarInstrucciones() 
{
    document.querySelectorAll('.contenedor button, .contenedor select').forEach(element => {
        element.style.display = 'none';});

    document.getElementById('instrucciones').style.display = 'block';
    document.getElementById('instruccionesVolver').style.display = 'block';
}

function ocultarInstrucciones() 
{
    document.querySelector('.contenedor h1').style.display = 'block';
    document.querySelectorAll('.contenedor button, .contenedor select').forEach(element => {
        element.style.display = 'block';});

    document.getElementById('instrucciones').style.display = 'none';
    document.getElementById('instruccionesVolver').style.display = 'none';
}

//////////////////////////////////////////////////////////////////////////////////////////

var intervalodesaparecer;
var target = document.getElementById("target");
var juegoIniciado = false;

function Empezarjuego(dificultad)
{
    document.querySelector('.contenedor').style.display = 'none';
    
    target.style.display = 'block';
    reposicionar();
    
   
    if (!juegoIniciado) {
        juegoIniciado = true;
        setTimeout(function () {
            document.querySelector('.contenedor').style.display = 'grid';
            target.style.display = 'none';
            juegoIniciado = false; 
            clearTimeout(intervalodesaparecer);
        }, 20000); 
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
    targetClick();
}

function targetClick()
{
        reposicionar();   
}