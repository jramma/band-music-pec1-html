
window.addEventListener('scroll', function() {
    var middle = window.innerHeight / 2;
    var elements = document.querySelectorAll('.text li');

    elements.forEach(function(element) {
        var rect = element.getBoundingClientRect();

        if(rect.top <= middle && rect.bottom >= middle) {
            element.style.color = '#fca41e';
        } else {
            element.style.color = 'white';
        }
    });
});