const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#background',
        start: 'top top',
        scrub: 2,
        // markers: true
    }
});

const elem = gsap.utils.toArray('.parallex').forEach((elem) => {
    const depth = elem.dataset.depth;
    const shifting = -(depth * (elem.offsetHeight * 0.1));
    tl.to(elem, {
        y: shifting,
        ease: 'none'
    }, 0)
        .to('#overlay', {
            opacity: 0,
            ease: 'none'
        }, 0)
})

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '#content',
        start: 'top center',
        toggleActions: 'play pause resume reverse'
    }
});

tl2.from('.block', {
    stagger: .2,
    opacity: 0,
    delay: .1,
    duration: 1,
    ease: 'Expo.easeInOut'
})
    .from('.block .img', {
        stagger: .1,
        opacity: 0,
        // delay: .1,
        duration: 2,
        ease: 'Expo.easeInOut'
    })
    .from('#content p', {
        // stagger: .1,
        y: 1,
        opacity: 0,
        delay: 0,
        duration: 1,
        ease: 'Expo.easeInOut'
    })