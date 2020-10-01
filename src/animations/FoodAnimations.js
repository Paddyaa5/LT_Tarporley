import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export const textFadeIn = (node1) => {
    gsap.to(node1, {
        scrollTrigger:{
          trigger: node1,
          start: 'top 90%',
          end: 'top 0%',
          toggleClass: 'active'
        }
    })
}
