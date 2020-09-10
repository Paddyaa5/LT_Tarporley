import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
//images
import restaurant from '../images/rest.jpg'

//animations
import { scrollLogo, scrollSubtitle, hideSubtitle } from '../animations/HomeAnimations'
import HomeButton from '../components/navigation/HomeButton';

const Styled = styled.div`
    width: 100vw;
    background-color: ${(props => props.theme.first)};

    .banner{
        height: 85vh;
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
        font-size: 90px;
        text-align: center;
        font-weight: 200;
        border: 2px solid ${(props => props.theme.second)}; 
        padding: 5px 15px;
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
            width: 95%;
            height: 95%;
            object-fit: cover;
        }
    }
    .test{
        height: 300vh;
        background-color: ${(props => props.theme.second)};
    }
`

const Home = () => {

    // Ref variables for gsap animations
    let section1= useRef(null)
    let subtitle = useRef(null)
    let headline = useRef(null)

    useEffect(() => {

        scrollLogo(headline, section1)
        scrollSubtitle(subtitle, section1)
        hideSubtitle(subtitle, headline)

    })

    return (
        <Styled>
            <HomeButton />
            <div className='banner' ref={ el => section1 = el }>
                <h1 ref={ el => headline = el } className="headline">Little Tap</h1>
                <div ref={ el => subtitle= el } className="subtitle">
                    <div><h5>Est.</h5></div>
                    <h4>Tarporley</h4>
                    <div><h5>2016</h5></div>
                </div>
            </div>
            <div className='image-section'>
                <img src={restaurant} alt="inside-little-tap"></img>
            </div>
            <div className='test'>

            </div>
        </Styled>
    )
}

export default Home
