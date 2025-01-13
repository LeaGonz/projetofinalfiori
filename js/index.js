// Evento para fechar o menu ao clicar fora dele
document.addEventListener('click', function (event) {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarCollapse.classList.contains('show') && !navbarToggler.contains(event.target) && !navbarCollapse.contains(event.target)) {
      navbarToggler.click();
    }
  });