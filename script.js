const nextButton = document.querySelector("button.next")
const prevButton = document.querySelector("button.prev")
const testimonialsContainer = document.querySelector(".testimonials-carousel")

nextButton.addEventListener("click", (target) => {
    testimonialsContainer.scrollBy({
        left: 100,
        top: 0,
        behavior: "smooth"
    })
})

prevButton.addEventListener("click", (target) => {
    testimonialsContainer.scrollBy({
        left: -100,
        top: 0,
        behavior: "smooth"
    })
})

let x = 2

autoScrollTest = setInterval(() => {
    testimonialsContainer.scrollBy({
        left: x,
        top: 0,
        behavior: "smooth"
    })

    testimonialsContainer.onscrollend = (event) => {
        // console.log("helooooo")
        // clearInterval(autoScrollTest)
        x = -2
    }

    if (testimonialsContainer.scrollLeft == 0) {
        x = 2
    }

}, 5)