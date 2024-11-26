// Horraires d'ouverture
console.log("horraires d'ouverture");

const horraires = [
    { jour: "Lundi", horraire: "9h00-18h00" },
    { jour: "Mardi", horraire: "9h00-18h00" },
    { jour: "Mercredi", horraire: "9h00-18h00" },
    { jour: "Jeudi", horraire: "9h00-18h00" },
    { jour: "Vendredi", horraire: "9h00-18h00" },
    { jour: "Samedi", horraire: "9h00-17h00" },
    { jour: "Dimanche", horraire: "Fermé" }
];

function afficherHorraires() {
    const horrairesContainer = document.querySelector('#horraires');

    horrairesContainer.innerHTML = '';

    horraires.forEach((horaire) => {
        const horaireElement = document.createElement('div');
        horaireElement.classList.add('card-text', 'border-top', 'd-flex', 'justify-content-between');

        horaireElement.innerHTML = `
            <div class="text-warning d-inline">
                <i class="bi bi-brightness-high-fill"></i>
                <div class="d-inline text-black">
                    ${horaire.jour}
                </div>
            </div>
            <div>
                ${horaire.horraire}
            </div>
        `;

        horrairesContainer.appendChild(horaireElement);
    });
}

function verifierEtatParHeure(saisieHeure) {
    const statusContainer = document.querySelector('#verifie-heure');
    const currentDate = new Date();
    const currentDay = currentDate.toLocaleDateString('fr-FR', { weekday: 'long' }).charAt(0).toUpperCase() + currentDate.toLocaleDateString('fr-FR', { weekday: 'long' }).slice(1);

    // Vérifier les horaires pour le jour actuel
    const horaireJour = horraires.find(h => h.jour === currentDay);
    const statusElement = document.createElement('div');

    if (horaireJour && horaireJour.horraire !== "Fermé") {
        const [start, end] = horaireJour.horraire.split('-');
        const [startHour, startMinute] = start.split('h').map(Number);
        const [endHour, endMinute] = end.split('h').map(Number);

        const startTime = startHour * 100 + startMinute;
        const endTime = endHour * 100 + endMinute;

        const [inputHour, inputMinute] = saisieHeure.split(':').map(Number);
        const inputTime = inputHour * 100 + inputMinute;

        if (inputTime >= startTime && inputTime <= endTime) {
            statusElement.innerHTML = `<div class="text-success">Le magasin est ouvert à ${saisieHeure}</div>`;
        } else {
            statusElement.innerHTML = `<div class="text-danger">Le magasin est fermé à ${saisieHeure}</div>`;
        }
    } else {
        statusElement.innerHTML = `<div class="text-danger">Fermé</div>`;
    }

    statusContainer.innerHTML = '';
    statusContainer.appendChild(statusElement);
}

document.querySelector("#verifier-btn").addEventListener("click", () => {
    const saisieHeure = document.querySelector("#input-heure").value;
    if (saisieHeure) {
        verifierEtatParHeure(saisieHeure);
    } else {
        alert("Veuillez entrer une heure valide.");
    }
});

document.addEventListener("DOMContentLoaded", afficherHorraires);
