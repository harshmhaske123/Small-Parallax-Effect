ParallaxEffect = () => {
    gsap.to('#bg', {
        scrollTrigger: {
            scrub: 1
        },
        scale: 1.5
    })

    gsap.to('#m1', {
        scrollTrigger: {
            scrub: 1
        },
        x: -500
    })

    gsap.to('#m2', {
        scrollTrigger: {
            scrub: 1
        },
        x: 500
    })

    gsap.to('#man', {
        scrollTrigger: {
            scrub: 1
        },
        scale: 0.5
    })

    gsap.to('#c1', {
        scrollTrigger: {
            scrub: 1
        },
        x: 500
    })

    gsap.to('#c2', {
        scrollTrigger: {
            scrub: 1
        },
        x: -500
    })

    gsap.to('#text', {
        scrollTrigger: {
            scrub: 1
        },
        y: 350
    })
}
ParallaxEffect();

