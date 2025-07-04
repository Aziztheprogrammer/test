let services = [
    {
        serviceName : "Website Developement",
        serviceDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet consectetur incididunt ut labore et dolore magna ali",
        tags : ["Coding", "Developement"]
    },
    {
        serviceName : "Website Optimization",
        serviceDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet consectetur incididunt ut labore et dolore magna ali",
        tags : ["Coding", "Developement"]
    },
    {
        serviceName : "Website Design",
        serviceDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet consectetur incididunt ut labore et dolore magna ali",
        tags : ["Coding", "Developement"]
    }
]

let testimonials = [
    {
        clientName: "Lorem Ipsum",
        clientTitle: "Lorem Ipsum",
        clientImage: "",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet consectetur incididunt ut labore et dolore magna ali",
        rating: 5,
    },

    {
        clientName: "Lorem Ipsum",
        clientTitle: "Lorem Ipsum",
        clientImage: "",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet consectetur incididunt ut labore et dolore magna ali",
        rating: 3,
    },

    {
        clientName: "Lorem Ipsum",
        clientTitle: "Lorem Ipsum",
        clientImage: "",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet consectetur incididunt ut labore et dolore magna ali",
        rating: 4,
    }
]

let works = [
    {
        workTitle: "",
        workDescription : "",
        githubLink: "",
        behanceLink: ""
    },

    {
        workTitle: "",
        workDescription : "",
        githubLink: "",
        behanceLink: ""
    },

    {
        workTitle: "",
        workDescription : "",
        githubLink: "",
        behanceLink: ""
    },

    {
        workTitle: "",
        workDescription : "",
        githubLink: "",
        behanceLink: ""
    }
]

let personalInfo = {
    socials : {
        github: "https://github.com/Aziztheprogrammer",
        ig: "https://www.instagram.com/aziz.thecoder/",
        behance: "https://www.behance.net/aziztheprogrammer"
    }
}

// Loading Screen 
const loadingScreen = document.querySelector(".loading-screen")

setTimeout(() => {
    loadingScreen.style.display = "none"
}, 4000)

const servicesContainer = document.querySelector(".services-grid");

// Create and append each service card
services.forEach(service => {
    // Create the card
    const serviceCard = document.createElement("div");
    serviceCard.className = "service-card";

    // Create and populate the header with a star icon
    const serviceCardHeader = document.createElement("div");
    serviceCardHeader.className = "card-header";
    serviceCardHeader.textContent = service.serviceName;

    const headerStar = document.createElement("i");
    headerStar.className = "fas fa-star";
    serviceCardHeader.prepend(headerStar);

    // Create and populate the description
    const serviceCardDescription = document.createElement("p");
    serviceCardDescription.textContent = service.serviceDescription;

    // Create and populate the tags
    const serviceCardTags = document.createElement("div");
    serviceCardTags.className = "card-tags";

    service.tags.forEach(tag => {
        const tagSpan = document.createElement("span");
        tagSpan.className = "tag";
        tagSpan.textContent = tag;
        serviceCardTags.appendChild(tagSpan);
    });

    // Append all parts to the card
    serviceCard.append(serviceCardHeader, serviceCardDescription, serviceCardTags);

    // Append the card to the container
    servicesContainer.appendChild(serviceCard);
});

const testimonialsContainer = document.querySelector(".testimonials-grid");

// Loop over each testimonial in the testimonials array
testimonials.forEach(testimonial => {
    // Create the main testimonial card div
    const testimonialCard = document.createElement("div");
    testimonialCard.classList.add("testimonial-card");

    // Optional featured icon at the top (star icon)
    const testimonialIcon = document.createElement("i");
    testimonialIcon.className = "fas fa-star";

    // Create the container for client information
    const clientInfo = document.createElement("div");
    clientInfo.classList.add("client-info");

    // Create the client's image element
    const clientImage = document.createElement("img");
    clientImage.src = testimonial.clientImage; // Set image source
    clientImage.alt = `Image of ${testimonial.clientName}`; 

    // Container for client name and title (stacked)
    const nameTitleContainer = document.createElement("div");

    // Create and set the client's name
    const clientName = document.createElement("span");
    clientName.textContent = testimonial.clientName;

    // Create and set the client's title (e.g., "CEO at Company")
    const clientTitle = document.createElement("small");
    clientTitle.textContent = testimonial.clientTitle;

    // Append the name and title inside the name-title container
    nameTitleContainer.append(clientName, clientTitle);

    // Append the client image and the name-title container inside the client info container
    clientInfo.append(clientImage, nameTitleContainer);

    // Create the testimonial content paragraph
    const testimonialContent = document.createElement("p");
    testimonialContent.textContent = testimonial.content;

    // Create the rating container for stars
    const rating = document.createElement("div");
    rating.classList.add("stars");

    // Create star icons based on the testimonial rating
    for (let i = 0; i < testimonial.rating; i++) {
        const starIcon = document.createElement("i");
        starIcon.className = "fas fa-star";
        rating.appendChild(starIcon);
    };

    for (let i = 0; i < 5 - testimonial.rating; i++) {
        const starIcon = document.createElement("i");
        starIcon.className = "fa-regular fa-star";
        rating.appendChild(starIcon);
    };

    // Append all elements to the testimonial card in order
    testimonialCard.append(
        testimonialIcon,
        clientInfo,
        testimonialContent,
        rating
    );

    testimonialsContainer.append(testimonialCard);
});

const clientsImagesContainer = document.querySelector(".clients-pictures")

testimonials.forEach((testimonial, index) => {
    let pic = document.createElement("img")
    pic.className = `client-${index + 1}`
    pic.alt = `Image Of ${testimonial.clientName}`
    clientsImagesContainer.append(pic)
})

const workContainer = document.querySelector(".work-grid");

works.forEach(work => {
    let workCard = document.createElement("div")
    workCard.className = "work-card"

    workContainer.append(workCard)
})

let githubLinks = document.getElementsByClassName("github-link")
Array.from(githubLinks).forEach(githubLink => {
    githubLink.href = personalInfo.socials.github
    githubLink.target = "_blank"
})

let igLinks = document.getElementsByClassName("ig-link")
Array.from(igLinks).forEach(igLink => {
    igLink.href = personalInfo.socials.ig
    igLink.target = "_blank"
})

let behanceLinks = document.getElementsByClassName("behance-link")
Array.from(behanceLinks).forEach(behanceLink => {
    behanceLink.href = personalInfo.socials.behance
    behanceLink.target = "_blank"
})

