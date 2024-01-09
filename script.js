let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const descargarBtn = document.getElementById('descargarBtn');

    descargarBtn.addEventListener('click', function () {
        // URL del archivo PDF que deseas descargar
        const pdfUrl = 'CV_Anderson_Sanchez.pdf';

        // Crea un enlace de descarga
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'MiCV.pdf';

        // Simula el clic en el enlace para iniciar la descarga
        link.click();
    });
});


document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('form');

        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Evita que el formulario se envíe de la manera estándar

            // Realiza una solicitud AJAX para enviar el formulario en segundo plano
            const formData = new FormData(form);

            fetch(form.action, {
                method: 'POST',
                body: formData,
            })
            .then(response => response.text())
            .then(data => {
                // Muestra una alerta con el resultado de la solicitud
                alert(data);
                
                // Puedes agregar más lógica aquí según tus necesidades

                // O bien, puedes redirigir al usuario a otra página si lo deseas
                // window.location.href = 'otra_pagina.html';
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
});


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 