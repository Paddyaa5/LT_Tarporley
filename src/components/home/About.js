import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
//components
import Title from '../all/Title'
import Headline from '../all/Headline'
import SectionText from '../all/SectionText'
//images
import clock from '../../images/clock.jpg'
//animations
import { } from '../../animations/HomeAnimations';
//gsap plugins registered
gsap.registerPlugin(ScrollTrigger);


const Styled = styled.div`
    height: auto;
    width: 100vw;
    padding: 20px;
    border-top: 1px solid ${(props => props.theme.second)}; 
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1.4fr 1.1fr;
    gap: 20px 20px;
    gap: 10px;
    grid-template-areas:
        "about-text"
        "about-image";
    @media screen and (max-width: 500px){
        height: 100vh;
        padding: 0;
        gap: 0px;
        grid-template-rows: 65% 35%;
    }
    .about-text{
        grid-area: about-text;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 15vh 25vw;
        @media screen and (max-width: 900px){
            padding: 10vh 20vw;
        }
        @media screen and (max-width: 500px){
            padding: 0 20px;
        }
    }
    .about-image{
        grid-area: about-image;
        width: 70%;
        justify-self: center;
        background: url(${clock});
        background-position: 50% 20%;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 900px){
            width: 90%;
        }
        @media screen and (max-width: 700px){
            width: 100%;
        }
    }
        
    

`

const About = () => {

    let image = useRef(null)
    let container = useRef(null)

    useEffect(() => {

    })

    return (
        <Styled>
            <div className="about-text">
                <Title text="About LT"/>
                <Headline  text="A new & innovative dining experience" />
                <SectionText text="Since opening in summer of 2016, our key focus has always been, to offer a wide range of craft beer, eclectic gin & a menu of small plates inspired by modern British cuisine." />
                <SectionText text="As a team we host numerous events from live Music, party nights & a cinema club, to wine dinners & pop up community concepts. Ensuring we are always thinking ahead to the next date in our diary to bring some exciting energy to our village." />
            </div>
            <div className="about-image"></div>
        </Styled>
    )
};

export default About;



