import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
//components
import Intro from './Intro';
//images
import first from '../../images/1.jpg'
import second from '../../images/2.jpg'
import third from '../../images/3.jpg'
import fourth from '../../images/4.jpg'
//gsap plugins registered
gsap.registerPlugin(ScrollTrigger);


const Styled = styled.div`

    height: auto;
    width: 100vw;

    header{
        height: 70vh;
        display: flex;
        justify-content: center;
        align-items: center;
        
        .header-logo{
            position: fixed;
            top: 35vh;
            z-index: 10;
            padding: 5px 25px;
            text-transform: uppercase;
            font-size: 80px;
            font-family: ${props => props.theme.font1};
            font-weight: 200;
            color: ${props => props.theme.second};
            border: 4px solid ${props => props.theme.second};
            background: ${props => props.theme.first};
            @media screen and (max-width: 500px){
                display: none;
            }
        }
        .header-logo-mobile{
            position: fixed;
            top: 35vh;
            z-index: 10;
            padding: 5px 25px;
            text-transform: uppercase;
            font-size: 60px;
            font-family: ${props => props.theme.font1};
            font-weight: 200;
            color: ${props => props.theme.second};
            border: 4px solid ${props => props.theme.second};
            background: ${props => props.theme.first};
            @media screen and (min-width: 500px){
                display: none;
            }
        }
    }
    .image-section{
        text-align: center;
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .title{
            position: absolute;
            top: 75%;
            width: 80%;
            height: auto;
            padding: 20px;
            h1{
                position: relative;
                z-index: 1;
                overflow: hidden;
                height: 70px;
                .hide-text{
                    position: absolute;
                    z-index: 200;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    .come-visit{
                        text-transform: uppercase;
                        font-size: 40px;
                        font-family: ${props => props.theme.font1};
                        font-weight: 200;
                        color: ${props => props.theme.fourth};
                    }
                    .tarporley{
                        text-transform: uppercase;
                        font-size: 16px;
                        font-family: ${props => props.theme.font2};
                        color: ${props => props.theme.first};
                    }
                }
            }
        }
        .image-container{
            position: relative;
            height: 90%;
            width: 90%;
            .image{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                justify-self: center;
            }
            .image.first{
                background-image: url(${first});
                background-position: center;
                background-size: cover;
                opacity: 1;
            }
            .image.second{
                background-image: url(${second});
                background-position: center;
                background-size: cover;
                opacity: 0;
            }
            .image.third{
                background-image: url(${third});
                background-position: center;
                background-size: cover;
                opacity: 0;
            }
            .image.fourth{
                background-image: url(${fourth});
                background-position: center;
                background-size: cover;
                opacity: 0;
            }
        }
    }
`

const Banner = () => {

    let logo = useRef(null);
    let mobilelogo = useRef(null);
    let gallery = useRef(null);
    let hidetext = useRef(null);
    let container = useRef(null);
    let first = useRef(null);
    let second = useRef(null);
    let third = useRef(null);
    let fourth = useRef(null);
    let imagesTL = gsap.timeline({repeat: -1});
    let galleryTL = gsap.timeline();

    useEffect(() => {

        gsap.to(logo, {
            scrollTrigger: {
                trigger: logo,
                start: 'bottom 50%',
                scrub: 1
            },
            fontSize: 30,
            border: 3,
            paddingLeft: 10,
            paddingRight: 10,
            top:'20px'
        })
        gsap.to(mobilelogo, {
            scrollTrigger: {
                trigger: mobilelogo,
                start: 'bottom 50%',
                scrub: 1
            },
            fontSize: 34,
            border: 3,
            paddingLeft: 15,
            paddingRight: 15
        })

        gsap.to(container, {
            scrollTrigger: {
                trigger: gallery,
                start: 'top center',
                end: 'bottom bottom',
                scrub: 1
            },
            width: '100vw',
            height: '100vh'
        })
          
        ScrollTrigger.create({
            animation: galleryTL,
            trigger: gallery,
            start: 'bottom bottom',
            end: "+=800",
            scrub: 0.5,
            pin: '.image-section'
        })
      
        galleryTL
            .from(hidetext, {y: '100%'})
            .to([logo, mobilelogo], {opacity: 0})
      
        imagesTL
            .to(first, { opacity: 1, duration: 3})
            .to(first, { opacity: 0, duration: 1.5})
            .to(second, { opacity: 1, duration: 1.5}, "-=1.5")
            .to(second, { opacity: 1, duration: 3})
            .to(second, { opacity: 0, duration: 1.5})
            .to(third, { opacity: 1, duration: 1.5}, "-=1.5")
            .to(third, { opacity: 1, duration: 3})
            .to(third, { opacity: 0, duration: 1.5})
            .to(fourth, { opacity: 1, duration: 1.5}, "-=1.5")
            .to(fourth, { opacity: 1, duration: 3})
            .to(fourth, { opacity: 0, duration: 1.5})
            .to(first, { opacity: 1, duration: 1.5}, "-=1.5")
          
    })


    return (
        <Styled>
            <Intro />
            <header>
                <h1 className="header-logo" ref={ el => logo = el }>Little Tap</h1>
                <h1 className="header-logo-mobile" ref={ el => mobilelogo = el }>Little Tap</h1>
            </header>
            <div className="image-section" ref={el => gallery = el}>
                <div className="title">
                    <h1>
                        <span className="hide-text" ref={el => hidetext = el}>
                            <span className="come-visit">WE ARE BACK</span>
                            <span className="tarporley">69 High Street, Tarporley</span>
                        </span>
                    </h1>
                </div>
                <div className="image-container" ref={el => container = el}>
                    <div className="image first" ref={el => first = el}></div>
                    <div className="image second" ref={el => second = el}></div>
                    <div className="image third" ref={el => third = el}></div>
                    <div className="image fourth" ref={el => fourth = el}></div>
                </div>
            </div>
        </Styled>
    )
}

export default Banner
