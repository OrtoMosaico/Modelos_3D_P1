// script.js

// Función para obtener parámetros de la URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Obtener el parámetro de la URL que especifica el modelo
    const modelName = getQueryParam('model');

    if (modelName) {
        // Construir la URL del archivo basado en el nombre del modelo
        const modelURL = `https://ortomosaico.github.io/Modelos_3D_P1/${modelName}.glb`;

        // Obtener el elemento model-viewer
        const modelViewer = document.querySelector('#modelViewer');
        
        // Establecer el atributo src usando la URL construida
        modelViewer.src = modelURL;
    } else {
        console.error('No se especificó el nombre del modelo en la URL.');
    }
});
