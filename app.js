window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom'
});

sr.reveal('.showcase-left', {
    duration: 2000,
    delay: 1000,
    origin: 'left',
    distance: '300px'
});

sr.reveal('.showcase-right', {
    duration: 2000,
    delay: 1500,
    origin: 'right',
    distance: '300px'
});

sr.reveal('#testimonial div', {
    duration: 2000,
    delay: 2000,
    origin: 'bottom',
});

sr.reveal('.info-left', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.2
});

sr.reveal('.info-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px',
    viewFactor: 0.2
});




$("body").scrollspy({
    target: "#mainNav"
});
$("#mainNav a").on("click", function(e) {
    if (this.hash !== "") {
        e.preventDefault();
        const hash = this.hash;
        // animate
        $("html, body").animate({
                scrollTop: $(hash).offset().top
            },
            900,
            function() {
                window.location.hash = hash;
            }
        );
    }
});