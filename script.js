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

//Optie functie voor steden
function updateSteden(){
    const steden = {
        "drenthe": ["Assen", "Emmen", "Hoogeveen", "Meppel"],
        "flevoland": ["Almere", "Lelystad", "Dronten", "Zeewolde"],
        "friesland": ["Leeuwarden", "Sneek","Drachten", "Harlingen"],
        "gelderland": ["Arnhem", "Nijmegen", "Apeldoorn", "Ede"],
        "groningen": ["Groningen", "Delfzijl", "Winsum", "Veendam"],
        "limburg": ["Maastricht", "Venlo", "Roermond", "Heerlen"],
        "noord-brabant": ["Eindhoven", "Tilburg", "'s-Hertogenbosch", "Breda"],
        "noord-holland": ["Amsterdam", "Haarlem", "Alkmaar", "Hoorn"],
        "overijssel": ["Zwolle", "Enschede", "Deventer", "Almelo"],
        "utrecht": ["Utrecht", "Amersfoort", "Zeist", "Nieuwegein"],
        "zeeland": ["Middelburg", "Vlissingen", "Goes", "Terneuzen"],
        "zuid-holland": ["Rotterdam", "Den Haag", "Leiden", "Delft"]
    };
    let provincie = document.getElementById("provincie").value;
    let stadSelect = document.getElementById("stad");

    //leeg maken van huidige opties
    stadSelect.innerHTML = '<option value="">-- Selecteer een stad --</option>';

    //toevoegen van nieuwe opties als er een geldige provincie is gekozen
    if (provincie in steden) {
        steden [provincie].forEach(stad => {
            let option = document.createElement("option");
            option.value = stad.toLowerCase();
            option.textContent = stad;
            stadSelect.appendChild(option);
        });
    }
}