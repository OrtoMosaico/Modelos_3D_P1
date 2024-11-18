document.addEventListener('DOMContentLoaded', () => {
    // Intentar seleccionar y eliminar el logo
    const logo = document.querySelector('.svelte-19kzapj');
    if (logo) {
        logo.remove();
        console.log('Logo eliminado exitosamente.');
    } else {
        console.log('No se encontró el logo.');
    }
});
