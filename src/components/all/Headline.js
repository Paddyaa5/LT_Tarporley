import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Styled = styled.h2`
    font-family: ${props => props.theme.font2};
    color: ${props => props.theme.second};
    font-size: 24px;
    overflow: hidden;
    margin-top: 30px;
    text-align: center;
    padding: 0 30px;

    span{
        display: inline-block;
        transform: translateY(100%)
    }
`
const Headline = ({text}) => {

    let headline = useRef(null);

    useEffect(() => {
        gsap.to(headline, {
            scrollTrigger: {
                trigger: headline,
                start: 'top 80%',
                id: 'headline'
            },
            y: '0%',
            duration: 0.5
        })
    })

    return (
        <Styled>
            <span ref={el => headline = el}>{text}</span>
        </Styled>
    )
}

export default Headline
