jQuery(function ($) {
  $(".sidebar-dropdown > a").click(function () {
    $(".sidebar-submenu").slideUp(200);
    if ($(this).parent().hasClass("active")) {
      $(".sidebar-dropdown").removeClass("active");
      $(this).parent().removeClass("active");
    } else {
      $(".sidebar-dropdown").removeClass("active");
      $(this).next(".sidebar-submenu").slideDown(200);
      $(this).parent().addClass("active");
    }
  });

  $("#close-sidebar").click(function () {
    $(".page-wrapper").removeClass("toggled");
  });
  $("#show-sidebar").click(function () {
    $(".page-wrapper").addClass("toggled");
  });
});

   // Obtén los elementos del menú y el contenido
   const menuItems = document.querySelectorAll('#menu .nav-link');
   const contentItems = document.querySelectorAll('.content');

   // Agrega un controlador de clic a cada elemento del menú
   menuItems.forEach((menuItem) => {
       menuItem.addEventListener('click', (e) => {
           // Evita que el enlace siga su curso normal
           e.preventDefault();

           // Oculta todos los contenidos y elimina la clase "active" de todos los elementos del menú
           contentItems.forEach((contentItem) => {
               contentItem.style.display = 'none';
           });
           menuItems.forEach((item) => {
               item.classList.remove('active');
           });

           // Obtiene el valor del atributo data-target del elemento del menú
           const target = menuItem.getAttribute('data-target');

           // Muestra el contenido correspondiente y agrega la clase "active" al elemento del menú
           document.getElementById(target).style.display = 'block';
           menuItem.classList.add('active');
       });
   });



