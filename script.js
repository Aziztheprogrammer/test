const tl = gsap.timeline({
    delay: 0.5,
})

tl.from('main .title', {
    x: "-150%",
}).from('main .stats', {
    x: "-150%",
}).to('main a', {
    opacity: 1,
}).from('header > .links', {
    y: -300,
}).from('main .lady-bug', {
    x: 200,
    delay: 0.5,
})

gsap.to('.scroll-down', {
    y: 8,
    repeat: -1,
    yoyo: true,
})