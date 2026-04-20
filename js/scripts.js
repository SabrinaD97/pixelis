// Variables

const boutons = document.querySelectorAll('.plus');
const modale = document.querySelector('.modale');

// Boutons cliquables

for (let i = 0; i < boutons.length; i++) {
    const bouton = boutons[i];

    bouton.addEventListener('click', ouvrirModale);
    console.log(boutons);
}

// Fonctions

function ouvrirModale() {
    console.log(modale);
}