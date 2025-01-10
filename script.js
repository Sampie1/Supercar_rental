// Opties voor ScrollReveal
const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

const sr = ScrollReveal();

// Elementen voor de ScrollReveal
sr.reveal(".header__container h1", {
    ...scrollRevealOption,
});

sr.reveal(".header__container form", {
    ...scrollRevealOption,
    delay: 500,
});

sr.reveal(".header__container img", {
    ...scrollRevealOption,
    delay: 1000,
});
