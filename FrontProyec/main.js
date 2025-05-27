// cambiar los estilos navbar del scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0) /*  el cero es la distancia que debe esperar para que funcione luego del scroll */
})


// show/hide preguntas y respuestas

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle('open');
        // cambiar de icono
        const icon =faq.querySelector(".faq_icon i");
        if(icon.className === 'bi bi-plus') {
            icon.className = 'bi bi-dash'
        } else {
            icon.className = 'bi bi-plus'
        }
    })
})


