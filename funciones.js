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