import gsap from "gsap";

// OPEN NAVMENU
export const staggerMenuReveal = (node1, node2) => {
    gsap.from([node1, node2], {
        duration: 0.8,
        height: 0,
        transformOrigin: 'right top',
        skewY: 2,
        ease: "power3.inOut",
        stagger: {
            amount: .1
        }
    });
};

// CLOSE NAVMENU
export const staggerMenuRevealClose = (node1, node2) => {
    gsap.to([node1, node2], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07
        }
    });
};

// STAGGER THE NAVLINKS TO APPEAR
export const staggerMenuText = (node1, node2, node3, node4) => {
    gsap.from([node1, node2, node3, node4], {
        duration: 0.5,
        opacity: 0,
        y: 100,
        delay: 0.4,
        ease: "power3.inOut",
        stagger: {
            amount: 0.3
        }
    });
};

// FADE LEFT FOR NAVMENU INFO 
export const fadeLeft = (node) => {
    gsap.from(node, {
      duration: 1.2,
      x: 100,
      delay: .3,
      opacity: 0,
      ease: "power3.inOut"
    });
  };

// ADD TARPORLEY IMAGE ON HOVER
export const handleCity = (city, cityBack) => {
    gsap.to(cityBack, {
        duration: 0,
        background: `url(${city})`,
        backgroundSize: '100vw 100vh'
    });
    gsap.to(cityBack, {
        duration: 0.4,
        opacity: 1,
        ease: "power3.inOut",
        width: '100%'
    });
    gsap.from(cityBack, {
        duration: 0.4,
        skewY: 2,
        transformOrigin: "right top"
    });
};

// REMOVE TARPORLEY IMAGE OFF HOVER 
export const handleCityReturn = (cityBack) => {
    gsap.to(cityBack, {
        duration: 0,
        skewY: 0
    });
    gsap.to(cityBack, {
        duration: 0.4,
        opacity: 0,
        skewY: 0
    });
};
