window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.8)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'linear-gradient(to right, #1e3c72, #2a5298)';
        navbar.style.boxShadow = 'none';
    }
});
