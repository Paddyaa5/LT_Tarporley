import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export const scrollLogo = (node1, node2) => {
    gsap.to(node1, {
    scrollTrigger: {
        trigger: node2,
        start: 'bottom bottom',
        markers: true,
        scrub: 1
    },
    fontSize: 30,
    position: 'fixed',
    top:'20px',
    })
};

export const scrollSubtitle = (node1, node2) => {
    gsap.to(node1, {
        scrollTrigger: {
            trigger: node2,
            start: 'bottom bottom',
            markers: true,
            scrub: 1
        },
        position: 'fixed',
        top:'-5px',
    })
};

export const hideSubtitle = (node1, node2) => {
    gsap.to(node1, {
        scrollTrigger: {
            trigger: node2,
            start: 'center 32%',
            markers: true,
            scrub: true
        },
        opacity: 0,
        ease: 'power4.easeOut'
    })
}