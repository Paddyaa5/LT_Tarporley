import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
//images
import gin1 from '../../images/gin1.jpg';
import gin2 from '../../images/gin2.jpg';
//components
import Button from '../all/Button'
import Title from '../all/Title'
import Headline from '../all/Headline'
import SectionText from '../all/SectionText'

const Styled = styled.div`
    position: relative;
    height: auto;
    width: 100vw;
    padding: 15px 20px;
    margin: 0px 0px 20px 0px;
    @media screen and (max-width: 500px){
        padding: 20px 0;
    }
    .gins{
        position: relative;
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 30% 30% 40%;
        grid-template-rows: 60% 40%;
        gap: 10px 10px;
        grid-template-areas:
            "gin1 plate1 plate-text"
            "plate2 plate3 plate-text";
        @media screen and (max-width: 500px){
            margin-top: 60px;
            grid-template-columns: 1fr;
            grid-template-rows: 48% 26% 26%;
            gap: 10px 10px;
            grid-template-areas:
            "plate-text"
            "plate1"
            "plate2";
        }
    }
`

const Gin = () => {
    return (
        <Styled>
            <div className="gins">
                <div>
                    <img src={gin1} alt="little-tap-gin" />
                    <img src={gin2} alt="little-tap-gin-2" />
                    <Title text="GIN, GIN, GIN" />
                    <Headline text="Spirits off the beaten track with a few classics for good measure" />
                    <SectionText text="Our back bar boasts a huge array of tipples, predominatly made up of small batch gin." />
                    <SectionText text="We've compiled a collection of just over seventy gins, this obviously lead to Team Tap in distilling our bespoke craft gin." />
                    <Button text="Little Gin" />
                </div>
            </div>
        </Styled>
    )
}

export default Gin
