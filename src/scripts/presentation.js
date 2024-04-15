// loading padding effect
window.addEventListener("load", function () {
    document.body.classList.add("loaded");
});

window.toggleMenu = function() {
    var menu = document.getElementById('mobile-menu');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}
