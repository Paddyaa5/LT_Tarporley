import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
//images
import beer1 from '../../images/beer1.jpg'
import beer2 from '../../images/beer2.jpg'
import beer3 from '../../images/beer4.jpg'
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
    .craft-beers{
        position: relative;
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 30% 30% 40%;
        grid-template-rows: 60% 40%;
        gap: 10px 10px;
        grid-template-areas:
            "beer-text beer-text beer1"
            "beer2 beer3 beer1";
        @media screen and (max-width: 500px){
            margin-top: 60px;
            grid-template-columns: 1fr;
            grid-template-rows: 62% 38%;
            gap: 10px 10px;
            grid-template-areas:
            "beer-text"
            "beer3";
        }
        .beer1-container{
            grid-area: beer1;
            @media screen and (max-width: 500px){
                display: none;
            }
            img{
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
        .beer2-container{
            grid-area: beer2;
            @media screen and (max-width: 500px){
                display: none;
            }
            img{
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
        .beer3-container{
            grid-area: beer3;
            img{
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
        .beer-text{
            grid-area: beer-text;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 20px;
        }
    }
`

const CraftBeer = () => {
    return (
        <Styled>
            <div className="craft-beers">
                <div className="beer1-container">
                    <img src={beer1} alt="little-tap-craftbeer-1" />
                </div>
                <div className="beer2-container">
                    <img src={beer2} alt="little-tap-craftbeer-2" />
                </div>
                <div className="beer3-container">
                    <img src={beer3} alt="little-tap-craftbeer-3" />
                </div>
                <div className="beer-text">
                    <Title text="Craft Beers" />
                    <Headline text="We take huge pride in our beer selection" />
                    <SectionText text="With three cask pumps & seven keg lines we're able to offer some real one offs, different styles of quality beer, as well as some old favourites." />
                    <Button text="See More" />
                </div>
            </div>
        </Styled>
    )
}

export default CraftBeer
