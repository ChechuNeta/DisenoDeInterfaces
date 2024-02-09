function mostrarInstrucciones() {
    // Oculta el contenedor principal
    document.querySelector('.opciones').style.display = 'none';

    // Muestra el contenedor de instrucciones
    document.getElementById('instrucciones').style.display = 'block';
}

function ocultarInstrucciones() {
    // Muestra el contenedor principal
    document.querySelector('.contenedor').style.display = 'grid';

    // Oculta el contenedor de instrucciones
    document.getElementById('instrucciones').style.display = 'none';
}