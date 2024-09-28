// upload.js

document.addEventListener("DOMContentLoaded", () => {
    // Selecciona el input de tipo file
    const input = document.querySelector('input[type="file"]');
    if (input) {
        // Crea un elemento <p> para mostrar el nombre del archivo seleccionado
        const label = document.createElement('p');
        label.textContent = 'No hay archivo seleccionado.';
        input.insertAdjacentElement('afterend', label);

        // Agrega el evento 'change' para mostrar el nombre del archivo cuando se seleccione uno
        input.addEventListener('change', () => {
            label.textContent = input.files.length > 0 ? 
                `Archivo seleccionado: ${input.files[0].name}` : 
                'No hay archivo seleccionado.';
        });
    } else {
        console.warn('No se encontró el input de tipo file.');
    }

    // Botón de menú móvil
    const menuBtn = document.querySelector('.menu-btn');
    const navlinks = document.querySelector('.nav-links');

    if (menuBtn && navlinks) {
        // Agrega el evento 'click' para alternar el menú móvil
        menuBtn.addEventListener('click', () => {
            navlinks.classList.toggle('mobile-menu');
        });
    } else {
        console.warn('No se encontraron elementos para el menú móvil.');
    }
});
