import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
//images
import gin2 from '../../images/gin1.jpg';
import gin1 from '../../images/gin2.jpg';
//components
import Button from '../all/Button'
import Title from '../all/Title'
import Headline from '../all/Headline'
import SectionText from '../all/SectionText'

const Styled = styled.div`
    position: relative;
    height: auto;
    width: 100vw;
    padding: 20px;
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    grid-template-rows: 0.9fr 0.9fr 0.9fr;
    gap: 20px 20px;
    grid-template-areas:
        "gin-text gin-image1"
        "gin-text gin-image1"
        "gin-text .";
    @media screen and (max-width: 500px){
        height: 100vh;
        grid-template-columns: 1fr;
        grid-template-rows: 65% 35%;
        gap: 0px;
        padding: 0;
        grid-template-areas:
            "gin-text"
            "gin-image1";
    }
    .gin-image1{
        grid-area: gin-image1;
        background: url(${gin1}) no-repeat top;
        background-size: cover;
    }
    .gin-text{
        grid-area: gin-text;
        padding: 120px 80px 100px 140px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 900px){
            padding: 100px 40px 100px 100px;
        }
        @media screen and (max-width: 800px){
            padding: 60px 40px 60px 40px;
        }
        @media screen and (max-width: 700px){
            padding: 40px 20px 40px 20px;
        }
        @media screen and (max-width: 500px){
            padding: 20px;
        }
    }
    .horizontal{
        position: absolute;
        top: 60px;
        left: 40px;
        width: 25vw;
        height: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        @media screen and (max-width: 900px){
            left: 20px;
        }
        @media screen and (max-width: 800px){
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
        position: absolute;
        top: 20px;
        left: 80px;
        height: 240px;
        width: 40px;
        display: flex;
        justify-content: space-around;
        @media screen and (max-width: 900px){
            left: 60px;
        }
        @media screen and (max-width: 800px){
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

const Gin = () => {
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
            <div className="gin-image1"></div>
            <div className="gin-text">
                <Title text="LITTLE GIN" />
                <Headline text="Spirits off the beaten track with a few classics for good measure" />
                <SectionText text="Our back bar boasts a huge array of tipples, predominatly made up of small batch gin." />
                <SectionText text="We've compiled a collection of just over seventy gins, this obviously lead to Team Tap in distilling our bespoke craft gin." />
                <Button text="Little Gin" />
            </div>
        </Styled>
    )
};

export default Gin;


