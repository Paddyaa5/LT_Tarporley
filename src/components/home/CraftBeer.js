import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
//images
import beer1 from '../../images/beer1.jpg'
import beer2 from '../../images/beer2.jpg'
//components
import Button from '../all/Button'
import Title from '../all/Title'
import Headline from '../all/Headline'
import SectionText from '../all/SectionText'

const Styled = styled.div`
    position: relative;
    height: auto;
    width: 100vw;
    padding: 20px 20px;
    display: grid;
    grid-template-columns: 0.8fr 0.9fr 0.8fr;
    grid-template-rows: 0.2fr 1.2fr 1fr ;
    gap: 40px 40px;
    grid-template-areas:
        ". beer-text beer-image2"
        ". beer-text beer-image2"
        "beer-image1 beer-text beer-image2";
    @media screen and (max-width: 900px){
      grid-template-columns: 1.1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 0.2fr;
      gap: 20px 20px;
      grid-template-areas:
            "beer-text beer-image2"
            "beer-text beer-image2"
            "beer-image1 beer-image2"
            "beer-image1 .";
    }
    @media screen and (max-width: 500px){
        height: 100vh;
        grid-template-columns: 1fr;
        grid-template-rows: 65% 35%;
        gap: 0px;
        padding: 0;
        grid-template-areas:
            "beer-text"
            "beer-image1";
    }
    .beer-image1{
        grid-area: beer-image1;
        background: url(${beer1}) no-repeat center;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 500px){
            padding: 0;
        }
    }
    .beer-text{
        grid-area: beer-text;
        padding: 280px 6vw 150px 6vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 1100px){
            padding: 200px 3vw 130px 3vw;
        }
        @media screen and (max-width: 900px){
            padding: 120px 4vw 80px 12vw;
        }
        @media screen and (max-width: 700px){
            padding: 80px 5px;
        }
        @media screen and (max-width: 500px){
            padding: 20px;
        }
    }
    .beer-image2{
        grid-area: beer-image2;
        background: url(${beer2}) no-repeat center;
        background-size: cover;
        @media screen and (max-width: 900px){
            height: 80%;
        }
        @media screen and (max-width: 500px){
            display: none;
        }
    }
    .horizontal{
        display: none;
        @media screen and (max-width: 900px){
            display: block;
            position: absolute;
            top: 60px;
            left: 20px;
            width: 40vw;
            height: 40px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
        @media screen and (max-width: 700px){
            display: none;
        }
        @media screen and (max-width: 500px){
            display: none;
        }
        .line1{
            border: 2px solid ${props => props.theme.second};
            width: auto;
        }
        .line2{
            border: 2px solid ${props => props.theme.second};
            width: auto;
            margin-right: 20px;  
        }
    }
    .vertical{
        display: none;
        @media screen and (max-width: 900px){
            display: block;
            position: absolute;
            top: 20px;
            left: 60px;
            height: 240px;
            width: 40px;
            display: flex;
            justify-content: space-around;
        }
        @media screen and (max-width: 700px){
            display: none;
        }
        @media screen and (max-width: 500px){
            display: none;
        }
        .line3{
            border: 2px solid ${props => props.theme.second};
            height: auto;
        }
        .line4{
            border: 2px solid ${props => props.theme.second};
            height: auto; 
            margin-bottom: 20px;
        }
    }
`

const CraftBeer = () => {
    return (
        <Styled>
            <div className="horizontal">
                <div className="line1"></div>
                <div className="line2"></div>
            </div>
            <div className="vertical">
                <div className="line3"></div>
                <div className="line4"></div>
            </div>
            <div className="beer-image1"></div>
            <div className="beer-text">
                <Title text="Craft Beers" />
                <Headline text="We take huge pride in our beer selection" />
                <SectionText text="With three cask pumps & seven keg lines we're able to offer some real one offs, different styles of quality beer, as well as some old favourites." />
                <Button text="DRINKS" />
            </div>
            <div className="beer-image2"></div>
        </Styled>
    )
}

export default CraftBeer;


