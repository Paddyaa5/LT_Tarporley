import React from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
//images
import plate1 from '../../images/plate1.jpg'
import plate2 from '../../images/plate2.jpg'
import plate3 from '../../images/plate3.jpg'
//components
import Button from '../all/Button'
import Title from '../all/Title'
import Headline from '../all/Headline'
import SectionText from '../all/SectionText'
//gsap plugins
gsap.registerPlugin(ScrollTrigger);

const Styled = styled.div`
    position: relative;
    height: auto;
    width: 100vw;
    padding: 20px;
    display: grid;
    grid-template-columns: 1.2fr 0.2fr 1.7fr;
    grid-template-rows: 0.6fr 1.1fr 0.9fr 0.2fr;
    gap: 20px 20px;
    grid-template-areas:
        ". . plate-text"
        "plate-image1 plate-image1 plate-text"
        "plate-image2 plate-image3 plate-image3"
        ". plate-image3 plate-image3";
    @media screen and (max-width: 900px){
        grid-template-columns: 1fr 1.7fr;
        grid-template-rows: 1.4fr 1.8fr 1fr;
        gap: 10px 10px;
        grid-template-areas:
            "plate-image1 plate-image1"
            "plate-text plate-text"
            "plate-image2 plate-image3";
    }
    @media screen and (max-width: 500px){
        height: 100vh;
        padding: 0;
        grid-template-columns: 1fr;
        grid-template-rows: 65% 35%;
        gap: 0px;
        grid-template-areas:
            "plate-text"
            "plate-image1";
    }
    .plates-image1{
        grid-area: plate-image1;
        background: url(${plate1}) no-repeat center bottom;
        background-size: contain;
        @media screen and (max-width: 500px){
            background-size: cover;
            background-position: 20%;
        }
    }
    .plates-text{
        position: relative;
        grid-area: plate-text;
        padding: 120px 140px 80px 70px;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media screen and (max-width: 900px){
            padding: 70px 20vw 70px 20vw;
        }
        @media screen and (max-width: 500px){
            padding: 20px;
        }
    }
    .plates-image2{
        grid-area: plate-image2;
        background: url(${plate2}) no-repeat top;
        background-size: contain;
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 900px){
            background-size: contain;
            background-position: top;
        }
        @media screen and (max-width: 500px){
            display: none;
        }
    }
    .plates-image3{
        grid-area: plate-image3;
        background: url(${plate3}) no-repeat top left;
        background-size: contain;
        @media screen and (max-width: 900px){
            background-size: contain;
            background-position: top;
            width: 100%;
        }
        @media screen and (max-width: 500px){
            display: none;
        }
    }
    .horizontal{
        position: absolute;
        top: 60px;
        right: 20px;
        width: 30vw;
        height: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        @media screen and (max-width: 900px){
            display: none;
        }
        .line1{
            border: 2px solid ${props => props.theme.second};
            width: auto;
        }
        .line2{
            border: 2px solid ${props => props.theme.second};
            width: auto;
            margin-left: 20px;  
        }
    }
    .vertical{
        position: absolute;
        top: 20px;
        right: 60px;
        height: 300px;
        width: 40px;
        display: flex;
        justify-content: space-around;
        @media screen and (max-width: 900px){
            display: none;
        }
        .line3{
            border: 2px solid ${props => props.theme.second};
            height: auto;
            margin-bottom: 20px;
        }
        .line4{
            border: 2px solid ${props => props.theme.second};
            height: auto; 
        }
    }
`

const LittlePlates = () => {

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
            <div className="plates-image1"></div>
            <div className="plates-text">
                <Title text="Little Plates" />
                <Headline text="Crafted by passionate chefs, designed to explore flavours" />
                <SectionText text="Our menu's are a selection of small plates using local and seasonal produce." />
                <SectionText text="We work closely with our suppliers to ensure our menu changes every six to eight weeks following new trends from all over the globe. Galvanising flavours and concepts that give you something exciting to enjoy." />
                <Button text="Menus" />
            </div>
            <div className="plates-image2"></div>
            <div className="plates-image3"></div>
        </Styled>
    )
};

export default LittlePlates;


