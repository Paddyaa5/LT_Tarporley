import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Styled = styled.div`
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    width: auto;
    height: auto;
    padding: 0;

    .reveal{
        position: relative;
        font-family: ${props => props.theme.font1};
        font-weight: 200;
        color: ${props => props.theme.second};
        font-size: 46px;    
        padding: 2px 15px;
        transform-origin: left;
        transform: scaleX(0);
        transition: 0.5s;
        transition-delay: 0.5s;
    }
    .reveal.active{
        transform: scaleX(1);
    }
    .reveal:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${props => props.theme.second};
        transform-origin: right;
        transition: 0.5s;
        transition-delay: 0s;
    }
    .reveal.active:before{
        transform: scaleX(0);
        transition-delay: 0.8s;
    }
`

const Title = ({text}) => {
    
    let reveal = useRef(null);

    useEffect(() => {
        gsap.to(reveal, {
            scrollTrigger:{
                trigger: reveal,
                start: 'top 100%',
                end: 'bottom 0%',
                toggleClass: 'active'
            }
        })
    })

    return (
        <Styled>
            <h1 className="reveal" ref={el => reveal = el}>{text}</h1>
        </Styled>
    )
}

export default Title
