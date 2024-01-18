document.addEventListener('DOMContentLoaded', function () {
    var btnMenu = document.getElementById('btn-menu');
    var nav = document.querySelector('nav');
    var body = document.body;

    btnMenu.addEventListener('click', function () {
        nav.classList.toggle('active');
        body.classList.toggle('menu-open'); // Adicione ou remova a classe 'menu-open' ao <body>
    });

    var menuItems = document.querySelectorAll('nav ul a');
    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            nav.classList.remove('active');
            body.classList.remove('menu-open'); // Remova a classe 'menu-open' ao clicar em um link do menu
        });
    });
});
