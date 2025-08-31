const nextButton = document.querySelector("button.next")
const prevButton = document.querySelector("button.prev")
const testimonialsContainer = document.querySelector(".testimonials-carousel")

nextButton.addEventListener("click", (target) => {
    testimonialsContainer.scrollBy({
        left: 330,
        top: 0,
        behavior: "smooth"
    })
})

prevButton.addEventListener("click", (target) => {
    testimonialsContainer.scrollBy({
        left: -330,
        top: 0,
        behavior: "smooth"
    })
})

const screenLoader = document.querySelector(".screen-loader");

setTimeout(() => {
    screenLoader.style.display = "none";
}, 2000)

const heroPictures = [
    "./assets/images/hero-0.jpg",
    "./assets/images/hero-1.jpg",
    "./assets/images/hero-2.jpg"
]

const heroSection = document.querySelector("main");

var i = 0;
setInterval(function() {
      heroSection.style.backgroundImage = "url(" + heroPictures[i] + ")";
      i = i + 1;
      if (i == heroPictures.length) {
        i =  0;
      }
}, 5000);


const activities = [

    {
        activityName: "Des Clubs Variés",
        activityDesc: "Notre école offre plusieurs clubs qui encouragent les élèves à découvrir leurs talents, partager leurs passions et renforcer l’esprit d’équipe."
    },
    {
        activityName: "Cours Supplémentaires",
        activityDesc: "Notre école propose aussi des cours supplémentaires pour aider les élèves à renforcer leurs acquis et progresser à leur rythme."
    },
    {
        activityName: "Cours En Anglais & Français",
        activityDesc: "Notre école organise des cours de langue pour enrichir les compétences des élèves et favoriser l’ouverture sur le monde."
    },
    {
        activityName: "Cours En Informatique",
        activityDesc: "Notre école propose des cours d’informatique pour initier les élèves aux outils numériques et développer leurs compétences technologiques."
    }
]

const activitySection = document.getElementById("activities-section");

activities.forEach(activity => {
    const card = document.createElement("div");
    card.className = "activity-card";

    const title = document.createElement("div");
    title.className = "activity-title";
    title.textContent = activity.activityName;

    const desc = document.createElement("div");
    desc.className = "activity-description";
    desc.textContent = activity.activityDesc;

    card.appendChild(title);
    card.appendChild(desc);

    activitySection.appendChild(card);
});

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
    }
]

const clubsSection = document.getElementById("clubs-section");

    clubs.forEach((club, index) => {
        if (index > 2) return;

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


const profs = [
    
    {
      image: "./assets/images/prof-1.jpg",
      name: "Mme Emna",
      tag: "Directrice"
    },
    {
      image: "./assets/images/prof-2.jpg",
      name: "Mme Amina Ben Ali",
      tag: "Enseignante de Mathématiques"
    },
    {
      image: "./assets/images/prof-3.jpg",
      name: "Mme Karima Trabelsi",
      tag: "Professeur de Physique"
    },
    {
      image: "./assets/images/prof-4.jpg",
      name: "Mme Salma Ferchichi",
      tag: "Enseignante de Français"
    }

]

const profsSection = document.getElementById("profs-section");

profs.forEach(prof => {
    const profCard = document.createElement("div");
    profCard.className = "prof";

    const img = document.createElement("img");
    img.src = prof.image;
    img.alt = prof.name;

    const infoDiv = document.createElement("div");
    infoDiv.className = "prof-info";
    infoDiv.textContent = prof.name;

    const smallTag = document.createElement("small");
    smallTag.textContent = prof.tag;

    infoDiv.appendChild(document.createElement("br"));
    infoDiv.appendChild(smallTag);

    profCard.appendChild(img);
    profCard.appendChild(infoDiv);

    profsSection.appendChild(profCard);
});

const testimonials = [
    
    {
      clientImage: "",
      testimonial: "Une école à l’écoute des élèves, avec un encadrement très professionnel !!",
      clientName: "Francis Towe",
      clientTag: "Parent"
    },
    {
      clientImage: "",
      testimonial: "Les enseignants sont très impliqués et disponibles.",
      clientName: "Sonia Ben Amar",
      clientTag: "Parent"
    },
    {
      clientImage: "",
      testimonial: "Ambiance très conviviale et équipements modernes.",
      clientName: "Mourad Salah",
      clientTag: "Parent"
    },
    {
      clientImage: "",
      testimonial: "Un cadre idéal pour l’apprentissage et le développement personnel.",
      clientName: "Nadia Ben Youssef",
      clientTag: "Parent"
    },
    {
      clientImage: "",
      testimonial: "Une école à l’écoute des élèves, avec un encadrement très professionnel !!",
      clientName: "Francis Towe",
      clientTag: "Parent"
    },
    {
      clientImage: "",
      testimonial: "Les enseignants sont très impliqués et disponibles.",
      clientName: "Sonia Ben Amar",
      clientTag: "Parent"
    },
    {
      clientImage: "",
      testimonial: "Ambiance très conviviale et équipements modernes.",
      clientName: "Mourad Salah",
      clientTag: "Parent"
    },
    {
      clientImage: "",
      testimonial: "Un cadre idéal pour l’apprentissage et le développement personnel.",
      clientName: "Nadia Ben Youssef",
      clientTag: "Parent"
    }

]

const testimonialsSection = document.getElementById("testimonials-section");

  testimonials.forEach(item => {
    const testimonialDiv = document.createElement("div");
    testimonialDiv.className = "testimonial";

    const quoteIcon = document.createElement("i");
    quoteIcon.className = "fa-solid fa-quote-left";

    const contentP = document.createElement("p");
    contentP.className = "test-content";
    contentP.textContent = item.testimonial;

    const clientInfoDiv = document.createElement("div");
    clientInfoDiv.className = "client-info";

    const img = document.createElement("img");

    if (item.clientImage == "") {
        img.src = "assets/images/inconnu.png";
    } else {
        img.src = item.clientImage;
    }
    img.alt = item.clientName;

    const clientDetailsDiv = document.createElement("div");
    clientDetailsDiv.textContent = item.clientName;

    const clientTagSmall = document.createElement("small");
    clientTagSmall.textContent = item.clientTag;

    clientDetailsDiv.appendChild(document.createElement("br"));
    clientDetailsDiv.appendChild(clientTagSmall);

    clientInfoDiv.appendChild(img);
    clientInfoDiv.appendChild(clientDetailsDiv);

    testimonialDiv.appendChild(quoteIcon);
    testimonialDiv.appendChild(contentP);
    testimonialDiv.appendChild(clientInfoDiv);

    testimonialsSection.appendChild(testimonialDiv);
});

const aboutSagesse = {
    desc: "",
    stats : [
        {
            num: 200,
            par: "Eléves Qui Ont Essayé Sgaesse",
        },
        
        {
            num: 7,
            par: "Profs Expérimentés",
        },

        {
            num: 10,
            par: "Clubs Pour Une Variété D'Activitées",
        },
    ],
    socialLinks: {
        facebookLink: "https://www.facebook.com/p/Sagesse-100063761066200/",
        instagramLink: "https://www.instagram.com/sagesse_s_s_scolaire/",
    }
}

const statsSection = document.querySelector("section.stats")

aboutSagesse.stats.forEach((stat, index) => {
    const statCard = document.createElement("div");
    statCard.classList.add(`stat-${index + 1}`);

    const statNum = document.createElement("span");
    statNum.textContent = 0
    statCard.appendChild(statNum)

    const statDesc = document.createElement("p");
    statDesc.textContent = stat.par;
    statCard.appendChild(statDesc);

    statsSection.appendChild(statCard);
})

// Stats Animation
const stats = document.querySelectorAll("section.stats > div span");

let statsAnimation = function () {
    const targetPosition = statsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    let inView = false;

    if (targetPosition < windowHeight) {
        inView = true;

        stats.forEach((stat, index) => {

            let statsCounter = setInterval(() => {
                let number = parseInt(stat.textContent);
                stat.textContent = `+${number + 1}`;

                if (number == aboutSagesse.stats[index].num - 1) {
                    clearInterval(statsCounter)
                }
            }, 2000 / aboutSagesse.stats[index].num)
        })
    }
    if (inView) {
        window.removeEventListener('scroll', statsAnimation);
    }    
}

window.addEventListener('scroll', statsAnimation)

const playButton = document.querySelector("section.a-propos-sagesse .play-button")
const aboutVideo = document.querySelector('section.a-propos-sagesse .video video');

playButton.addEventListener("click", (e) => {
    aboutVideo.play().then(() => {
        playButton.style.display = "none";
        aboutVideo.controls = true;
    });
});

const facebookLinks = document.querySelectorAll(".facebook-link");
const instagramLinks = document.querySelectorAll(".instagram-link");

facebookLinks.forEach((link) => {
    link.href = aboutSagesse.socialLinks.facebookLink;
    link.target = "_blank";
})

instagramLinks.forEach((link) => {
    link.href = aboutSagesse.socialLinks.instagramLink;
    link.target = "_blank";
})

let tl1 = gsap.timeline({
    scrollTrigger : {
        trigger: '#activities-section',
    },
})

if (window.innerWidth < 769) {
    tl1.to('.activity-card', {
        x: 0,
        ease: "back.out",
        stagger: 0.5,
        duration: 1,
    })
} else {
    tl1.to('.activity-card', {
        scale: 1,
        ease: "bounce.out",
        stagger: 0.3,
        duration: 0.5,
    })
}


let tl2 = gsap.timeline({
    scrollTrigger : {
        trigger: '#clubs-section',
    },
})

tl2.to('.club', {
    opacity: 1,
    ease: "power4.inOut",
    stagger: 0.75,
    duration: 1,
})

let tl3 = gsap.timeline({
    scrollTrigger : {
        trigger: '#profs-section',
    },
})

tl3.to('.prof', {
    opacity: 1,
    ease: "power4.inOut",
    stagger: 0.75,
    duration: 1,
})

let tl4 = gsap.timeline({
    scrollTrigger : {
        trigger: '#testimonials-section',
    },
})

tl4.to('.testimonial', {
    opacity: 1,
    ease: "power4.inOut",
    stagger: 0.75,
    duration: 1,
})


function emailSend() {
 let parms = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('sujet').value,
 }

emailjs.send("service_4sf1bk7", "template_12qbtll", parms).then(
    alert(email)
)

}

document.querySelector("#submit").onclick = emailSend;