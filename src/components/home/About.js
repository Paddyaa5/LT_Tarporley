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
    position: relative;
    height: auto;
    width: 100vw;
    padding: 15px 20px;
    border-top: 1px solid ${(props => props.theme.second)}; 
    @media screen and (max-width: 500px){
        padding: 0;
    }
    
    .about-us{
        position: relative;
        height: auto;
        width: 100%;

        .about-us-section{
            margin: 80px 23vw 80px 23vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            @media screen and (max-width: 1000px){
                margin: 80px 18vw 80px 18vw;
            }
            @media screen and (max-width: 800px){
                margin: 80px 15vw 80px 15vw;
            }
            @media screen and (max-width: 650px){
                margin: 80px 10vw 80px 10vw;
            }
            @media screen and (max-width: 500px){
                margin: 80px 5vw 80px 5vw;
            }
            #about-headline{
                padding: 0 60px;
                @media screen and (max-width: 500px){
                    padding: 0 20px;
                }
            }
        }
        .clock-img-container{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 10vw;
            overflow: hidden;
            @media screen and (max-width: 500px){
                padding: 0;
            }
            img{
                width: 100%;
                max-width: 800px;
                height: 100%;
                max-height: 300px;
                object-fit: cover;
                object-position: 70% 30%;
                transform: scale(1.2)
            }
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
            <div className='about-us'>
                <div className="about-us-section">
                    <Title text="About Us"/>
                    <div id="about-headline">
                    <Headline  text="A new & innovative dining experience" />
                    </div>
                    <SectionText text="Since opening in summer of 2016, our key focus has always been, to offer a wide range of craft beer, eclectic gin & a menu of small plates inspired by modern British cuisine." />
                    <SectionText text="As a team we host numerous events from live Music, party nights & a cinema club, to wine dinners & pop up community concepts. Ensuring we are always thinking ahead to the next date in our diary to bring some exciting energy to our village." />
                </div>
                <div className="clock-img-container" ref={el => container = el}>
                    <img src={clock} alt="little-tap-clock" ref={el => image = el}></img>
                </div>
            </div>
        </Styled>
    )
};

export default About;
