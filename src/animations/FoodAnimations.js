import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const titleReveal = (node1) => {
    gsap.to(node1, {
        scrollTrigger:{
          trigger: node1,
          start: 'top 100%',
          end: 'top 0%',
          toggleClass: 'active',
          markers: true
        }
    })
};

export const textFadeIn = (node1) => {
    gsap.to(node1, {
        scrollTrigger:{
          trigger: node1,
          start: 'top 90%',
          end: 'top 0%',
          toggleClass: 'active',
          markers: true
        }
    })
}
