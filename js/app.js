

// Eventos  
document.addEventListener("DOMContentLoaded", obtenerDatos);

function obtenerDatos(){

    const ApiKey = "83kxfShQur9OJ3eghHjENelBgc5r4IREHRFzWl5K"

    fetch(`https://api.nasa.gov/planetary/apod?api_key=${ApiKey}`)
        .then(resultado => resultado.json())
        .then(datos => mostrarHTML(datos))
        .catch(error => console.log(error))
}


function mostrarHTML(datos){
    const contenido = document.querySelector(".contenido");
    const {title, url, explanation, date, copyright} = datos;

    contenido.innerHTML = `
        <h2 class="title">${title}</h2>
        <span class="date">${date}</span>
        <p class="description">${explanation}</p>
        <div class="img-contenedor">
            <img class="img-universo" src="${url}" alt="Universo" >  
        </div>
        <footer>
            <p class="copyright">${copyright}</p>
        </footer>
    `
}

