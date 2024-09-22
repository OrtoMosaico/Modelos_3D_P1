// script.js

// Función para obtener parámetros de la URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Obtener los parámetros de la URL: nombre del modelo y token
    const modelName = getQueryParam('model');
    const token = getQueryParam('token');

    if (modelName && token) {
        // Construir la URL del archivo en Firebase Storage basado en el nombre del modelo y el token
        const modelURL = `https://firebasestorage.googleapis.com/v0/b/prueba-2-dc1d2.appspot.com/o/${encodeURIComponent(modelName)}?alt=media&token=${token}`;

        // Obtener el elemento model-viewer
        const modelViewer = document.querySelector('#modelViewer');
        
        // Establecer el atributo src usando la URL construida
        modelViewer.src = modelURL;
    } else {
        console.error('Faltan el nombre del modelo o el token en la URL.');
    }
});
