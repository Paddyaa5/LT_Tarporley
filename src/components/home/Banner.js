import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
//images
import restaurant from '../../images/rest.jpg';
//animations
import { scrollLogo, scrollSubtitle, hideSubtitle, expandBanner } from '../../animations/HomeAnimations';

const Styled = styled.div`
    width: 100vw;
    background-color: ${(props => props.theme.first)};
    .banner{
        height: 70vh;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .headline, .subtitle{
        font-family: ${(props => props.theme.font1)};
        background-color: ${(props => props.theme.first)};
        color: ${(props => props.theme.second)}; 
        position: fixed;
    }
    .headline{
        top: 300px;
        font-size: 110px;
        text-align: center;
        font-weight: 200;
        border: 3px solid ${(props => props.theme.second)}; 
        padding: 5px 15px;
        position: relative;
        z-index: 1;
    }
    .subtitle{
        top: 260px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 200px;
        height: 20px;
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
    .image-section{
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 90%;
            height: 90%;
            object-fit: cover;
        }
    }
`

const Banner = () => {

    let section1= useRef(null)
    let subtitle = useRef(null)
    let headline = useRef(null)
    let banner = useRef(null)

    useEffect(() => {
        scrollLogo(headline, section1)
        scrollSubtitle(subtitle, section1)
        hideSubtitle(subtitle, headline)
        expandBanner(banner)
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
                <img src={restaurant} ref={ el => banner = el } alt="inside-little-tap"></img>
            </div>
        </Styled>
    )
}

export default Banner
