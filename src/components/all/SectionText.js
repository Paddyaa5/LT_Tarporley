import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Styled = styled.p`
    font-family: ${props => props.theme.font3};
    color: ${props => props.theme.third};
    font-size: 12px;
    overflow: hidden;
    margin-top: 30px;
    white-space: wrap;
    text-align: justify;

    span{
        display: inline-block;
        transform: translateY(100%)
    }
`
const SectionText = ({text}) => {

    let sectionText = useRef(null);

    useEffect(() => {
        gsap.to(sectionText, {
            scrollTrigger: {
                trigger: sectionText,
                start: 'top 80%',
                id: 'text'
            },
            y: '0%',
            duration: 0.5
        })
    })

    return (
        <Styled>
            <span ref={el => sectionText = el}>{text}</span>
        </Styled>
    )
};

export default SectionText;