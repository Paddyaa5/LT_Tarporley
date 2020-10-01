import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
//gsap plugins
gsap.registerPlugin(ScrollTrigger);

const Styled = styled.div` 
    .header{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        border-bottom: 1px solid ${(props => props.theme.second)}; 
        .logo{
            position: fixed;
            top: 20px;
            text-align: center;
            font-family: ${(props => props.theme.font1)};
            background-color: ${(props => props.theme.first)};
            color: ${(props => props.theme.second)}; 
            font-size: 30px;
            font-weight: 200;
            border: 3px solid ${(props => props.theme.second)}; 
            padding: 5px 15px;
            z-index: 1000;
            @media screen and (max-width: 500px){
                display: none;
            }
        }
        .image-container{
            position: relative;
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .image-cover{
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
                background-color: ${(props => props.theme.first)};
                z-index: 1;
            }
            img {
                position: absolute;
                object-fit: cover;
                width: 100%;
                height: 100%;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
            }
            h3{
                font-family: ${props => props.theme.font1};
                font-weight:200;
                color: ${(props => props.theme.fourth)};
                font-size: 40px;
                opacity: 0;
                text-shadow: 3px 3px 3px ${(props => props.theme.second)};
                position: absolute;
                bottom: 15vh;
                z-index: 5;
            }
        }
    }
`

const Header = ({pageTitle, image}) => {

    let header = useRef(null)
    let logo = useRef(null)
    let cover = useRef(null)
    let title = useRef(null)
    let tl = gsap.timeline();

    useEffect(() => {

        gsap.to(cover, {
            width: '0%',
            duration: 0.9,
            ease: 'power1.easeIn',
            delay: 0.7
        })

        ScrollTrigger.create({
            animation: tl,
            trigger: header,
            start: 'bottom bottom',
            end: '=+400',
            scrub: 0.5,
            pin: '.header'
        })

        tl
        .to(title, {opacity: 1})
        .to(logo, {opacity: 0})
    })

    return (
        <Styled>
            <div className="header" ref={el => header = el}>
                <h1 className="logo" ref={el => logo = el}>Little Tap</h1>

                <div className="image-container">
                    <div className="image-cover" ref={el => cover = el}></div>
                    <img src={image} alt="little-tap-table" aria-label="little-tap-table" />
                    <h3 ref={el => title = el}>{pageTitle}</h3>
                </div>
            </div>
        </Styled>
    )
};

export default Header;