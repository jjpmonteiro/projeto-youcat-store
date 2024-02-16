const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal(".hero, .page-header, .feature", {
    origin: "top"
});

ScrollReveal().reveal(".sm-banner, .details", {
    origin: "left"
});

ScrollReveal().reveal(".banner3, .map", {
    origin: "right"
});

ScrollReveal().reveal(".product1, .blog-box, .about-head, .about-app, .form-details, .cart, .cart-add", {
    origin: "bottom"
});