import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
//images
import plate1 from '../../images/plate1.jpg'
import plate2 from '../../images/plate2.jpg'
import plate3 from '../../images/plate3.jpg'
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
    .little-plates{
        position: relative;
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 30% 30% 40%;
        grid-template-rows: 60% 40%;
        gap: 10px 10px;
        grid-template-areas:
            "plate1 plate1 plate-text"
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
    .plate1-container{
        grid-area: plate1;
        position: relative;
        img{
            width: 100%;
            object-fit: contain;
        }
    }
    .plate2-container{
        grid-area: plate2;
        position: relative;
        img{
            width: 100%;
            margin-top: 10px;
            object-fit: contain;
        }
    }
    .plate3-container{
        grid-area: plate3;
        position: relative;
        @media screen and (max-width: 500px){
            display: none;
        }
        img{
            width: 100%;
            margin-top: 10px;
            object-fit: cover;
        }
    }
    .little-plates-text{
        grid-area: plate-text;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 20px;
    }
`

const LittlePlates = () => {
    return (
        <Styled>
            <div className="little-plates">
                <div className="plate1-container">
                    <img src={plate1} alt="little-tap-plate-1" />
                </div>
                <div className="plate2-container">
                    <img src={plate2} alt="little-tap-plate-2" />
                </div>
                <div className="plate3-container">
                    <img src={plate3} alt="little-tap-plate-3" />
                    </div>
                <div className="little-plates-text">
                    <Title text="Little Plates" />
                    <Headline text="Crafted by passionate chefs, designed to explore flavours" />
                    <SectionText text="Our menu is crafted by a team of passionate chefs, collating a selection of small plates using local and seasonal produce." />
                    <SectionText text="We work closely with our suppliers to ensure our menu changes every six to eight weeks following new trends from all over the globe. Galvanising flavours and concepts that give you something exciting to enjoy" />
                    <Button text="Menu's" />
                </div>
            </div>
        </Styled>
    )
};

export default LittlePlates;
