function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
    if (menu.classList.contains('service-open')) {
        menu.classList.remove('service-open');
    }
}

function toggleServiceMenu() {
    y = document.getElementById("hamburger-icon");
    y.classList.toggle('service-open');
}

function serviceMenuBack() {
    x = document.getElementById("hamburger-icon");
    x.classList.toggle('service-open');
    x.classList.toggle('open');
}