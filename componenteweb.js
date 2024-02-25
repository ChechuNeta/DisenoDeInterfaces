class ImagenGenerada extends HTMLElement {
    constructor() {
        super();
        // Crear un Shadow DOM para el encapsulamiento
        this.attachShadow({ mode: 'open' });
        // Establecer el contenido del Shadow DOM
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    position: absolute;
                    display: none;
                }
            </style>
            <img id="imagen" alt="Imagen generada">
        `;
    }

    connectedCallback() {
        // Agregar evento de clic al componente
        this.addEventListener('click', this.generarImagen.bind(this));
    }

    generarImagen(event) {
        // Obtener la posición del clic
        const x = event.clientX;
        const y = event.clientY;

        // Obtener la ruta de la imagen del atributo 'src'
        const rutaImagen = this.getAttribute('src');

        // Configurar la posición de la imagen
        const imagen = this.shadowRoot.querySelector('img');
        imagen.src = rutaImagen;
        imagen.style.left = x + 'px';
        imagen.style.top = y + 'px';

        // Mostrar la imagen
        this.style.display = 'block';

        // Opcional: Puedes establecer un tiempo para ocultar la imagen después de cierto tiempo
        setTimeout(() => {
            this.style.display = 'none';
        }, 3000); // Ocultar después de 3 segundos (3000 milisegundos)
    }
}

// Registrar el componente personalizado
customElements.define('imagen-generada', ImagenGenerada);