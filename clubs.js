const clubs = [
    
    {
        clubImage: "./assets/images/test.jpg",
        clubName: "Club De Scratch",
        clubDesc: "Les élèves apprennent à coder avec Scratch de manière ludique et créative."
    },
    {
        clubImage: "./assets/images/test.jpg",
        clubName: "Club De Robotique",
        clubDesc: "Construire et programmer des robots avec Arduino et autres kits techniques."
    },
    {
        clubImage: "./assets/images/test.jpg",
        clubName: "Club De Théâtre",
        clubDesc: "Un espace pour exprimer la créativité à travers le jeu de rôle et la mise en scène."
    },
    {
        clubImage: "./assets/images/test.jpg",
        clubName: "Club De Scratch",
        clubDesc: "Les élèves apprennent à coder avec Scratch de manière ludique et créative."
    },
    {
        clubImage: "./assets/images/test.jpg",
        clubName: "Club De Robotique",
        clubDesc: "Construire et programmer des robots avec Arduino et autres kits techniques."
    },
    {
        clubImage: "./assets/images/test.jpg",
        clubName: "Club De Théâtre",
        clubDesc: "Un espace pour exprimer la créativité à travers le jeu de rôle et la mise en scène."
    },
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
