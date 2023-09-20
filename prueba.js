// Obtén una referencia al botón "Iniciar Sesión"
const iniciarSesionBtn = document.getElementById('iniciarSesionBtn');

// Agrega un manejador de eventos de clic al botón
iniciarSesionBtn.addEventListener('click', function() {
    // Redirige a la vista "../Sidebar/Main.html"
    window.location.href = '../Sidebar/Main.html';
});
