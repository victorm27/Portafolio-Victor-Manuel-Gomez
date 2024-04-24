// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
const navMenu = document.querySelector('.nav-menu');
const navToggle = document.querySelector('.nav-toggle');

document.addEventListener('DOMContentLoaded', function() {
    let typed = new Typed(".text", {
        strings: ["Desarrollador Backend", "Desarrollador Frontend", "Desarrollador Fullstack"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    }
    );
});



// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


navToggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
  });
window.onscroll = () => {
// Sticky Header
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
const scrollPosition = window.pageYOffset;

if (scrollPosition > headerHeight) {
  header.classList.add('sticky');
} else {
  header.classList.remove('sticky');
}

// Remove toggle icon and navbar when click navbar links (scroll)
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navbar = document.querySelector('.navbar');
    navbar.classList.remove('show');
    navToggle.classList.remove('active');
  });
});

// Animation footer on scroll
const footer = document.querySelector('footer');
const footerHeight = footer.offsetHeight;
const windowHeight = window.innerHeight;
const scrollFromBottom = document.documentElement.scrollHeight - window.pageYOffset - windowHeight;

if (scrollFromBottom < footerHeight) {
  footer.classList.add('animate');
} else {
  footer.classList.remove('animate');
}
};