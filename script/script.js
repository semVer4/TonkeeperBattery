const tl = gsap.timeline();

tl.fromTo('#desc-battery', {x: '-100%', y: '+100%'}, {y: 0})
tl.fromTo('#demo-battery', {x: '-100%'}, {x: '-200%'})

const main = document.querySelector('.main');
ScrollTrigger.create({
    animation: tl, 
    trigger: '.site-container',
    start: 'top top',
    end: () => main.offsetWidth / 2,
	scrub: true,
    pin: true
});