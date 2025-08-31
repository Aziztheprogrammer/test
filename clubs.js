const clubs = [
    
    {
        clubImage: "./assets/images/club-scratch.jpg",
        clubName: "Club De Scratch",
        clubDesc: "Un atelier ludique où les élèves apprennent la programmation créative en réalisant des jeux, des histoires interactives et des animations, tout en développant logique et créativité."
    },
    {
        clubImage: "./assets/images/club-robotique.jpg",
        clubName: "Club De Robotique",
        clubDesc: "Un lieu d’innovation où les élèves découvrent la programmation, l’électronique et la mécanique, tout en développant leur esprit scientifique et leur sens du travail collaboratif."
    },
    {
        clubImage: "./assets/images/club-theatre.jpg",
        clubName: "Club De Théâtre",
        clubDesc: "Un espace d’expression et de créativité où nos élèves développent confiance, imagination et esprit d’équipe à travers des ateliers et des représentations artistiques."
    },
    {
        clubImage: "./assets/images/club-scratch.jpg",
        clubName: "Club De Scratch",
        clubDesc: "Un atelier ludique où les élèves apprennent la programmation créative en réalisant des jeux, des histoires interactives et des animations, tout en développant logique et créativité."
    },
    {
        clubImage: "./assets/images/club-robotique.jpg",
        clubName: "Club De Robotique",
        clubDesc: "Un lieu d’innovation où les élèves découvrent la programmation, l’électronique et la mécanique, tout en développant leur esprit scientifique et leur sens du travail collaboratif."
    },
    {
        clubImage: "./assets/images/club-theatre.jpg",
        clubName: "Club De Théâtre",
        clubDesc: "Un espace d’expression et de créativité où nos élèves développent confiance, imagination et esprit d’équipe à travers des ateliers et des représentations artistiques."
    }
]

const clubsSection = document.getElementById("clubs-section");

    clubs.forEach((club, index) => {
        const clubCard = document.createElement("div");
        clubCard.className = `club-${index + 1} club`;

        const imageDiv = document.createElement("div");
        imageDiv.className = "club-image";

        const img = document.createElement("img");
        img.src = club.clubImage;
        img.alt = "Club Image";

        imageDiv.appendChild(img);

        const descDiv = document.createElement("div");
        descDiv.className = "club-desc";

        const title = document.createElement("h2");
        title.textContent = club.clubName;

        const desc = document.createElement("p");
        desc.textContent = club.clubDesc;

        descDiv.appendChild(title);
        descDiv.appendChild(desc);

        clubCard.appendChild(imageDiv);
        clubCard.appendChild(descDiv);

        clubsSection.appendChild(clubCard);
    });

let tl2 = gsap.timeline({
    scrollTrigger : {
        trigger: '#clubs-section',
    },
})

tl2.to('.club', {
    opacity: 1,
    ease: "power4.inOut",
    stagger: 0.5,
    duration: 1,
})
