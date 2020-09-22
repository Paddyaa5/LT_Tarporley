import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from "gsap";
//images
import primary from '../../images/1.jpg'
import second from '../../images/2.jpg'
import third from '../../images/3.jpg'
import fourth from '../../images/4.jpg'
//animations
import { scrollLogo, scrollSubtitle, hideSubtitle } from '../../animations/HomeAnimations';

const Styled = styled.div`
    width: 100vw;

    .banner{
        height: 70vh;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        .headline, .subtitle{
            font-family: ${(props => props.theme.font1)};
            background-color: ${(props => props.theme.first)};
            color: ${(props => props.theme.second)}; 
            position: fixed;
        }
        .headline{
            position: relative;
            top: 400px;
            font-size: 7rem;
            text-align: center;
            font-weight: 200;
            border: 3px solid ${(props => props.theme.second)}; 
            padding: 5px 15px;
            
            z-index: 1;
        }
        .subtitle{
            top: 360px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 200px;
            height: 20px;
            font-family:${(props => props.theme.font2)};
            h4{
                margin: 0;
                font-size: 12px;
                text-align: center;
                text-transform: uppercase;
            }
            h5{
                margin: 0;
                font-size: 9px;
                width: 40px;
                text-align: center;
            }
        }
    }


    .image-section{
        height: 100vh;
        max-height: 60vw;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 15px 20px;

        .image-container{
            position: relative;
            width: 100%;
            height: 50vw;
            max-height: 100%;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .image{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            justify-self: center;

        }
        .image.primary{
            background-image: url(${primary});
            background-size: cover;
            opacity: 1;
        }
        .image.second{
            background-image: url(${second});
            background-size: cover;
            opacity: 0;
        }
        .image.third{
            background-image: url(${third});
            background-size: cover;
            opacity: 0;
        }
        .image.fourth{
            background-image: url(${fourth});
            background-size: cover;
            opacity: 0;
        }
    }
    h3{
        font-family: ${(props => props.theme.font2)};
        color: ${(props => props.theme.second)};
        margin-top: 130px;
    }
`

const Banner = () => {

    let section1= useRef(null)
    let subtitle = useRef(null)
    let headline = useRef(null)
    let primary = useRef(null);
    let second = useRef(null);
    let third = useRef(null);
    let fourth = useRef(null);
    let tl = gsap.timeline({repeat: -1});

    useEffect(() => {
        scrollLogo(headline, section1)
        scrollSubtitle(subtitle, section1)
        hideSubtitle(subtitle, headline)
        
        tl
        .to(primary, { opacity: 1, duration: 3})
        .to(primary, { opacity: 0, duration: 1.5})
        .to(second, { opacity: 1, duration: 1.5}, "-=1.5")
        .to(second, { opacity: 1, duration: 3})
        .to(second, { opacity: 0, duration: 1.5})
        .to(third, { opacity: 1, duration: 1.5}, "-=1.5")
        .to(third, { opacity: 1, duration: 3})
        .to(third, { opacity: 0, duration: 1.5})
        .to(fourth, { opacity: 1, duration: 1.5}, "-=1.5")
        .to(fourth, { opacity: 1, duration: 3})
        .to(fourth, { opacity: 0, duration: 1.5})
        .to(primary, { opacity: 1, duration: 1.5}, "-=1.5")
    })


    return (
        <Styled>
            <div className='banner' ref={ el => section1 = el }>
                <h1 ref={ el => headline = el } className="headline">Little Tap</h1>
                <div ref={ el => subtitle= el } className="subtitle">
                    <div><h5>Est.</h5></div>
                    <h4>Tarporley</h4>
                    <div><h5>2016</h5></div>
                </div>
            </div>
            <div className='image-section'>
                <div className="image-container">
                <div className="image primary" ref={el => primary = el}></div>
                <div className="image second" ref={el => second = el}></div>
                <div className="image third" ref={el => third = el}></div>
                <div className="image fourth" ref={el => fourth = el}></div>
                </div>
            </div>
        </Styled>
    )
}

export default Banner
