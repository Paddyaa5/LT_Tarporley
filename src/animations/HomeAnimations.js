import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export const scrollLogo = (node1, node2) => {
    gsap.to(node1, {
    scrollTrigger: {
        trigger: node2,
        start: 'bottom bottom',
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
            start: 'center 10%',
            scrub: 1
        },
        opacity: 0,
        ease: 'power4.easeOut'
    })
};

export const expandBanner = (node1) => {
    gsap.fromTo(node1, {
        width: '90%', 
        height: '90%'
    }, {
        scrollTrigger: {
            trigger: node1,
            start: 'center bottom',
            end: 'bottom bottom',
            scrub: 0.5
        },
        width: '100%', 
        height: '110%'
    })
};

export const textFadeIn = (node1, node2, node3) => {
    gsap.to([node1, node2], {
        scrollTrigger: {
            trigger: node3,
            start: 'top 70%'
        },
        opacity: 1,
        ease: 'power2.easeOut',
        duration: 1
    })
};
export const lineExpand = (node1, node2) => {
    gsap.to(node1, {
        scrollTrigger: {
            trigger: node2,
            start: 'top 80%'
        },
        width: 500,
        ease: 'power2.easeOut',
        duration: 1.2
    })
};
export const imageReveal= node1 => {
    gsap.to(node1, {
        scrollTrigger: {
            trigger: node1,
            start: 'top bottom',
            end: 'top 40%',
            scrub: true,
            markers: true
        },
        opacity: 1,
        top: '0px',
        height: '80%',
        ease: 'power2.easeOut',
        duration: 1.2
    })
};

export const backgroundFadeIn = (node1, node2) => {
    gsap.to(node1, {
        scrollTrigger: {
            trigger: node2,
            start: 'top 80%'
        },
        width: 500,
        ease: 'power2.easeOut',
        duration: 1.2
    })
};
