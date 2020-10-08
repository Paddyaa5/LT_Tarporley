import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Styled = styled.div`
    height: 200px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 500px){
        display: none;
    }
    p{
        font-family: ${props => props.theme.font1};
        color: ${props => props.theme.fourth};
        font-size: 16px;
    }
`

const SectionSplitter = () => {

    let text = useRef(null)

    useEffect(() => { 
        gsap.to(text, {
            ScrollTrigger: {
                trigger: text,
                start: 'top center',
                end: 'bottom center',
                scrub: true,
                markers: true,
                id: 'splitter'
            },
            transform: "rotateY(360deg)"
        })
    });

    return (
        <Styled>
            <p ref={el => text = el}>LT</p>
        </Styled>
    )
};

export default SectionSplitter;
