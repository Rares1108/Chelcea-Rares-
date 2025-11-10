// JS pentru pop-up detalii filme

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeBtn = document.querySelector(".close");

    // Informațiile pentru fiecare film
    const filmeInfo = {
        "Citizen Kane": {
            descriere: "Un clasic al cinematografiei despre ascensiunea și declinul unui magnat al presei.",
            recenzie: "★★★★★ 10/10"
        },
        "The Godfather": {
            descriere: "Povestea unei familii mafiote din New York, cu loialitate și trădări.",
            recenzie: "★★★★★ 10/10"
        },
        "Goodfellas": {
            descriere: "Viața reală a gangsterilor din New York, plină de acțiune și dramă.",
            recenzie: "★★★★☆ 9/10"
        },
        "12 Angry Men": {
            descriere: "Un juriu trebuie să decidă soarta unui tânăr acuzat de crimă.",
            recenzie: "★★★★★ 10/10"
        },
        "The Dark Knight": {
            descriere: "Batman luptă cu Jokerul pentru a salva Gotham de haos.",
            recenzie: "★★★★★ 10/10"
        },
        "Gladiator": {
            descriere: "Un general roman devine gladiator pentru a se răzbuna pe împăratul corupt.",
            recenzie: "★★★★☆ 9/10"
        },
        "The Matrix": {
            descriere: "Realitatea este doar o iluzie; un hacker descoperă adevărul ascuns.",
            recenzie: "★★★★★ 10/10"
        },
        "Casino Royale": {
            descriere: "James Bond trebuie să înfrunte un criminal internațional la un joc de poker.",
            recenzie: "★★★★☆ 9/10"
        },
        "Fight Club": {
            descriere: "Un bărbat nemulțumit de viața sa creează un club secret de lupte.",
            recenzie: "★★★★★ 10/10"
        },
        "Shutter Island": {
            descriere: "Un detectiv investighează dispariția unei paciente dintr-un spital psihiatric.",
            recenzie: "★★★★☆ 9/10"
        },
        "Inception": {
            descriere: "Un hoț intră în vise pentru a fura sau planta idei.",
            recenzie: "★★★★★ 10/10"
        },
        "Black Swan": {
            descriere: "O balerină luptă cu presiunea perfecțiunii și propria minte.",
            recenzie: "★★★★☆ 9/10"
        },
        "Forrest Gump": {
            descriere: "Povestea unui om simplu care traversează momente importante din istoria Americii.",
            recenzie: "★★★★★ 10/10"
        },
        "The Pursuit of Happyness": {
            descriere: "Un tată luptă pentru a-și construi o viață mai bună pentru fiul său.",
            recenzie: "★★★★★ 10/10"
        },
        "Moonlight": {
            descriere: "Viața unui tânăr afro-american și căutarea identității sale.",
            recenzie: "★★★★☆ 9/10"
        }
    };

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const filmName = card.querySelector("h3").textContent;
            modalTitle.textContent = filmName;
            modalDescription.innerHTML = `
                <strong>Descriere:</strong> ${filmeInfo[filmName].descriere} <br>
                <strong>Recenzie:</strong> ${filmeInfo[filmName].recenzie}
            `;
            modal.style.display = "block";
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
