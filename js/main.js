// animación al cargar la página con GSAP
const tl = gsap.timeline({defaults: {duration: 1}});
tl
    .to(".nav-logo:first-child img", {y: 0})
    .to(".navbar .btn", {y: 0, stagger: 0.2})
    .to(".nav-logo:last-child img", {y: 0})
    .to(".textBox, .imgBox", {x: 0, stagger: 0.2}, 2.2) // empieza con un delay de 2.2 segundos.
    .to(".textBox, .imgBox .img", {opacity: 1, stagger: 0.2}, "<") // empieza junto con la animación previa.


// animación parallax en el home con Scroll Trigger de GSAP
const parallax = gsap.timeline();
parallax
    .fromTo(".stars", {x: -250}, {x: 250})
    .to(".moon", {y: 100}, "<")
    .fromTo(".shadow", {scale: 0.8}, {scale: 0.9}, "<")
    .to(".building", {scale: 0.8}, "<")
    .to(".smoke", {y: 50}, "<")

ScrollTrigger.create({
    animation: parallax,
    trigger: "#home",
    start: "top 0%",
    end: "bottom 0%",
    scrub: 1
});


// texto animado con typed.js
const typed = new Typed(".typing", { 
    strings: ["Martín Sepúlveda", "Un Desarrollador Full Stack Jr."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


// función del botón scroll
const scrollBtn = document.querySelector(".scroll-up__btn");
scrollBtn.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


window.addEventListener("scroll", function() {
    // animación en los <li> <a>s activos
    var current = '';
    const sections = document.querySelectorAll("section, footer");
    sections.forEach(section => { // recorre todas las secciones una por una.
        window.scrollY >= (section.offsetTop - 60)?
        // a la posición de la sección actual le resto la altura del header, que es 60px.
        // ¿la posición inicial es mayor o igual a la posición de la sección actual?.
            (current = section.getAttribute("id")): // si es así se guarda la id de la sección actual.
            (null); // si no no hace nada.
    });
    const links = document.querySelectorAll(".navbar .nav-item:not(:last-child) .btn");
    links.forEach(link => { // recorre todos los links uno por uno.
        link.classList.contains(current)? // ¿el link contiene una clase con el mismo nombre que el id de la sección actual?
            (link.classList.add("btn-primary"),
            link.classList.remove("btn-secondary")): // si es así se le agrega la clase "active".
            (link.classList.remove("btn-primary"),
            link.classList.add("btn-secondary")); // si no se le quita.
    });
    
    
    // animación del cartel con las redes sociales y botón scroll
    const bottom = document.querySelector(".navbar-bottom");
    current != "home"? // ¿la sección actual es cualquiera excepto la principal?
        (bottom.setAttribute("style", "--translateY: 0;")): // si es así se muestra el cartel con las redes sociales y el botón scroll...
        (bottom.removeAttribute("style")); // si no se oculta el cartel con las redes sociales y el botón scroll....
});