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
    const horrairesContainer = document.getElementById('horraires');

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

document.addEventListener("DOMContentLoaded", afficherHorraires);
