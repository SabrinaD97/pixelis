// Variables

const boutons = document.querySelectorAll('.plus');
const modale = document.querySelector('.modale');

// Boutons cliquables

for (let i = 0; i < boutons.length; i++) {
    const bouton = boutons[i];

    bouton.addEventListener('click', ouvrirModale);
}

// Fonctions

function ouvrirModale() {
    const text = document.createElement('p');
    text.innerText = 'Fin';
    text.classList.add('fenetre');

    modale.appendChild(text);
    modale.classList.add('visible');

    // Fermer modale
    
    text.addEventListener('click', fermerModale);
}

function fermerModale(event) {
    modale.removeChild(event.currentTarget);
    modale.classList.remove('visible');
}