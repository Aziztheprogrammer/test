const nextButton = document.querySelector("button.next")
const prevButton = document.querySelector("button.prev")
const testimonialsContainer = document.querySelector(".testimonials-carousel")

nextButton.addEventListener("click", (traget) => {
    testimonialsContainer.scrollBy({
        left: 100,
        top: 0,
        behavior: "smooth"
    })
})

prevButton.addEventListener("click", (traget) => {
    testimonialsContainer.scrollBy({
        left: -100,
        top: 0,
        behavior: "smooth"
    })
})