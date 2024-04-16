gsap.registerPlugin(ScrollTrigger);

const p = gsap.timeline({
    scrollTrigger: {
        trigger: ".huhu",
        start: "top 38%",
        end: "middle 55%",
        scrub: 1,
        markers: true
    }
});
p.from(".gugu", { x: 50, opacity: 0, duration: 1 })

const t = gsap.timeline({
    scrollTrigger: {
        trigger: ".huhu",
        start: "top 42%",
        end: "middle 55%",
        scrub: 1,

    }
});
t.from(".huhu", { x: -190, opacity: 0, duration: 1 })

const v = gsap.timeline({
    scrollTrigger: {
        trigger: ".para1",
        start: "middle 25%",
        scrub: 0.2,
        end: "top 14%",


    }
});
v.from(".lol", { y: -120, opacity: 0, duration: 0.56 })

const j = gsap.timeline({
    scrollTrigger: {
        trigger: ".ll",
        start: "top 50%",
        end: "bottom 60%",
        scrub: 1.5,
        pin: true,
        ease: Expo.easeInOut
    }
})

j.from(".km", { y: -330, duration: 5 })
j.from(".km1", { y: 200, duration: 10, ease: "power2", opacity: 0 })
j.from(".km2", { y: 150, duration: 10, ease: "power2", opacity: 0 })
j.from(".km3", { y: 50, duration: 10, ease: "power2", opacity: 0 })
j.from(".km4", { y: 100, duration: 10, ease: "power2", opacity: 0 })

const pl = gsap.timeline({
    scrollTrigger: {
        trigger: ".anii",
        start: "top 45%",
        end: "middle 40%",
        scrub: 2,

    }
});
pl.from(".plane", { y: 920, opacity: 0, duration: 9.3 })

const prb = gsap.timeline({
    scrollTrigger: {
        trigger: ".ek",
        start: "top 45%",
        end: "middle 45%",
        scrub: 1.2,


    }
});
prb.from(".ek", { x: -70, opacity: 0, duration: 0.25 })

const prbm = gsap.timeline({
    scrollTrigger: {
        trigger: ".doo",
        start: "top 45%",
        end: "middle 45%",
        scrub: 1.2,

    }
});
prbm.from(".doo", { x: 70, opacity: 0, duration: 0.25 })
    /* OVERLAY */
gsap.to(".first", {
    duration: 6,
    delay: 0.8,
    top: "-100%",
    ease: "expo.inOut",
});

gsap.to(".second", {
    duration: 6.5,
    delay: 0.9,
    top: "-100%",
    ease: "expo.inOut",
});

gsap.to(".third", {
    duration: 7,
    delay: 1,
    top: "-100%",
    ease: "expo.inOut",
});