
let hamburger = document.getElementById('hamburger');
let nav = document.querySelector('.nav-menu');
let bar = document.querySelector('.bar');

hamburger.addEventListener('click', function() {
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }});