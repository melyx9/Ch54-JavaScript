document.addEventListener('DOMContentLoaded', function() {
    const saludoElement = document.getElementById('saludo');
    const cambiarNombreBtn = document.getElementById('cambiarNombreBtn');
    
    cambiarNombreBtn.addEventListener('click', function() {

        const nuevoNombre = prompt('¿Cuál es tu nombre?');
        
        // Si el usuario ingresó un nombre (no canceló el prompt)
        if (nuevoNombre !== null && nuevoNombre.trim() !== '') {
            // Actualizamos el texto del saludo
            saludoElement.textContent = `Hola ${nuevoNombre}`;
        }
    });
});